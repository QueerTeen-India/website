import User from "../../../models/User";
import db from "../../../config/db";
import auth from "../../../middlewares/auth";
db()

const UserHandler = async (req, res) => {
    try {
        let user = req.user
        return res.json(user)
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}
export default auth(UserHandler)