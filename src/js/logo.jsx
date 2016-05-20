import React from 'react';

const imgStyle = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
};

export default () => (
    <h1>
        <img style={imgStyle} src="./images/logo.png" alt="Bacon.js" />
    </h1>
);
