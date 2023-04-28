const jwt = require('jsonwebtoken');

export const create = async (id) => {
    const token = await jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: 30 * 24 * 60 * 60 // 30 days
    });
    return token;
}

export const verify = async (token) => {
    try {
        const verified = await jwt.verify(token, process.env.JWT_SECRET);
        return verified.id;
    } catch (err) {
        throw err
    }
}