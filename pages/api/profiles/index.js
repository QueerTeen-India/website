import db from "../../../config/db";
import User from "../../../models/User";
import auth from "../../../middlewares/auth";

const UserHandler = async (req, res) => {
    try {
        await db()
        let id = req.query.id;
        let user = await User.findById(id).populate('followers').populate('following');
        if(!user){
            return res.status(404).json({
                errorMessage: "User not found!"
            })
        }
        return res.json(user)
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default auth(UserHandler)
