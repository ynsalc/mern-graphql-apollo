import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const GETARTICLE = gql`
  {
    getArticles {
      id
      title
      content
    }
  }
`;

export default function ArticleList() {
  const { data, loading, error } = useQuery(GETARTICLE);

  let articleTemp;

  if (loading) {
    articleTemp = <p>Articles Loading...</p>;
  } else if (data) {
    articleTemp = data.getArticles.map((article) => {
      return (
        <div className="blog" key={article.id}>
          <Link className="text-decorated" to={`/article/${article.id}`}><h5>{article.title}</h5></Link>
          {article.content}
        </div>
      );
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col-9">{articleTemp}</div>
        <div className="col-3">
            <div className="categories">Kategoriler</div>
        </div>
      </div>
    </div>
  );
}
