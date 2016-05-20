import React from 'react';
import NavigationGroup from './navigation-group';
import groupBy from './group-by';

const navigationStyle = {
    borderTop: '1px solid #ddd'
}

export default ({examples, selectedExample, onClick}) => {
    const groupedExamples = groupBy('category', examples);
    return (
        <ul style={navigationStyle}>
            {Object.keys(groupedExamples).map(category => (
                 <li>
                     <NavigationGroup title={category}
                                      examples={groupedExamples[category]}
                                      selectedExample={selectedExample}
                                      onClick={onClick} />
                 </li>
             ))}
        </ul>
    );
}
