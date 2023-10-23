import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Headline = (props: Props) => {
  return (
    <section className="flex gap-4 container">
      <Link
        href="/finance"
        className="w-full h-auto aspect-video flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
      >
        <article>
          <Image
            fill
            src={"/finance-demo.jpeg"}
            alt="finance"
            className="cover"
          />
          <div className="absolute z-50 bottom-3 left-5 max-w-[75%] text-white flex flex-col gap-1">
            <h2 className="text-4xl">
              How to Invest Money: Smart Ways to Get Started
            </h2>
            <p className="text-xs opacity-75 flex items-center gap-6">
              Selim Enes Erdogan{" "}
              <span className="flex items-center gap-1 mt-[2px]">
                <Clock size={12} className="mb-[2px]" /> 18.03.2021
              </span>
            </p>
          </div>
          <h5 className="absolute z-50 top-8 left-0 p-2 bg-green-500 text-white text-lg rounded-r">
            Finance
          </h5>
        </article>
      </Link>
      <div className="flex-[2] flex flex-col gap-4">
        <Link
          href="/finance"
          className="w-full h-auto aspect-video flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
        >
          <article>
            <Image
              fill
              src={"/finance-demo-2.png"}
              alt="finance"
              className="cover"
            />
            <div className="absolute z-50 bottom-2 left-5 max-w-[75%] text-white flex flex-col">
              <h2 className="text-2xl leading-7">
                How to Invest Money: Best Way to Get Good Returns
              </h2>
              <p className="text-xs opacity-75 flex items-center gap-6">
                Selim Enes Erdogan{" "}
                <span className="flex items-center gap-1 mt-[2px]">
                  <Clock size={12} className="mb-[2px]" /> 18.03.2021
                </span>
              </p>
            </div>
            <h5 className="absolute z-50 top-5 left-0 p-2 bg-green-500 text-white rounded-r">
              Finance
            </h5>
          </article>
        </Link>
        <Link
          href="/finance"
          className="w-full h-auto aspect-video flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
        >
          <article>
            <Image
              fill
              src={"/finance-demo-3.jpeg"}
              alt="finance"
              className="cover"
            />
            <div className="absolute z-50 bottom-2 left-5 max-w-[75%] text-white flex flex-col">
              <h2 className="text-2xl leading-7">
                How to Invest in Stocks: A Beginner's Guide
              </h2>
              <p className="text-xs opacity-75 flex items-center gap-6">
                Selim Enes Erdogan{" "}
                <span className="flex items-center gap-1 mt-[2px]">
                  <Clock size={12} className="mb-[2px]" /> 18.03.2021
                </span>
              </p>
            </div>
            <h5 className="absolute z-50 top-5 left-0 p-2 bg-green-500 text-white rounded-r">
              Finance
            </h5>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Headline;
