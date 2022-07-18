const typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1);

const isString = (value) => typeOf(value) === 'String';

const isObject = (value) => typeOf(value) === 'Object';

const everyValueObjectIsEmpty = (object) => {
    for (let value of object) {
        if (value !== undefined || value !== null) {
            if (isString(value) && !value.isEmpty()) return false;
            return false;
        }
    }
    return true;
};

const isEmptyObject = (value) => isObject(value) && (!Object.keys(value).length || everyValueObjectIsEmpty(value));

export { typeOf, isString, isObject, isEmptyObject, everyValueObjectIsEmpty };
