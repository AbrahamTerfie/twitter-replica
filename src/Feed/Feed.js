import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from '../Tweetbox/TweetBox'
import Post from '../Post/Post';
import db from '../firebase';
function Feed() {

    // displayName,
    // userName,
    // verified,
    // text,
    // image,
    // avatar
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, [])
    return (
        <div className="feed">

            <div className="feed__header">
                <h2> Home </h2>
            </div>

            <TweetBox />

            {posts.map(posts => (
                <Post
                    displayname={posts.displayname}
                    username={posts.username}
                    verified={posts.verified}
                    text={posts.text}
                    image={posts.image}
                    avatar={posts.avatar}
                />
            ))}

        </div>
    )
}

export default Feed
