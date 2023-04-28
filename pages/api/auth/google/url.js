import {
    google
} from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
)

export default async function handler(req, res) {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ];
    let url = await oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    })
    return res.json({
        url
    })

}