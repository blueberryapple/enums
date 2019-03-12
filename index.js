module.exports = {
    enums: arrOfEnums =>
        arrOfEnums.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {}),
};
