import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Support2 from "../assets/images/support-2.png";
import { SupportTwoDetail } from "../Components";

const SupportTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="w-screen" id="support">
      <div
        className="py-20 md:py-40 sm:px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row lg:flex-wrap gap-32 lg:gap-0"
        ref={ref}
      >
        {/* Left side */}
        <div
          className="w-full lg:w-1/2 px-12 pr-10 pt-5 flex flex-col gap-3"
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl font-bold leading-relaxed text-big-titles font-arvo">
            Butuh Bantuan?
            <br />
            Tim kami siap membantu anda
          </h2>
          <p className="text-md leading-loose font-dm">
          Kirim pesan melalui email maupun kontak whatsapp kami untuk mendapatkan bantuan 
          </p>
          <div>
            <SupportTwoDetail />
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{
            transform: isInView ? "none" : "translateX(300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image
            src={Support2}
            alt="SupportImg"
            className="w-full object-contain"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportTwo;
