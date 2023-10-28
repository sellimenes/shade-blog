import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Headline = (props: Props) => {
  return (
    <section className="flex flex-col md:flex-row gap-4 container">
      <Link
        href="/finance"
        className="flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
      >
        <article className="relative w-full h-auto aspect-video">
          <Image
            fill
            priority
            src={"/finance-demo.jpeg"}
            alt="finance"
            sizes="100%"
            className="cover"
            quality={70}
          />
          <div className="absolute z-50 bottom-3 left-5 max-w-[75%] text-white flex flex-col gap-1">
            <h2 className="xl:text-4xl lg:text-3xl line-clamp-2">
              How to Invest Money: Smart Ways to Get Started
            </h2>
            <p className="text-xs opacity-75 flex items-center gap-4 whitespace-nowrap">
              Selim Enes Erdogan{" "}
              <span className="flex items-center gap-1 mt-[2px]">
                <Clock size={12} className="mb-[2px]" /> 18.03.2021
              </span>
            </p>
          </div>
          <p className="absolute z-50 top-5 lg:top-8 left-0 p-2 bg-green-500 text-white lg:text-md text-sm rounded-r">
            Finance
          </p>
        </article>
      </Link>
      <div className="flex-[2] flex flex-col gap-4">
        <Link
          href="/finance"
          className="flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
        >
          <article className="relative w-full h-auto aspect-video">
            <Image
              fill
              priority
              sizes="100%"
              src={"/finance-demo-2.png"}
              alt="finance"
              className="cover"
              quality={70}
            />
            <div className="absolute z-50 bottom-2 left-5 max-w-[75%] text-white flex flex-col">
              <h2 className="xl:text-2xl lg:text-xl md:text-sm lg:leading-7 line-clamp-2">
                How to Invest Money: Best Way to Get Good Returns
              </h2>
              <p className="text-xs opacity-75 flex items-center gap-4 whitespace-nowrap">
                Selim Enes Erdogan{" "}
                <span className="flex items-center gap-1 mt-[2px]">
                  <Clock size={12} className="mb-[2px]" /> 18.03.2021
                </span>
              </p>
            </div>
            <p className="absolute z-50 top-4 lg:top-8 left-0 p-2 bg-green-500 text-white lg:text-md text-xs rounded-r">
              Finance
            </p>
          </article>
        </Link>
        <Link
          href="/finance"
          className="flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
        >
          <article className="relative w-full h-auto aspect-video">
            <Image
              fill
              priority
              sizes="100%"
              src={"/finance-demo-3.jpeg"}
              alt="finance"
              className="cover"
              quality={70}
            />
            <div className="absolute z-50 bottom-2 left-5 max-w-[75%] text-white flex flex-col">
              <h2 className="xl:text-2xl lg:text-xl md:text-sm lg:leading-7 line-clamp-2">
                How to Invest in Stocks: A Beginners Guide
              </h2>
              <p className="text-xs opacity-75 flex items-center gap-4 whitespace-nowrap">
                Selim Enes Erdogan{" "}
                <span className="flex items-center gap-1 mt-[2px]">
                  <Clock size={12} className="mb-[2px]" /> 18.03.2021
                </span>
              </p>
            </div>
            <p className="absolute z-50 top-4 lg:top-8 left-0 p-2 bg-green-500 text-white lg:text-md text-xs rounded-r">
              Finance
            </p>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Headline;
