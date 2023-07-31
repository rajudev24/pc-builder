import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts({ Products }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-y-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.CPU_Processor[0].product_name}{" "}
          </h2>
          <h2 className="card-title">
            Category: {Products.CPU_Processor[0].category}{" "}
          </h2>
          <h2 className="card-title">
            Price: {Products.CPU_Processor[0].price}{" "}
          </h2>
          <h2 className="card-title">{Products.CPU_Processor[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.CPU_Processor[0].average_rating}{" "}
          </h2>
          <div className="card-actions">
            <Link href={Products.CPU_Processor[0].id.toString()}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.Motherboard[0].product_name}{" "}
          </h2>
          <h2 className="card-title">
            Category: {Products.Motherboard[0].category}{" "}
          </h2>
          <h2 className="card-title">
            Price: {Products.Motherboard[0].price}{" "}
          </h2>
          <h2 className="card-title">{Products.Motherboard[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.Motherboard[0].average_rating}{" "}
          </h2>
          <div className="card-actions">
            <Link href={Products.Motherboard[0].id.toString()}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.RAM[0].product_name}{" "}
          </h2>
          <h2 className="card-title">Category: {Products.RAM[0].category} </h2>
          <h2 className="card-title">Price: {Products.RAM[0].price} </h2>
          <h2 className="card-title">{Products.CPU_Processor[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.RAM[0].average_rating}{" "}
          </h2>
          <Link href={Products.RAM[0].id.toString()}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.PowerSupplyUnit[0].product_name}{" "}
          </h2>
          <h2 className="card-title">
            Category: {Products.PowerSupplyUnit[0].category}{" "}
          </h2>
          <h2 className="card-title">
            Price: {Products.PowerSupplyUnit[0].price}{" "}
          </h2>
          <h2 className="card-title">{Products.PowerSupplyUnit[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.PowerSupplyUnit[0].average_rating}{" "}
          </h2>
          <div className="card-actions">
            <Link href={Products.PowerSupplyUnit[0].id.toString()}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.StorageDevice[0].product_name}{" "}
          </h2>
          <h2 className="card-title">
            Category: {Products.StorageDevice[0].category}{" "}
          </h2>
          <h2 className="card-title">
            Price: {Products.StorageDevice[0].price}{" "}
          </h2>
          <h2 className="card-title">{Products.StorageDevice[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.StorageDevice[0].average_rating}{" "}
          </h2>
          <div className="card-actions">
            <Link href={Products.StorageDevice[0].id.toString()}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
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
            Product Name: {Products.Monitor[0].product_name}{" "}
          </h2>
          <h2 className="card-title">
            Category: {Products.Monitor[0].category}{" "}
          </h2>
          <h2 className="card-title">Price: {Products.Monitor[0].price} </h2>
          <h2 className="card-title">{Products.Monitor[0].status} </h2>
          <h2 className="card-title">
            Average Rating: {Products.Monitor[0].average_rating}{" "}
          </h2>
          <div className="card-actions">
            <Link href={Products.Monitor[0].id.toString()}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
