import React from "react";
import "./article.css";

const Article = ({ imgURL, date, text }) => {
  return (
    <div className="gpt3__article" id="present">
      <div className="gpt3__article-img">
        <img src={imgURL} alt="" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <a href="#present">Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
