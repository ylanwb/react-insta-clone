import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { posts, likePost, dislikePost } = props;
  return (
    <div className="post-border">
      <PostHeader username={posts.username} thumbnailUrl={posts.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={posts.imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={likePost} dislikePost={dislikePost} numberOfDislikes={posts.dislikes} numberOfLikes={posts.likes} postId={posts.id} />
      {/* Comments also wants its props! */}
      <Comments comments={posts.comments} />
    </div>
  );
};

export default Post;
