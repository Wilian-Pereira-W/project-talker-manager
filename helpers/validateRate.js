const validadeRate = (valueRate) => {
    const integer = Number.isInteger(valueRate);
    const isValid = !integer || valueRate < 1 || valueRate > 5;
    return isValid;
};

module.exports = validadeRate;