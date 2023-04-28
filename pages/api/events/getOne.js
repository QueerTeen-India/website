import auth from "../../../middlewares/auth";
import Events from "../../../models/events";
import db from "../../../models/db";
import User from "../../../models/User";

const GET = async (req, res) => {
    try{
        db()
        const {id} = req.query;
        const event = await Events.findById(id).populate('user', 'name profilePic _id');
        return res.json({
            event
        })
    }
    catch(err){
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

export default GET