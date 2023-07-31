import Image from "next/image";
import Layouts from "../../../components/Layout/Layouts";

export default function MotherboardDetails({ product }) {
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
        <li className="ml-8">
          Specification: {product.key_features.specification}
        </li>
        <li className="ml-8">
          Socket Support: {product.key_features.socket_support}
        </li>
        <li className="ml-8">RAM Slots: {product.key_features.RAM_slots}</li>
        <li className="ml-8">
          Max RAM Capacity: {product.key_features.max_RAM_capacity}
        </li>
        <strong>Description: {product.description} </strong>
        <strong>Reviews: {product.reviews[0].comment} </strong>
      </div>
    </div>
  );
}
MotherboardDetails.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export async function getStaticProps({ params }) {
  const productId = parseInt(params.motherboardId);
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
      paths.push({ params: { motherboardId: product.id.toString() } });
    });
  }
  return {
    paths,
    fallback: true,
  };
}
