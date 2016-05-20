import React from 'react';

const style = {
    overflow: 'hidden'
};

export default ({children}) => (
    <div style={style}>
        {children}
    </div>
);
