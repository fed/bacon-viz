import React, {Component} from 'react';

export default class StreamEvent extends Component {
    render() {
        const {time, event} = this.props;
        const style = {
            position: 'absolute',
            right: (time - event.time) / 25,
            top: -20,
            height: 38,
            lineHeight: '38px',
            width: 38,
            marginRight: -40,
            fontWeight: 'bold',
            textAlign: 'center',
            border: '2px solid #333',
            background: '#fff',
            borderRadius: '100%'
        };
        return (<span style={style}>{event.value.toString()}</span>);
    }
}
