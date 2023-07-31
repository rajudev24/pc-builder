import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="navbar bg-primary text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-black">Categories</summary>
                <ul className=" text-black z-50">
                  <li className="w-48">
                    <Link href={"/cpu"}> CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href={"/motherboard"}> Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/ram"}> RAM</Link>
                  </li>
                  <li>
                    <Link href={"/power-supply"}> Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href={"/storage-device"}> Storage Device</Link>
                  </li>
                  <li>
                    <Link href={"/monitor"}> Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/others"}> Others</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Tech BD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className=" text-black z-50">
                <li className="w-48">
                  <Link href={"/cpu"}> CPU / Processor</Link>
                </li>
                <li>
                  <Link href={"/motherboard"}> Motherboard</Link>
                </li>
                <li>
                  <Link href={"/ram"}> RAM</Link>
                </li>
                <li>
                  <Link href={"/power-supply"}> Power Supply Unit</Link>
                </li>
                <li>
                  <Link href={"/storage-device"}> Storage Device</Link>
                </li>
                <li>
                  <Link href={"/monitor"}> Monitor</Link>
                </li>
                <li>
                  <Link href={"/others"}> Others</Link>
                </li>
              </ul>
            </details>
          </li>
          {session?.user ? (
            <li>
              <span onClick={() => signOut()}>Logout</span>
            </li>
          ) : (
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/pc-builder"}>
          <span className="btn">PC Builder</span>
        </Link>
      </div>
    </div>
  );
}
