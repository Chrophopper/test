import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { TestimonialsCard } from "../Components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import testimonialsImage1 from "../assets/images/Testimonials/testimonial-1-1.png";
import testimonialsImage2 from "../assets/images/Testimonials/testimonial-1-2.png";
import testimonialsImage3 from "../assets/images/Testimonials/testimonial-1-3.png";
import testimonialsImage4 from "../assets/images/Testimonials/testimonial-1-4.png";
import testimonialsImage5 from "../assets/images/Testimonials/testimonial-1-5.png";
import testimonialsImage6 from "../assets/images/Testimonials/testimonial-1-6.png";

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "Saya ingin mengambil kesempatan ini untuk berterima kasih kepada SA Places atas layanan hebat yang diberikan kepada kami dan khususnya Estelle. Anda memberi saya tempat terbaik hanya dalam beberapa saat setelah saya berbicara dengan Anda.",
      username: "@hello.mimmie",
      name: "Minnie Horn",
    },
    {
      image: testimonialsImage2,
      text: "Terima kasih banyak atas layanan yang baik dan efisien. Saya sudah dan pasti akan terus merekomendasikan layanan Anda kepada orang lain di masa mendatang.",
      username: "@merryn.manley",
      name: "Merryn Manley",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Saya hanya ingin memuji Estelle Pestana. Dia sangat profesional dan berusaha keras untuk membantu saya. Kesabarannya terhadap saya saat saya terus mengubah rencana saya patut dipuji. Layanannya menegaskan kembali mengapa saya selalu memilih memesan melalui agen daripada langsung. Terima kasih",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "Saya jarang mengalami bantuan dan dukungan yang efisien seperti dari Anda! Terima kasih banyak. Kami akan melakukan semua pemesanan selama beberapa hari ke depan dan saya akan kembali kepada Anda dengan hasil akhirnya",
      username: "@hey.nku",
      name: "Paseka Nku",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Terima kasih atas semua bantuan Anda. Layanan Anda sangat baik dan sangat CEPAT",
      username: "@cherice.me",
      name: "Cherice Justin",
    },
    {
      image: testimonialsImage6,
      text: "Untuk perjalanan kami baru-baru ini ke SA, saya memesan beberapa akomodasi melalui SA Places. Saya hanya ingin memberi tahu Anda bahwa semuanya berjalan dengan sempurna dengan semua pemesanan dan juga pemesanan Anda sangat cepat dan profesional. Saya harap saya memiliki kesempatan untuk mengunjungi kembali Afrika Selatan segera, saya akan melakukan pemesanan dengan perusahaan Anda lagi. Saya juga akan merekomendasikan",
      username: "@myself.thais",
      name: "Thais Carballal",
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "Saya ingin mengambil kesempatan ini untuk berterima kasih kepada SA Places atas layanan hebat yang diberikan kepada kami dan khususnya Estelle. Anda memberi saya tempat terbaik hanya dalam beberapa saat setelah saya berbicara dengan Anda.",
      username: "@hello.mimmie",
      name: "Minnie Horn",
    },
    {
      image: testimonialsImage2,
      text: "Terima kasih banyak atas layanan yang baik dan efisien. Saya sudah dan pasti akan terus merekomendasikan layanan Anda kepada orang lain di masa mendatang.",
      username: "@merryn.manley",
      name: "Merryn Manley",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Saya hanya ingin memuji Estelle Pestana. Dia sangat profesional dan berusaha keras untuk membantu saya. Kesabarannya terhadap saya saat saya terus mengubah rencana saya patut dipuji. Layanannya menegaskan kembali mengapa saya selalu memilih memesan melalui agen daripada langsung. Terima kasih",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "Saya jarang mengalami bantuan dan dukungan yang efisien seperti dari Anda! Terima kasih banyak. Kami akan melakukan semua pemesanan selama beberapa hari ke depan dan saya akan kembali kepada Anda dengan hasil akhirnya",
      username: "@hey.nku",
      name: "Paseka Nku",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: " Anda untuk semua bantuan Anda. Layanan Anda sangat baik dan sangat CEPATTerima kasih.",
      username: "@cherice.me",
      name: "Cherice Justin",
    },
    {
      image: testimonialsImage6,
      text: "Untuk perjalanan kami baru-baru ini ke SA, saya memesan beberapa akomodasi melalui SA Places. Saya hanya ingin memberi tahu Anda bahwa semuanya berjalan dengan sempurna dengan semua pemesanan dan juga pemesanan Anda sangat cepat dan profesional. Saya harap saya memiliki kesempatan untuk mengunjungi kembali Afrika Selatan segera, saya akan melakukan pemesanan dengan perusahaan Anda lagi. Saya juga akan merekomendasikan",
      username: "@myself.thais",
      name: "Thais Carballal",
    },
  ],
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 0,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <section id="testimonials" className="w-screen h-auto">
      <div className="bg-[#F4F4F6] py-24" ref={ref}>
        {/* Title */}
        <div className="flex text-center flex-col gap-5">
          <p className="text-text-blue-small font-semibold text-xl md:text-xl font-dm">
            Customer Testimonial
          </p>
          <h3 className="font-bold font-arvo text-xl md:text-3xl text-big-titles">
            Apa pendapat client customers
          </h3>
        </div>
        {/* Content */}
        {domLoaded && (
          <div className="pt-16 cursor-pointer">
            <Swiper
              {...testimonialCarousel}
              style={{
                transform: isInView ? "none" : "translateX(-500px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {TESTIMONIALS_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  {item.map(({ image, text, name, username }, _index) => (
                    <TestimonialsCard
                      key={_index}
                      image={image}
                      text={text}
                      name={name}
                      username={username}
                    />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
