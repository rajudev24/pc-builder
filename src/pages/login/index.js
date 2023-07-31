import React from "react";
import Layouts from "../../../components/Layout/Layouts";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex justify-center  align-middle h-72 mt-16">
      <h>
        {" "}
        Please Login By{" "}
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000",
            })
          }
          className="btn  btn-primary"
        >
          GitHub
        </button>
      </h>
    </div>
  );
}
Login.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
