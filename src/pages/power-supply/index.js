import React from "react";
import Layouts from "../../../components/Layout/Layouts";
import Image from "next/image";
import Link from "next/link";

export default function PowerSupply({ Products }) {
  return (
    <>
      <h1 className="flex justify-center text-3xl mt-8">Our Power Supply</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2 mb-16 mt-16">
        {Products.PowerSupplyUnit.map((item) => (
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
                <Link href={`/power-supply/${item.id}`}>
                  {" "}
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
PowerSupply.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return {
    props: {
      Products: data,
    },
  };
};
