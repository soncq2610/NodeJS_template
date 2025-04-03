// Common response

/**
 * @param {import('express').Response} res
 */

module.exports.successResponse = (res, status, payload) => {
    return res.json({
        status: status,
        data: payload
    })
}

module.exports.errorResponse = (res, message) => {
    return res.json({
        error: message
    })
}