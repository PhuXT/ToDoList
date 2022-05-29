const repoRespone = (statusCode, message, data = []) => {
    return {
        statusCode: statusCode,
        data: {
            message,
            data,
        },
    };
};

module.exports = repoRespone;
