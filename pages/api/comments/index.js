import Comments from '../../../models/Comments';
import auth from '../../../middlewares/auth';
import Post from '../../../models/post';
import db from "../../../models/db";
import News from '../../../models/news';
const POST = async (req, res) => {
    try {
        let user = req.user
        let {
            ref,
            type,
            content
        } = req.body;
        if (type === "onPost") {
            let post = await Post.findById(postId)
            if (!post) {
                return res.status(404).json({
                    errorMessage: "Post not found"
                });
            }
            let comment = new Comments({
                content,
                user: user._id,
                referringPost: post._id,
                referringComment: null,
                type
            })
            await comment.save()
            post.comments.push(comment._id)
            await post.save()
            return res.json({
                message: "Comment created successfully",
                comment
            });
        } else if (type === "onComment") {
            let comment = await Comments.findById(ref)
            if (!comment) {
                return res.status(404).json({
                    errorMessage: "Comment not found"
                });
            }
            let newComment = new Comments({
                content,
                user: user._id,
                referringPost: null,
                referringComment: comment._id,
                type
            })
            await newComment.save()
            comment.comments.push(newComment._id)
            await comment.save()
            return res.json({
                message: "Comment created successfully",
                comment
            });
        }
        else if(type==="onNews"){
            let news = await News.findById(ref)
            if (!news) {
                return res.status(404).json({
                    errorMessage: "News not found"
                });
            }
            let comment = new Comments({
                content,
                user: user._id,
                referringPost: null,
                referringComment: null,
                referringNews:news._id,
                type
            })

        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}

const GET = async (req, res) => {
    try {
        let {
            id
        } = req.query;
        const comment = await Comments.findById(id).populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        })
        if (!comment) {
            return res.status(404).json({
                errorMessage: "Comment not found"
            });
        }
        return res.json(comment)
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}
const DELETE = async (req, res) => {
    try {
        let {
            id
        } = req.query;
        const user = req.user;
        const comment = await Comments.findById(id);
        if (user._id.toString() === comment.user.toString()) {
            await comment.delete()
            return res.json({
                message: "Comment deleted successfully",
                comment
            });
        } else {
            return res.status(401).json({
                errorMessage: "Unauthorized"
            });
        }
    } catch (err) {
        return res.status(500).json({
            errorMessage: err.message || "Internal Server Error"
        });
    }
}
const handler = async (req, res) => {
    await db();
    if (req.method === 'POST') {
        return auth(POST(req, res))
    } else if (req.method === 'GET') {
        return GET(req, res)
    } else if (req.method === 'DELETE') {
        return auth(DELETE(req, res))
    } else {
        res.status(404).json({
            errorMessage: "Invalid Request Method"
        })
    }
}

export default handler;