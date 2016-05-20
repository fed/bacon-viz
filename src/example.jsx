import React, {Component} from 'react';
import Observable from './observable';

export default class Example extends Component {
    render() {
        const {inputs, output} = this.props.example;
        return (
            <div>
                {inputs.map(this.renderExample)}
                {this.renderExample(output)}
            </div>
        );
    }

    renderExample({code, observable}) {
        const codeStyle = {
            marginTop: 80,
            fontFamily: 'monospace',
            fontSize: '1.125rem',
            textAlign: 'center'
        };
        return (
            <div>
                <div style={codeStyle}>{code}</div>
                <Observable observable={observable} />
            </div>
        );
    }
}
