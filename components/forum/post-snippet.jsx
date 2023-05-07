import { useRouter } from 'next/router'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { RWebShare } from "react-web-share";
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios'
import React from 'react';
import { Comment } from '@mui/icons-material';
import Link from 'next/link'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
const PostSnippet = (props) => {
    const [post, setPost] = React.useState(props.post)
    const date = new Date(post.createdAt)
    return (<div className="post-snippet">
        <div>
            <Link href={`/forum/${post._id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="post-snippet-header-background">

                    <div className="post-snippet-header">
                        <div className="post-snippet-header-user">

                            <img src={post.user.profilePic} alt={post.user.name} />
                            <p>{post.user.name}</p>

                        </div>
                        <p>{months[date.getMonth()] + ' ' + date.getDate() + ", " + date.getFullYear()}</p>
                    </div>
                </div>

                <h1 className="post-snippet-title">
                    {post.title}
                </h1>
                <div className="post-snippet-content">
                    {post.type === 'image' ? <img src={post.content} alt="post" /> : post.type === "video" ? <video src={post.content} controls={true} ></video> :
                        <p>
                            {post.content}
                        </p>

                    }
                </div>
            </Link>
            <div className="post-snippet-footer">
                <div className="post-snippet-footer-left">
                    <ThumbUpIcon className="post-snippet-footer-icon" style={post.likes.find(e => e.toString() === props.auth._id.toString()) ? { color: "#0D68EE" } : {}} onClick={(a => {
                        (async () => {
                            try {
                                let data = await axios.post(`http://localhost:3000/api/likes`, {
                                    id: post._id,
                                    type: "onPost"
                                })
                                setPost(state => ({ ...state, likes: data.data.likes }))
                            }
                            catch (err) {
                                console.log(err)
                            }
                        })()
                    })} />
                    <p className="post-snippet-footer-length">{post.likes.length}</p>
                </div>
                <div className="post-snippet-footer-right">
                    <RWebShare
                        data={{

                            url: document.location.href,
                            title: post.title,
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <ShareIcon className="post-snippet-footer-right-icon" />
                    </RWebShare>
                </div>
                <Link className="post-snippet-footer-right" href={`/forum/${post._id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Comment className="post-snippet-footer-right-icon" />
                    <p className="post-snippet-footer-length">{post.comments.length}</p>
                </Link>

            </div>
        </div>
    </div>)
}

export default PostSnippet;