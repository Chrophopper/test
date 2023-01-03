import React from "react";
import Image from "next/image";
import { Link } from "../Components";
import blogImage1 from "../assets/images/blog/1.png";
import blogImage2 from "../assets/images/blog/2.png";
import blogImage3 from "../assets/images/blog/3.png";
import blogImage4 from "../assets/images/blog/4.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "Memperkenalkan tim terbaru kami dengan pengalaman hebat",
    description:
      "Soni tau bahwa kamu membutuhkan produk yang bagus untuk menciptakan brand yang bagus.",
    // path: "/",
    linkLabel: "Selengkapnya...",
  },
  {
    image: blogImage2,
    title:
      "Kami telah membuat aplikasi bank baru",
    description: "5 bulan yang lalu kami mendapatkan sebuah project untuk mengerjakan pembuatan aplikasi mobile banking dan kami mendapatkan review yang positif",
    // path: "/",
    linkLabel: "Selengkapnya...",
  },
];

const BLOG_DATA2 = [
  {
    image: blogImage3,
    title: "Membangun sebuah website dengan scaling dari UI/UX di figma.",
    description: null,
    // path: "/",
    linkLabel: "selengkapnya...",
  },
  {
    image: blogImage4,
    title: "UI/UX menjadi pekerjaan yang paling diminati di beberapa tahun terakhir",
    description: null,
    path: "/",
    linkLabel: null,
  },
];

const BlogCards = () => {
  return (
    <section className="flex flex-col md:flex-row gap-16 md:gap-5 w-full">
      {/* First Two posts */}
      {BLOG_DATA.map((card, i) => (
        <article key={i} className="flex flex-col gap-5 lg:w-1/3 w-full">
          <Image
            src={card.image}
            alt="blog-img"
            className="object-contain rounded-lg"
            width="auto"
            height="auto"
          />
          <p className="font-semibold font-arvo text-xl md:text-lg lg:text-xl">
            {card.title}
          </p>
          {card.description !== null && (
            <p className="font-dm text-sm">{card.description}</p>
          )}

          {card.linkLabel !== null && <Link path={"#"} text={"selengkapnya..."} />}
        </article>
      ))}

      {/* Second two posts */}
      <article className="flex flex-col gap-16 md:gap-5 lg:w-1/3 w-full">
        {BLOG_DATA2.map((card, i) => (
          <span key={i}>
            <Image
              src={card.image}
              alt="blog-img"
              className="object-contain rounded-lg"
              width="auto"
              height="auto"
            />
            <p className="font-semibold font-arvo text-xl md:text-lg lg:text-xl mt-4">
              {card.title}
            </p>
          </span>
        ))}
      </article>
    </section>
  );
};

export default BlogCards;
