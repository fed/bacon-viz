import React, {Component} from 'react';
import Bacon from 'baconjs';
import Timeline from './timeline';
import PropertyEvent from './property-event';
import StreamEvent from './stream-event';

const TICK_INTERVAL = 17;

const getOffsetStream = () => {
    return Bacon
        .interval(TICK_INTERVAL, TICK_OFFSET)
        .scan((a, b) => a + b);
};

export default class Observable extends Component {
    state = {
        events: []
    }

    componentWillMount() {
        this.unsubscribe = this.subscribe(this.props.observable);
    }

    componentWillReceiveProps(nextProps) {
        this.unsubscribe();
        this.unsubscribe = this.subscribe(nextProps.observable);
    }

    subscribe(observable) {
        const stream = observable instanceof Bacon.Property ? observable.changes() : observable;
        const timeProperty = Bacon
            .fromPoll(TICK_INTERVAL, () => new Date().getTime())
            .toProperty(new Date().getTime());

        const eventsProperty = Bacon
            .when([timeProperty, stream], (time, value) => ({value, time}))
            .scan([], (events, event) => events.concat(event));

        return Bacon.combineTemplate({
            time: timeProperty,
            events: eventsProperty
        }).onValue(({time, events}) => this.setState({time, events}));
    }

    render() {
        const {observable} = this.props;
        return observable instanceof Bacon.Property ? this.renderProperty() : this.renderStream();
    }

    renderProperty() {
        const {time} = this.state;
        const events = this.state.events.slice();
        for (var i = 0, l = events.length; i < l; i++) {
            const event = events[i];
            const nextEvent = events[i + 1];
            event.endTime = (nextEvent) ? nextEvent.time : time;
        }
        return (
            <Timeline>
                {events.map(event => <PropertyEvent time={time} event={event} />)}
            </Timeline>
        );
    }

    renderStream() {
        const {time, events} = this.state;
        return (
            <Timeline>
                {events.map(event => <StreamEvent time={time} event={event} />)}
            </Timeline>
        );
    }
}
