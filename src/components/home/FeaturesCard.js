import React from "react";

const FeaturesCard = (props) => {
  const { title, img, content } = props;

  return (
    <div className="item">
      <div className="feature-carousel-content">
        <div className="feature-carousel-thumb status-blue">
          <img src={img} alt="feature" />
        </div>
        <div className="feature-carousel-details">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
