import React from "react";
import Feature from "../../components/feature/Feature";
import "./wgpt.css";

const contentText = [
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];

const Wgpt = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-containers">
        {contentText.map((content, index) => (
          <Feature title={content.title} text={content.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Wgpt;
