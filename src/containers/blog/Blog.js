import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const blogData = [
  {
    imgURL: blog01,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgURL: blog02,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgURL: blog03,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgURL: blog04,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgURL: blog05,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading ">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        {blogData.map((blog) => (
          <Article imgURL={blog.imgURL} date={blog.date} text={blog.text} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
