import db from "../../../../config/db";

import axios from 'axios'
import User from '../../../../models/User';
import {
    create
} from '../../../../utils/jwt'
import {
    google
} from 'googleapis';
import { setCookie } from 'nookies';



const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
)

export default async function handler(req, res) {
    try {
        await db()
        let code = req.query.code;
        const {
            tokens
        } = await oauth2Client.getToken(code);
        const googleUser = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${tokens.id_token}`,
                    },
                },
            )
            .then(res => res.data)
            .catch(error => {
                throw new Error(error.message);
            });
        console.log(googleUser)
        const user = await User.findOne({
            googleId: googleUser.id
        });
        if (!user) {
            const newUser = new User({
                name: googleUser.name,
                email: googleUser.email,
                googleId: googleUser.id,
                profilePic: googleUser.picture
            });
            await newUser.save();
            const token = await create(newUser._id);
            setCookie({
                res
            }, 'token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            return res.redirect('/')
        } else {
            const token = await create(user._id);
            setCookie({
                res
            }, 'token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            return res.redirect('/')
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            errorMessage: err.message
        });
    }


}