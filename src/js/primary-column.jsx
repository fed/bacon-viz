import React from 'react';

const style = {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
};

export default ({children}) => (
    <div style={style}>
        {children}
    </div>
);
