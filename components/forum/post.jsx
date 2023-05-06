import axios from 'axios'
import React from 'react';
import { useRouter } from 'next/router'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Post = (props) => {
    const [post, setPost] = React.useState(null)
    const router = useRouter()
    let id = router.query.id;

    React.useEffect(() => {
        (async () => {
            try {
                if (id) {
                    let data = await axios.get(`http://localhost:3000/api/posts?id=${id}`)
                    setPost(data.data.post)

                }


            }
            catch (err) {
                console.log(err)

            }
        })()

    }, []);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];

    if (post) {
        let date = new Date(post.createdAt);
        return (
            <div className="post">
                <div>
                    <div className="post-header-background">

                        <div className="post-header">
                            <div className="post-header-user">

                                <img src={post.user.profilePic} alt={post.user.name} />
                                <p>{post.user.name}</p>

                            </div>
                            <p>{months[date.getMonth()] + ' ' + date.getDate() + ", " + date.getFullYear()}</p>
                        </div>
                    </div>

                    <h1 className="post-title">
                        {post.title}
                    </h1>
                    <div className="post-content">
                        {post.type === 'image' ? <img src={post.content} alt="post" /> : post.type = "video" ? <video src={post.content} controls={true} ></video> :
                            <p>
                                {post.content}
                            </p>

                        }
                    </div>
                    <div className="post-footer">
                        <ThumbUpIcon className="post-footer-icon" onClick={(a => {
                            (async () => {
                                try {
                                    let data = await axios.post(`http://localhost:3000/api/likes`, {
                                        id: post._id,
                                        type:"onPost"
                                    })
                                    setPost(state => ({ ...state, likes: data.data.likes }))
                                }
                                catch (err) {
                                    console.log(err)
                                }
                            })()
                        })} />
                        <p className="post-footer-length">{post.likes.length}</p>

                    </div>
                </div>
                <div className="post-comments">
                    <h2>Comments</h2>
                    <form className='post-comments-new' onSubmit={async (e) => {
                        try {
                            e.preventDefault();
                            let data = await axios.post(`http://localhost:3000/api/comments`, {
                                content: e.target[0].value,
                                type: 'onPost',
                                ref: post._id
                            })
                            console.log(data.data)
                            setPost(state => ({ ...state, comments: [...state.comments, data.data.comment] }))
                        }
                        catch (err) {

                        }
                    }}>
                        <img src={props.auth.profilePic} alt={props.auth.name} />

                        <input type="text" placeholder="Write a comment..." />


                    </form>
                    <div className="post-comments-list">
                        {post.comments.map((comment, index) => {
                            let date = new Date(comment.createdAt);
                            console.log(comment)

                            return (
                                <div key={index} className="post-comment">
                                    <div className="post-comment-header">
                                        <div className="post-comment-user">
                                            <img src={comment.user.profilePic} alt={comment.user.name} />
                                            <p>{comment.user.name}</p>
                                        </div>
                                        <p>{months[date.getMonth()] + ' ' + date.getDate() + ", " + date.getFullYear()}</p>
                                    </div>
                                    <p className="post-comment-inner"> {comment.content}</p>
                                </div>

                            )
                        }
                        )}

                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }

}

export default Post;