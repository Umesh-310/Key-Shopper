import React from "react";
import CategoryItem from "./CategoryItem";

const HomeComponents: React.FC<{
  categories: { id: number; title: string; imageUrl: string }[];
}> = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((val) => {
        return (
          <CategoryItem key={val.id} imgUrl={val.imageUrl} title={val.title} />
        );
      })}
    </div>
  );
};

export default HomeComponents;
