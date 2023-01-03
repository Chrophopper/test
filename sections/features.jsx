import React, { useRef } from "react";
import { useInView } from "framer-motion";
import FeaturesCard from "../Components/FeaturesCard";
import icon1 from "../assets/images/features/1.png";
import icon2 from "../assets/images/features/2.png";
import icon3 from "../assets/images/features/3.png";
import icon4 from "../assets/images/features/4.png";
import icon5 from "../assets/images/features/5.png";
import icon6 from "../assets/images/features/6.png";

const data = [
  {
    id: 1,
    icon: icon1,
    path: "#!",
    title: "pelatihan secara online",
    description: `Kami akan mengajari anda tentang bagaimana melakukan bisnis secara daring`,
  },
  {
    id: 2,
    icon: icon2,
    path: "#!",
    title: "Respon cepat",
    description: `Kami akan secara cepat membalas murid kami secara cepat agar mereka lebih produktif dan lebih belajar secara maksimal`,
  },
  {
    id: 3,
    icon: icon3,
    path: "#!",
    title: "Kestabilan aman",
    description: `Kami akan mengajarkan tentang bagaimana cara berbisnis dengan benar dan bisa menjaga kestabilan bisnis anda`,
  },
  {
    id: 4,
    icon: icon4,
    path: "#!",
    title: "Berbagai pilihan",
    description: `Kami menyediakan berbagai pilihan paket yang akan dipilih sesuai dengan keinginan pelanggan`,
  },
  {
    id: 5,
    icon: icon5,
    path: "#!",
    title: "Support pelanggan",
    description: `Kami akan membimbing para siswa kami agar mereka bisa terus membesarkan bisnis mereka`,
  },
  {
    id: 6,
    icon: icon6,
    path: "#!",
    title: "Penyaluran produk",
    description: `Kita akan membantu pemasaran produk yang dijual oleh murid kami`,
  },
];

const features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="features" className="w-screen flex justify-center bg-gray-bg">
      <div className="py-20 flex justify-start flex-col gap-12">
        {/* Title */}
        <div
          className="flex flex-col text-center gap-5 justify-center"
          ref={ref}
        >
          <p
            className="text-text-blue-small font-semibold text-sm sm:text-lg font-dm"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Solusi ideal untukmu
          </p>
          <h3
            className="font-arvo font-bold text-lg sm:text-2xl text-big-titles"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Begabung dan dapatkan fasilitas berikut
          </h3>
        </div>

        {/* Content - Feature Cards */}
        <div className="mx-5 md:mx-16 lg:mx-40 flex flex-col sm:flex-row flex-wrap">
          {data.map((card) => (
            <FeaturesCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default features;
