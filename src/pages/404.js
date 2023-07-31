import Image from "next/image";
import image from "../../public/images/404.png";
import Layouts from "../../components/Layout/Layouts";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  });

  return (
    <div className="flex justify-center">
      <Image src={image} alt="404" height={500} width={500} />
    </div>
  );
}

ErrorPage.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
