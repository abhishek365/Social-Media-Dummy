import { Form, redirect } from "react-router-dom";

function Createpost() {
  return (
    <>
      <Form className="create-post" method="POST">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you .. ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            name="body"
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about you"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            User Id
          </label>
          <input
            name="userId"
            type="text"
            className="form-control"
            id="userid"
            placeholder="Enter your user id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            name="reactions"
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter mulitple tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => {
      // createPost(data);
      console.log(data);
    });

  return redirect("/");
};

export default Createpost;
