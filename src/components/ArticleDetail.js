import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const ARTICLE_DETAIL = gql`
  query getArticleById($id: ID!) {
    getArticleById(id: $id) {
      id
      title
      content
    }
  }
`;

const DELETE_ARTICLE = gql`
  mutation deletedArticle($id: ID!) {
    deleteArticle(id: $id)
  }
`;

export default function ArticleDetail(props) {
  let history = useHistory();
  let id = props.match.params.id;
  const { data, loading, error } = useQuery(ARTICLE_DETAIL, {
    variables: { id },
  });
  const [deletedArticle] = useMutation(DELETE_ARTICLE);
  const handleClick = () => {
    deletedArticle({ variables: { id } });
    history.push("/");
  };
  return (
    <div>
      {data && (
        <div className="blog">
          <div className="row">
            <div className="col-11">
              <h3>{data.getArticleById.title}</h3>
              {data.getArticleById.content}
            </div>
            <div className="col-1">
              <button className="btn btn-danger" onClick={handleClick}>
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
