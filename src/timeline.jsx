import React, {Component} from 'react';

export default class Timeline extends Component {
    render() {
        const style = {
            height: 2,
            margin: '39px 0',
            background: '#999',
            position: 'relative'
        };
        return (<div style={style}>{this.props.children}</div>);
    }
}
