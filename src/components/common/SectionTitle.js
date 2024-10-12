import React from "react";

const SectionTitle = (props) => {
  const { title, content } = props;

  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default SectionTitle;
