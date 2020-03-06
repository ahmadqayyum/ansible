exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Ahmad Lambda Github Actions!'),
    };
    return response;
};
