const jwt = require('jsonwebtoken');
import {
    parseCookies
} from 'nookies';
import User from '../models/User';
import {
    verify
} from '../utils/jwt';
import db from "../config/db";

const auth = (handler) => {

    return async (req, res) => {
        try {
            const cookies = parseCookies({
                req
            });
            await db()
            const token = cookies['token']
            if (!token) {
                return res.status(401).json({
                    errorMessage: "Unauthorized"
                });
            }
            let id = await verify(token);
            req.user = await User.findById(id);
            return await handler(req, res);

        } catch (err) {
            return res.status(401).json({
                errorMessage: "Unauthorized"
            });
        }
    }
}



export default auth