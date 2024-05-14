import { createContext, useEffect, useReducer, useState } from "react";

export const postContext = createContext({
  postLists: [],
  fetching: false,
  createPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentPostList.filter((post) => {
        return post.id !== action.payload.id;
      });
    case "ADD_POST":
      return [
        action.payload,
        ...currentPostList,
      ];
    case "SET_INITIAL_POST":
      return action.payload;
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postLists, dispatcher] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((response) => response.json())
      .then((data) => {
        dispatcher({
          type: "SET_INITIAL_POST",
          payload: data.posts,
        });
        setFetching(false);
      })
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, []);

  const createPost = (post) => {
    dispatcher({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (id) => {
    dispatcher({
      type: "DELETE_POST",
      payload: { id },
    });
  };

  return (
    <postContext.Provider
      value={{
        postLists,
        fetching,
        createPost,
        deletePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostListProvider;
