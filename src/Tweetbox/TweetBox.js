import React from 'react';
import "./Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import AvatarR from '../assets/avatar.png';


function TweetBox() {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox_input">
                    <Avatar src={AvatarR} />
                   <input placeholder="what's happening ?"></input>
                </div>
                <input className="tweetBox_inputImage" placeholder="image url  ?"></input>
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
