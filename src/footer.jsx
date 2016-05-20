import React from 'react';

const style = {
    padding: '9em 3em 3em',
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#999'
};

const linkStyle = {
    color: 'inherit'
};

export default () => (
    <div style={style}>
        <p>Visual examples for <a href="https://baconjs.github.io/" style={linkStyle}>Bacon.js</a></p>
        <p>Copyright © 2016 <a href="http://blakehaswell.com/" style={linkStyle}>Blake Haswell</a></p>
    </div>
);
