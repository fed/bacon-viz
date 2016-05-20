import React, {Component} from 'react';

const titleStyle = {
    border: 'solid #ccc',
    borderWidth: '1px 0',
    marginTop: '-1px',
    padding: '0.5rem 1rem',
    background: '#ddd',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
};

const linkStyle = {
    display: 'block',
    borderBottom: '1px solid #ddd',
    padding: '1rem',
    color: '#000'
}

const getLinkStyle = (isHover, isActive) => ({
    ...linkStyle,
    background: isHover || isActive ? '#fff' : 'transparent'
});

export default class NavigationGroup extends Component {
    state = {
        hoveredExample: null
    };

    onMouseEnter = example => () => {
        this.setState({
            hoveredExample: example
        });
    }

    onMouseLeave = () => {
        this.setState({
            hoveredExample: null
        });
    }

    render() {
        const {title, examples, selectedExample, onClick} = this.props;
        const {hoveredExample} = this.state;
        const onLinkClick = example => event => {
            event.preventDefault();
            onClick(example);
        };
        return (
            <div>
                <div style={titleStyle}>{title}</div>
                <ul>
                    {examples.map(example => (
                         <li>
                             <a href="#"
                                style={getLinkStyle(example === hoveredExample, example === selectedExample)}
                                onClick={onLinkClick(example)}
                                onMouseEnter={this.onMouseEnter(example)}
                                onMouseLeave={this.onMouseLeave}>
                                 {example.name}
                             </a>
                         </li>
                     ))}
                </ul>
            </div>
        )
    }
}
