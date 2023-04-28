import Comments from "../../../models/Comments";
import Post from "../../../models/post";
import User from "../../../models/User";
import db from "../../../models/db";

const POST = async (req, res) => {
    db()
    const user = req.user;
    const {
        type,
        id
    } = req.query;
    if (type === "onComment") {
        const comment = await Comments.findById(id);
        if (!comment) {
            return res.status(404).json({
                errorMessage: "Comment not found"
            });
        }
        if (comment.likes.find((like) => like.toString() === user._id.toString())) {
            let likes = comment.likes.filter((like) => like.toString() !== user._id.toString())
            comment.likes = likes
            await comment.save()
        } else {
            comment.likes.push(user._id)
            await comment.save()
        }
        return res.json({
            message: "Action Successful",
            comment
        });
    } else if (type === "onPost") {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                errorMessage: "Post not found"
            });

        }
        if (post.likes.find((like) => like.toString() === user._id.toString())) {
            let likes = post.likes.filter((like) => like.toString() !== user._id.toString())
            post.likes = likes
            await post.save()
        } else {
            post.likes.push(user._id)
            await post.save()
        }
        return res.json({
            message: "Action Successful",
            post
        });
    } else {
        return res.status(404).json({
            errorMessage: "Invalid Request"
        });
    }
}
export default auth(POST);