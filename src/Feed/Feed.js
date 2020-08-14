import React from 'react';
import "./Feed.css";
import TweetBox from '../Tweetbox/TweetBox'
import Post from '../Post/Post';
function Feed() {
    return (
        <div className="feed">
            {/* header  */}
            <div className="feed__header">
                <h2> Home </h2>
            </div>
            {/* tweatbox  */}
            <TweetBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />


        </div>
    )
}

export default Feed
