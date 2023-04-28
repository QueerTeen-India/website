import db from "../../../config/db";
import User from "../../../models/User";
import auth from "../../../middlewares/auth";

const UserHandler = async (req, res) => {
    try {
        await db()
        let user = await User.findById(req.user._id).populate('followers').populate('following');
        return res.json(user)
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default auth(UserHandler)
