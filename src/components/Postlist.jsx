import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postContext } from "../store/postlistStore";
import WelcomeMesssage from "./WelcomeMesssage";
import LoadingBadge from "./LoadingBadge";

function Postlist() {
  const {postLists, fetching} = useContext(postContext);
  return (
    <>
      {fetching && <LoadingBadge />}
      {!fetching && postLists.length === 0 && <WelcomeMesssage />}
      {!fetching && postLists.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default Postlist;
