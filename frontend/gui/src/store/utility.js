export const updateObject = (oldObject, updateProperies) => {
    return {
        ...oldObject,
        ...updateProperies
    }
}