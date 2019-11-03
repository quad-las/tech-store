import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return <h1>home page</h1>;
        }}
      </ProductConsumer>
    </>
  );
}
