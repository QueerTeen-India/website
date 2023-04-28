import db from "../../../config/db";
import User from "../../../models/User";
import auth from "../../../middlewares/auth";

const UserHandler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await db()
            let {
                bio
            } = req.body
            if (!bio) {
                return res.status(400).json({
                    errorMessage: "Bio is required!"
                })
            }
            if (!req.user) {
                return res.status(404).json({
                    errorMessage: "User not found!"
                })
            }
            req.user.bio = bio;
            await req.user.save();
            return res.status(200).json({
                message: "Bio updated successfully!"
            })

            return res.json(user)
        } catch (err) {
            return res.status(500).json({
                errorMessage: err.message || "Internal Server Error"
            });
        }
    } else {
        try {
            let user = req.user
            return res.json(user)
        } catch (err) {
            return res.status(500).json({
                errorMessage: err.message || "Internal Server Error"
            });
        }
    }
}

export default auth(UserHandler)