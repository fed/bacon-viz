import React, {Component} from 'react';

export default class PropertyEvent extends Component {
    render() {
        const {time, event} = this.props;
        const style = {
            position: 'absolute',
            right: (time - event.endTime) / 25,
            top: -20,
            height: 38,
            lineHeight: '38px',
            width: (event.endTime - event.time) / 25,
            marginRight: 0,
            fontWeight: 'bold',
            textAlign: 'center',
            border: '2px solid #333',
            background: '#fff'
        };
        return (<span style={style}>{event.value.toString()}</span>);
    }
}
