import Link from "next/link";
import BuildPC from "../../../components/BuildPC";
import Layouts from "../../../components/Layout/Layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PcBuilder({ Products, categories }) {
  // const findSelectedProduct = (productId) => {
  //   for (const category in Products) {
  //     const selectedProduct = Products[category].find(
  //       (product) => product.id === Number(productId)
  //     );
  //     if (selectedProduct) {
  //       return selectedProduct;
  //     }
  //   }
  //   return null;
  // };
  // const selectedProduct = findSelectedProduct(productId);
  // setSelectedProductsId(productId);
  // console.log(productsId);

  return (
    <div>
      <h1 className="m-8 text-3xl flex justify-center">
        Build Your Powerful PC
      </h1>

      <BuildPC Products={Products} Categories={categories} />
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  const categories = Object.keys(data);

  return {
    props: {
      Products: data,
      categories: categories,
    },
  };
};
