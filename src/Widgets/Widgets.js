import React from 'react';
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed"
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="search Twitter" type="text" />
            </div>
            <div className="widgets_widgetsContainer">
                <h2> what's happening </h2>
                <TwitterTweetEmbed tweetId={"1067768516076548096"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="AbrahamT_404"
                    options={{ height: 600 }}
                />
                <TwitterShareButton 
                url={"https://google.com"}
                options={{text:"this is a share as a tweet button ", via :"AbrahamT_404"}}
                />
            </div>
        </div>
    )
}

export default Widgets
