import React from "react";
import Layouts from "../../../components/Layout/Layouts";
import Image from "next/image";

export default function StorageDetails({ product }) {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl md:m-32">
      <figure className="m-8">
        <Image
          src={product.image}
          alt="cpu_details"
          objectFit="cover"
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name: {product.product_name} </h2>
        <h2 className="card-title">Category: {product.category} </h2>
        <h2 className="card-title">Price: {product.price} </h2>
        <h2 className="card-title">Status: {product.status} </h2>
        <h2 className="card-title">
          Average Rating: {product.average_rating}{" "}
        </h2>
        <h2 className="card-title">
          Individual Rating: {product.individual_rating}{" "}
        </h2>

        <strong>List of Key Features: </strong>
        <li className="ml-8">Brand: {product.key_features.brand} </li>
        <li className="ml-8">Model: {product.key_features.model}</li>
        <li className="ml-8">Type: {product.key_features.type}</li>
        <li className="ml-8">Capacity: {product.key_features.capacity}</li>
        <li className="ml-8">Interface: {product.key_features.interface}</li>
        <li className="ml-8">Read Speed: {product.key_features.read_speed}</li>
        <li className="ml-8">
          Write Speed: {product.key_features.write_speed}
        </li>
        <strong>Description: {product.description} </strong>
        <strong>Reviews: {product.reviews[0].comment} </strong>
      </div>
    </div>
  );
}
StorageDetails.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
export async function getStaticProps({ params }) {
  const productId = parseInt(params.storagesId);
  const res = await fetch("http://localhost:5000/products");
  const productsData = await res.json();
  let product = null;
  for (const category in productsData) {
    const categoryProducts = productsData[category];
    product = categoryProducts.find((p) => p.id === productId);
    if (product) {
      break;
    }
  }
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/products");
  const productsData = await res.json();
  const paths = [];
  for (const category in productsData) {
    const categoryProducts = productsData[category];
    categoryProducts.forEach((product) => {
      paths.push({ params: { storagesId: product.id.toString() } });
    });
  }
  return {
    paths,
    fallback: true,
  };
}
