import auth from "../../../middlewares/auth";
import Post from "../../../models/post";
import db from "../../../models/db";

const POST = async (req, res) => {
    try {
        let user = req.user
        let {
            type,
            title,
            content
        } = req.body;
        if (type === "text") {
            let post = new Post({
                title,
                content,
                type,
                labels: title.split(' '),
                user: user._id
            })
            await post.save()
            return res.json({
                message: "Post created successfully",
                post
            });
        } else if (type === "image" || type === "video") {
            let {
                link,
                tags
            } = await imageUpload(user, content)
            let post = new Post({
                title,
                content: link,
                type,
                labels: [...title.split(' '), ...tags],
                user: user._id
            })
            await post.save()
            return res.json({
                message: "Post created successfully",
                post
            });
        }
        return res.json(user)
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
        const post = await Post.findById(id).populate('user', 'name profilePic _id').populate({
            path: 'comments',
            populate: {
                path: "comments"
            }
        })

        if (!post) {
            return res.status(404).json({
                errorMessage: "Post not found"
            });
        }
        return res.json({
            message: "Post fetched successfully",
            post
        });
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
        const post = await Post.findById(id);
        if (post.user.toString() === user._id.toString()) {
            await post.delete()
            return res.json({
                message: "Post deleted successfully",
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
    await db()
    if (req.method === 'POST') {
        return auth(POST(req, res))
    } else if (req.method === "GET") {
        return GET(req, res)
    } else if (req.method === "DELETE") {
        return auth(DELETE(req, res))
    } else {
        res.status(404).json({
            errorMessage: "Invalid Request Method"
        })
    }
}

export default (handler)