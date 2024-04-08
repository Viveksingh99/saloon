import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between py-5 px-10 bg-black">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              width={100}
              height={100}
              src="./assets/img/header/logo.svg"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="gap-10 flex flex-wrap">
          <Link href="/">
            <span className="cursor-pointer font-bold text-gray-300 hover:text-yellow-600">
              Home
            </span>
          </Link>
          <Link href="/blog">
            <span className="cursor-pointer font-bold text-gray-300 hover:text-yellow-600">
              Blog
            </span>
          </Link>
          <Link href="/cart">
            <span className="cursor-pointer font-bold text-gray-300 hover:text-yellow-600">
              Cart
            </span>
          </Link>
          <Link href="account">
            <span className="cursor-pointer font-bold text-gray-300 hover:text-yellow-600">
              Account
            </span>
          </Link>
        </div>
        <div className="cursor-pointer">
          <input placeholder="Search" className="rounded-md p-1" />
        </div>
        <div className="hidden lg:inline">
          <Image
            src="./assets/img/header/person-fill.svg"
            height={40}
            width={40}
            alt="acc icon"
            className=" cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
