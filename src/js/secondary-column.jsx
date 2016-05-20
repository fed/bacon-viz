import React from 'react';

const style = {
    float: 'left',
    width: '20%',
    background: '#eee',
    borderRight: '1px solid #ddd',
    overflowY: 'scroll',
    height: '100%'
};

export default ({children}) => (
    <div style={style}>
        {children}
    </div>
);
