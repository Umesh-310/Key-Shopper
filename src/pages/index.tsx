import React, { useEffect } from "react";
import HomeComponents from "@/Components/Home-Page-component/HomeComponents";
const categories = [
  {
    id: 1,
    title: "HATS",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "JACKETS",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "SNEAKERS",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "WOMENS",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "MENS",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Home = () => {
  return (
    // <AuthContext.Provider value={{ currentUser: "abc" }}>
    <HomeComponents categories={categories} />
    // </AuthContext.Provider>
  );
};

export default Home;
