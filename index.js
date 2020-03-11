exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('changes from git to azure then lambda'),
    };
    return response;
};
