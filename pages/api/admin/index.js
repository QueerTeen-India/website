import User from "../../../models/User";
import db from "../../../config/db";
import auth from "../../../middlewares/auth";


const AdminPanel = (req, res) => {
    try {
        let user = req.user;
        if (user.adminLevel > 0) {
            return res.json({
                msg: "You are an admin"
            });
        } else {
            return res.json({
                msg: "You are not an admin"
            });
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default auth(AdminPanel)
