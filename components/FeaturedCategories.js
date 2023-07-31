import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategories({ Products }) {
  return (
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
            <Link href={"/cpu"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
        </div>
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
            <Link href={"/motherboard"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
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
          <h2 className="card-title">Category: {Products.RAM[0].category} </h2>

          <div className="card-actions">
            <Link href={"/ram"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
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
            <Link href={"/power-supply"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
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
            <Link href={"/storage-device"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
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
            <Link href={"/monitor"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="p-4">
          <Image
            src={Products.GPU[0].image}
            width={200}
            height={200}
            alt="Banner"
            objectFit="cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Category: Others </h2>

          <div className="card-actions">
            <Link href={"/others"}>
              <button className="btn btn-primary">Visit Categories</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
