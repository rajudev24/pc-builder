import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { PCItemsContext } from "../context/buildItems";
import { useRouter } from "next/router";

export default function BuildPC({ Products, Categories }) {
  const category = Categories.map((category) => category);
  const { pcItems } = useContext(PCItemsContext);
  const router = useRouter();
  const products = pcItems.map((pc) => {
    for (const category in Products) {
      const selectedProduct = Products[category].find(
        (product) => product.id === Number(pc)
      );
      if (selectedProduct) {
        return selectedProduct;
      }
    }
    return null;
  });
  const isButtonDisabled = products.length < 5;
  const handleBuild = () => {
    alert("You have build most powerful PC, DONE!!");
    router.push("/");
  };
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2 mb-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.CPU_Processor[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.CPU_Processor[0].category}{" "}
            </h2>
            <div className="card-actions">
              <Link href={`/pc-builder/${category[0]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
          </div>
          {products.map((item) => {
            console.log(item.category);
            return (
              item.category == "CPU / Processor" && (
                <div key={item.id}>
                  <h1 className="m-4 text-xl text-lime-600">
                    {" "}
                    You have selected: {item.product_name}
                  </h1>
                </div>
              )
            );
          })}
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.Motherboard[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.Motherboard[0].category}{" "}
            </h2>

            <div className="card-actions">
              <Link href={`/pc-builder/${category[1]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
            {products.map((item) => {
              return (
                item.category == "Motherboard" && (
                  <div key={item.id}>
                    <h1 className="m-4 text-xl text-lime-600">
                      {" "}
                      You have selected: {item.product_name}
                    </h1>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.RAM[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.RAM[0].category}{" "}
            </h2>

            <div className="card-actions">
              <Link href={`/pc-builder/${category[2]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
            {products.map((item) => {
              return (
                item.category == "RAM" && (
                  <div key={item.id}>
                    <h1 className="m-4 text-xl text-lime-600">
                      {" "}
                      You have selected: {item.product_name}
                    </h1>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.PowerSupplyUnit[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.PowerSupplyUnit[0].category}{" "}
            </h2>

            <div className="card-actions">
              <Link href={`/pc-builder/${category[3]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
            {products.map((item) => {
              return (
                item.category == "Power Supply Unit" && (
                  <div key={item.id}>
                    <h1 className="m-4 text-xl text-lime-600">
                      {" "}
                      You have selected: {item.product_name}
                    </h1>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.StorageDevice[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.StorageDevice[0].category}{" "}
            </h2>

            <div className="card-actions">
              <Link href={`/pc-builder/${category[4]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
            {products.map((item) => {
              return (
                item.category == "Storage Device" && (
                  <div key={item.id}>
                    <h1 className="m-4 text-xl text-lime-600">
                      {" "}
                      You have selected: {item.product_name}
                    </h1>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-4">
            <Image
              src={Products.Monitor[0].image}
              width={200}
              height={200}
              alt="Banner"
              objectFit="cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Category: {Products.Monitor[0].category}{" "}
            </h2>

            <div className="card-actions">
              <Link href={`/pc-builder/${category[5]}`}>
                <button className="btn btn-primary">Choose</button>
              </Link>
            </div>
            {products.map((item) => {
              return (
                item.category == "Monitor" && (
                  <div key={item.id}>
                    <h1 className="m-4 text-xl text-lime-600">
                      {" "}
                      You have selected: {item.product_name}
                    </h1>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center m-4">
        <button
          disabled={isButtonDisabled}
          onClick={handleBuild}
          className="btn btn-primary"
        >
          Complete Build
        </button>
      </div>
    </>
  );
}
