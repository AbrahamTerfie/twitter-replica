import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(
    displayname,
    username,
    verified,
    text,
    image,
    avatar
) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src=" " />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>usernname
                            <span className="post_headerspecial">
                                <VerifiedUserIcon className="post_badge" /> @thisusername
                            </span>
                        </h3>
                       </div>
                       <div>
                        <div className="post_headerDescription">
                            <p>
                                this is a random place holder text , 
                                this is a random placeholder text ,
                               
                            </p>
                        </div>
                        <img src="https://media.giphy.com/media/IcifS1qG3YFlS/giphy.gif" alt="" />
                            <div className="post_footer">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                                <RepeatIcon fontSize="small"/>
                                <FavoriteBorderIcon fontSize="small"/>
                                <PublishIcon fontSize="small/>"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
