import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from '../Tweetbox/TweetBox'
import Post from '../Post/Post';
import db from '../firebase';
import FlipMove from 'react-flip-move';
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
            <FlipMove>
                {posts.map(posts => (
                    <Post
                        key={posts.text}
                        displayname={posts.displayname}
                        username={posts.username}
                        verified={posts.verified}
                        text={posts.text}
                        image={posts.image}
                        avatar={posts.avatar}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
