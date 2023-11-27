import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="bg-primaryDark h-[100vh]  w-full text-white">
      <nav className="flex justify-around py-5">
        <h1 className="krona text-2xl">Studdy Buddy</h1>
        <ul className="flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>

      <div className="bg-primaryLight mx-auto  mt-20 w-1/3 px-10 py-10 rounded-[20px] ">
        <h1 className="krona text-5xl text-center">Login</h1>
        <form className="flex flex-col mt-10 gap-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your School Email..."
            className="border-none bg-primaryDark outline-none  krona rounded-md py-4 px-2 focus:ring-2 focus:ring-white ring-opacity-40"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password..."
            className="border-none bg-primaryDark outline-none  krona rounded-md py-4 px-2 focus:ring-2 focus:ring-white ring-opacity-40"
          />
          <Link
            href="/"
            className="bg-transparent border border-white py-2  w-1/3 mx-auto krona text-center rounded-full hover:bg-white hover:text-primaryDark transition duration-300 ease-in-out"
          >
            Submit
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
