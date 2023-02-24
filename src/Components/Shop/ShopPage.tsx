import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ShopPage = () => {
  const { products } = useSelector((state: any) => state.productsContext);

  return (
    <div className="products-container">
      {products.map((value: any) => {
        return (
          <ProductCard
            key={value.id}
            id={value.id}
            name={value.name}
            price={value.price}
            imageUrl={value.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ShopPage;
