import auth from "../../../middlewares/auth";
import User from "../../../models/User";
import db from "../../../models/db";

const POST = async (req, res) => {
    try {
        await db()
        const {
            id
        } = req.query;
        const user = req.user;
        let following = await User.findById(id);
        if (!following) {
            return res.status(404).json({
                errorMessage: "User not found!"
            })
        }
        if (following.followers.includes(user._id)) {
            let followers = following.followers.filter((follower) => follower.toString() !== user._id.toString());
            following.followers = followers;
            await following.save();
            let followingList = user.following.filter((following) => following.toString() !== id.toString());
            user.following = followingList;
            await user.save();
            return res.status(200).json({
                message: "Unfollowed successfully!"
            });

        } else {
            following.followers.push(user._id);
            await following.save();
            user.following.push(following._id);
            await user.save();
            return res.status(200).json({
                message: "Followed successfully!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message | "Something went wrong! Please try again!"
        })

    }
}

export default auth(POST);