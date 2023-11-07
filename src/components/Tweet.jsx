/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import User from "./user"; 
import Actions from "./Actions";
// eslint-disable-next-line no-unused-vars
import ProfileImage from "./ProfileImage"; 
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
      <div className="body">
        <div className="top">
<ProfileImage image={IMAGE_URL} />
          <User name={props.tweet.name} handle={props.tweet.handle} />
          <span className="timestamp"> TWEET_TIMESTAMP </span>
        </div>

        <p className="message">{props.tweet.message}  <Message message={TWEET_MESSAGE} />
</p>

        <div className="Actions">
        <Actions />

          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
