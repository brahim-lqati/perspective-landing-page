import React from "react";
import styles from "./style.module.css";
import Title from "../Title";
import Product from "../Product";
import Card from "../Card";

function Products() {
  const data = [
    {
      name: "Perspective Glasses",
      desc: "Smart glasses based on artificial intelligence that allow the user to read any picture by detecting the text. Perspective Glasses can be used by visually impaired people, and those who struggle to read.",
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3Nlc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Perspective Writer",
      desc: "Perspective Writing is a pen that allows its user to overcome his disability and get even more autonomy and independence through a pen plotter.",
      img: "https://images.unsplash.com/photo-1608142172765-6949c94646ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div id="products" className={styles.products}>
      <Card id="products">
        <Title title="Our Impressive Products" />
        {data.map((product) => (
          <Product data={product} />
        ))}
      </Card>
    </div>
  );
}

export default Products;
