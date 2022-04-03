
var counter = 0;
const addUniqueNumber = (content) => {
    counter = counter + 1;
    return content + counter;
};

module.exports = { addUniqueNumber };