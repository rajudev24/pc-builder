import { useRouter } from "next/router";
import Layouts from "../../../components/Layout/Layouts";
import Image from "next/image";
import { useContext, useState } from "react";
import { PCItemsContext } from "../../../context/buildItems";

export default function CategoryPage({ products, category }) {
  const router = useRouter();
  const { pcItems, setPcItems } = useContext(PCItemsContext);

  const handleBuildPC = (item) => {
    setPcItems([...pcItems, item]);
    router.push("/pc-builder");
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="flex justify-center text-3xl mt-8">
        Select parts to build your Super fast PC
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2 mb-16 mt-16">
        {products.map((item) => (
          <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src={item.image}
                width={200}
                height={200}
                alt="Banner"
                objectFit="cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Product Name: {item.product_name} </h2>
              <h2 className="card-title">Category: {item.category} </h2>
              <h2 className="card-title">Price: {item.price} </h2>
              <h2 className="card-title">{item.status} </h2>
              <h2 className="card-title">
                Average Rating: {item.average_rating}{" "}
              </h2>
              <div className="card-actions">
                <button
                  onClick={() => handleBuildPC(item.id)}
                  className="btn btn-primary"
                >
                  Add To Build
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
CategoryPage.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
export async function getServerSideProps({ params }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const category = params.category;
  const res = await fetch(`http://localhost:5000/products`);
  const productsData = await res.json();
  const products = productsData[capitalizeFirstLetter(category)] || [];
  return {
    props: {
      products,
      category,
    },
  };
}
