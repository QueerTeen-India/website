import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import PostSnippet from './post-snippet';
import { useEffect } from 'react';


const Forum = (props) => {
    const [state, setState] = React.useState({
        items: [],
        hasMore: false
    });
    let items = state.items;
    const fetchData = async () => {

        const request = await axios.get(`/api/posts/getAll?from=${items.length}`);
        const data = request.data;

        setState(state => ({ ...state, hasMore: data.post.length === 10, items: [...state.items, ...data.post] }));
    }
    useEffect(() => {
        if (document) {

            (
                async () => {
                    await fetchData();
                }
            )();
        }
        console.log('i fire once');
    }, [])

    return <div className="forum">
        <div className="forum-header">
            <h1>Forum</h1>
            <p>Connect with our community around the world.</p>
        </div>
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}

            hasMore={state.hasMore}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {items.map((post, index) => {
                return <PostSnippet auth={props.auth} key={index} post={post} />
            })}
        </InfiniteScroll>
    </div>

}

export default Forum;