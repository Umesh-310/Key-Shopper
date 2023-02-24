import React from "react";

const CategoryItem = (props : { title: string; imgUrl: string }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{props.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
