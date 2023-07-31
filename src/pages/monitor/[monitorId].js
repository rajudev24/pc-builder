import React from "react";
import Layouts from "../../../components/Layout/Layouts";
import Image from "next/image";

export default function MonitorDetails({ product }) {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl md:m-32">
      <figure className="m-8">
        <Image
          src={product.image}
          alt="cpu_details"
          objectFit="cover"
          width={400}
          height={400}
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
        <li className="ml-8">
          Screen_size: {product.key_features.screen_size}
        </li>
        <li className="ml-8">Resolution: {product.key_features.resolution}</li>
        <li className="ml-8">
          Refresh Rate: {product.key_features.refresh_rate}
        </li>
        <li className="ml-8">Panel Type: {product.key_features.panel_type}</li>
        <li className="ml-8">
          Response Time: {product.key_features.response_time}
        </li>
        <li className="ml-8">Connectors: {product.key_features.connectors}</li>
        <strong>Description: {product.description} </strong>
        <strong>Reviews: {product.reviews[0].comment} </strong>
      </div>
    </div>
  );
}
MonitorDetails.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps({ params }) {
  const productId = parseInt(params.monitorId);
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
      paths.push({ params: { monitorId: product.id.toString() } });
    });
  }
  return {
    paths,
    fallback: true,
  };
}
