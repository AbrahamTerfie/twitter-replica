import React, { useState } from 'react';
import "./Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import AvatarR from '../assets/avatar.png';
import db from '../firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("  ");
    const [tweetImage, setTweetImage] = useState("  ");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayname: "blackman",
            username: "abraham",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:AvatarR
                // "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox_input">
                    <Avatar src={AvatarR} />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="what's happening ?" />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox_inputImage"
                    placeholder="image url  ?" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
