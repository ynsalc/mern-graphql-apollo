import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const ADD_ARTICLE = gql`
  mutation addedArticle($title: String!, $content: String!) {
    addArticle(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export default function AddArticle() {
  let history = useHistory();
  const [posts, setPost] = useState({
    title: "",
    content: "",
  });

  const [addedArticle, { loading }] = useMutation(ADD_ARTICLE, {
    update(proxy, result) {
      console.log(result);
    },
    variables: posts,
  });

  const onChange = (e) => {
    setPost({ ...posts, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addedArticle();
    history.push("/");
  };
  return (
    <div>
      <h3 className="text-center mt-2">Add Article</h3>
      <form onSubmit={onSubmit}>
        <div class="mb-3 mt-2">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            class="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="content" class="form-label">
            Content
          </label>
          <textarea
            class="form-control"
            id="content"
            rows="3"
            name="content"
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn btn-primary">Add Article</button>
      </form>
    </div>
  );
}
