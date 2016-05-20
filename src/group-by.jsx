export default (field, objects) => objects.reduce((groups, object) => {
    const value = object[field];
    const group = groups[value] || [];
    return {
        ...groups,
        [value]: group.concat(object)
    };
}, {});
