import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "../app/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    console.log("entrei");
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setUserData(user);
      setLoading(false);
    };
    checkAuthentication();
  });

  return (
    <header className="bg-violet-500">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="relative hidden sm:block">
            <label className="sr-only" htmlFor="search">
              {" "}
              Search{" "}
            </label>

            <input
              className="h-10 w-full font-mono rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            {loading ? null : !user ? (
              <ul className="flex">
                <li className="p-2 cursor-pointer text-white font-mono">
                  <Link href="/login">Login</Link>
                </li>
                <li className="p-2 cursor-pointer text-white font-mono">
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            ) : (
              <div className="flex">
                <p className="">Welcome,${userData}</p>
                <div className="ml-4 border-2 rounded-md px-2 py-1 text-violet-800 text-bold font-mono text-lg font-bold bg-white hover:bg-slate-200">
                  <button onClick={handleSignOut}>Logout</button>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              {/* <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              /> */}

              {/* <p className="ms-2 hidden text-left text-xs sm:block">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span className="text-gray-500"> eric@frusciante.com </span>
              </p> */}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
