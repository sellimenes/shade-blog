import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import RelatedPosts from "@/components/RelatedPosts";

type Props = {};

const BlogDetail = (props: Props) => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row gap-10">
      <div className="flex-1">
        <article>
          <h1 className="text-3xl font-bold">
            Bitcoin (BTC) Fiyatı, 1,5 Yıl Sonra 35 Bin Doları Gördü: İşte
            Piyasalardaki Son Durum
          </h1>
          <p className="opacity-70 mt-2 mb-4">
            Geçtiğimiz saatlerde sert bir yükseliş gösteren Bitcoin (BTC), 35
            bin dolara iğne attı. Bu seviye, en son Mayıs 2022&apos;de
            görülmüştü. BTC&apos;deki yükseliş, altcoin&apos;leri de
            canlandırdı.
          </p>
          <div className="relative w-full aspect-video mb-6">
            <Image src={"/finance-demo-3.jpeg"} alt="blog title" fill />
          </div>
          <p className="leading-relaxed opacity-80 my-5">
            Son yılların en tartışmalı yatırım araçları hâline gelen kripto
            varlıklar, uzun zamandır eski popülaritelerinden uzaklar.
            2021&apos;in ikinci yarısında neredeyse 3 trilyon dolarlık hacme
            ulaşan piyasalar, şimdilerde 1 trilyon dolar seviyelerinde
            geziniyorlar. Ancak çok yakında, bu durum değişecek gibi görünüyor.
            Zira Bitcoin (BTC), son dönemlerin en sert yükselişlerinden bir
            tanesine ev sahipliği yaptı.
          </p>
          <p className="leading-relaxed opacity-80 my-5">
            Son yılların en tartışmalı yatırım araçları hâline gelen kripto
            varlıklar, uzun zamandır eski popülaritelerinden uzaklar.
            2021&apos;in ikinci yarısında neredeyse 3 trilyon dolarlık hacme
            ulaşan piyasalar, şimdilerde 1 trilyon dolar seviyelerinde
            geziniyorlar. Ancak çok yakında, bu durum değişecek gibi görünüyor.
            Zira Bitcoin (BTC), son dönemlerin en sert yükselişlerinden bir
            tanesine ev sahipliği yaptı.
          </p>
          <p className="leading-relaxed opacity-80 my-5">
            Son yılların en tartışmalı yatırım araçları hâline gelen kripto
            varlıklar, uzun zamandır eski popülaritelerinden uzaklar.
            2021&apos;in ikinci yarısında neredeyse 3 trilyon dolarlık hacme
            ulaşan piyasalar, şimdilerde 1 trilyon dolar seviyelerinde
            geziniyorlar. Ancak çok yakında, bu durum değişecek gibi görünüyor.
            Zira Bitcoin (BTC), son dönemlerin en sert yükselişlerinden bir
            tanesine ev sahipliği yaptı.
          </p>
          <p className="leading-relaxed opacity-80 my-5">
            Son yılların en tartışmalı yatırım araçları hâline gelen kripto
            varlıklar, uzun zamandır eski popülaritelerinden uzaklar.
            2021&apos;in ikinci yarısında neredeyse 3 trilyon dolarlık hacme
            ulaşan piyasalar, şimdilerde 1 trilyon dolar seviyelerinde
            geziniyorlar. Ancak çok yakında, bu durum değişecek gibi görünüyor.
            Zira Bitcoin (BTC), son dönemlerin en sert yükselişlerinden bir
            tanesine ev sahipliği yaptı.
          </p>
          <p className="leading-relaxed opacity-80 my-5">
            Son yılların en tartışmalı yatırım araçları hâline gelen kripto
            varlıklar, uzun zamandır eski popülaritelerinden uzaklar.
            2021&apos;in ikinci yarısında neredeyse 3 trilyon dolarlık hacme
            ulaşan piyasalar, şimdilerde 1 trilyon dolar seviyelerinde
            geziniyorlar. Ancak çok yakında, bu durum değişecek gibi görünüyor.
            Zira Bitcoin (BTC), son dönemlerin en sert yükselişlerinden bir
            tanesine ev sahipliği yaptı.
          </p>
        </article>
        <RelatedPosts />
      </div>
      <div className="w-[300px] h-[250px] bg-red-500 lg:mt-11 lg:sticky top-5"></div>
    </div>
  );
};

export default BlogDetail;
