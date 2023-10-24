import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-900 text-white mt-6 py-2">
      <div className="container flex items-center justify-between">
        <Link href="/">WOBLOG</Link>
        <a
          href="https://github.com/sellimenes"
          className="hover:text-orange-500"
        >
          Source Code of Woblog
        </a>
      </div>
    </footer>
  );
};

export default Footer;
