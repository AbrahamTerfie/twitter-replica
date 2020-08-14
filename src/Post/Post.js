import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(
   { displayname,
    username,
    verified,
    text,
    image,
    avatar}
) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayname}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                            </span>
                        </h3>
                    </div>
                    <div>
                        <div className="post_headerDescription">
                            <p>
                                {text}
                            </p>
                        </div>
                        <img src={image} alt="" />
                        <div className="post_footer">
                            <ChatBubbleOutlineIcon fontSize="small" />
                            <RepeatIcon fontSize="small" />
                            <FavoriteBorderIcon fontSize="small" />
                            <PublishIcon fontSize="small/>" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
