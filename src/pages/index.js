import Image from "next/image";
import Layouts from "../../components/Layout/Layouts";
import image from "../../public/images/pc.jpg";
import FeaturedProducts from "../../components/FeaturedProducts";
import FeaturedCategories from "../../components/FeaturedCategories";

export default function Home({ Products }) {
  return (
    <div>
      <Image src={image} alt="Banner" objectFit="cover" />
      <h1 className="text-center m-8 font-bold text-2xl">Featured Products</h1>
      <FeaturedProducts Products={Products} />
      <h1 className="text-center m-8 font-bold text-2xl">
        Featured Categories
      </h1>
      <FeaturedCategories Products={Products} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
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
