import React, { useContext } from "react";
import { postContext } from "../store/postlistStore";

function Post({ post }) {
  const {deletePost} = useContext(postContext)
  return (
    <>
      <div className="card post-card" >
        <div className="card-body">
          <h5 className="card-title">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {deletePost(post.id)}}>
              Delete
            </span>

            {post.title}
          </h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => {
            return (
              <span className="badge text-bg-primary hashtag" key={tag}>
                {tag}
              </span>
            );
          })}
          <div className="alert alert-primary reactions" role="alert">
            The post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
