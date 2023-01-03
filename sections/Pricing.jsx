import React, { useState, useRef } from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { useInView } from "framer-motion";

const PRICE_MONTHLY_FREE_DATA = [
  {
    title: "Free Plan",
    amount: "0/bulan",
    options: [
      {
        status: true,
        label: "Akses terbatas untuk pembuatan template project",
      },
      {
        status: true,
        label: "Gratis akun untuk download satu project per minggu",
      },
      {
        status: true,
        label: "Memberikan saran untuk start bisnis secara kreatif",
      },
      {
        status: false,
        label: "Tidak mendapatkan layanan customerce support",
      },
      {
        status: false,
        label: "Akses template project dan desain terbatas",
      },
    ],
  },
];

const PRICE_MONTHLY_REC = [
  {
    title: "Team package",
    amount: "700.000/bulan",
    options: [
      {
        status: true,
        label: "Bisa mengakses semua project, solusi dan sumber daya dalam pembuatan website",
      },
      {
        status: true,
        label:
          "Memberikan saran dan konsultasi tentang bagaimana cara Anda untuk mengembangkan bisnis anda",
      },
      {
        status: true,
        label: "Melakukan pelayanan dengan fast response",
      },
      {
        status: true,
        label: "Pelanggan mendapatkan bantuan 24/7",
      },
      {
        status: false,
        label: "Spesial layanan service di project yang bersekala besar",
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    title: "Team pack",
    amount: "6.500.000/tahun",
    options: [
      {
        status: true,
        label:
          "Memberikan layanan dengan spesial diskon",
      },
      {
        status: true,
        label: "Kami akan menyelesaikan project dan bersedia membantu pelanggan selama 24/7",
      },
      {
        status: true,
        label:
          "Mendapatkan suber daya spesial untuk membuat sebuat project dalam jangka waktu panjang ",
      },
      {
        status: true,
        label:
          "mendapatkan hosting terbaik akses dalam server dengan penawaran spesial",
      },
      {
        status: false,
        label: "spesial layanan dalam skala besar",
      },
    ],
  },
];

const PRICE_YEARLY_REC = [
  {
    title: "Organization pack",
    amount: "10.000.000/tahun",
    options: [
      {
        status: true,
        label:
          "Mendapatkan akses ke semua project oleh tim kami",
      },
      {
        status: true,
        label:
          "Mendapatkan peralatan dan sumber daya dalam skala besar dengan layanan 24/7",
      },
      {
        status: true,
        label:
          "Mendapatkan kebebasan untuk memilih server dan layanan hosting dalam organisasi",
      },
      {
        status: true,
        label:
          "Perbaikan, konsultasi, dan dibimbing langsung oleh tim kami yang sudah memiliki pengalaman yang banyak",
      },
      {
        status: true,
        label: "2 tahun garansi setelah project telah selesai dibuat",
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const ActiveLinkClass = "bg-white shadow-lg";

  const activeMonth = () => setIsMonthly(true);
  const activeYear = () => setIsMonthly(false);

  const firstData = isMonthly ? PRICE_MONTHLY_FREE_DATA : PRICE_YEARLY_DATA;
  const recData = isMonthly ? PRICE_MONTHLY_REC : PRICE_YEARLY_REC;

  return (
    <section className="w-screen" id="pricing">
      {/* Container */}
      <div className="flex flex-col items-center py-10 gap-10" ref={ref}>
        {/* Title */}
        <div className="text-center flex flex-col gap-5">
          <p className="text-text-blue-small font-semibold text-lg md:text-xl font-dm">
            Sesuaikan dengan bisnis Anda
          </p>
          <h3 className="font-arvo font-bold text-lg md:text-2xl text-big-titles">
            Pilih harga sesuai kebutuhan
          </h3>
        </div>

        {/* Switch button */}
        <div className="flex flex-row justify-center items-center gap-3 bg-[#f8f7f7] w-[19rem] h-16 rounded-md shadow-md font-semibold font-dm my-5">
          <button
            className={`px-5 py-3 rounded-md transition-all duration-300 ${
              isMonthly ? ActiveLinkClass : ""
            }`}
            onClick={activeMonth}
          >
            Rencana bulanan
          </button>
          <button
            className={`px-5 py-3 rounded-md transition-all duration-1000 ${
              isMonthly ? "" : ActiveLinkClass
            }`}
            onClick={activeYear}
          >
            Rencana tahuanan
          </button>
        </div>

        {/* Plans */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[43rem] px-5 md:px-20 lg:px-32 gap-16">
          {/* Free Plan */}
          <div
            className="lg:w-1/2 sm:w-full h-[48rem] sm:h-[40rem] lg:h-auto border rounded-xl shadow-lg hover:shadow-2xl flex flex-col gap-5 px-10 pt-3 relative overflow-hidden"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <FiUser className="text-8xl ml-4 mt-5 text-text-blue-small" />
            {firstData.map((item, i) => (
              <span key={i} className={`flex flex-col gap-5`}>
                <h4 className="font-bold text-2xl font-arvo py-3">
                  {item.title}
                </h4>

                {item.options.map((option, i) =>
                  option.status ? (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCheckmarkCircle className="text-green-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm">{option.label}</p>
                    </span>
                  ) : (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCloseCircle className="text-red-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm text-gray-400">{option.label}</p>
                    </span>
                  )
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-[#f8f8fa]">
                  <div className="flex items-center justify-between py-5 px-10">
                    <span className="flex flex-col ">
                      <p className="font-dm font-bold text-xl">Starting from</p>
                      <p className="font-arvo font-bold text-2xl text-text-blue-small">
                        {item.amount}
                      </p>
                    </span>
                    <IoIosArrowRoundForward className="text-5xl text-gray-800 hover:text-black hover:shadow-lg rounded-full hover:bg-white transition-all duration-500 cursor-pointer animate-pulse" />
                  </div>
                </div>
              </span>
            ))}
          </div>

          {/* Recommended */}
          <div
            className="lg:w-1/2 sm:w-full h-[48rem] sm:h-[40rem] lg:h-auto border-text-blue-small border-2 rounded-xl relative shadow-lg hover:shadow-2xl px-10 pt-3"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span className="absolute -top-4 left-14 bg-text-blue-small px-4 py-1 rounded-md text-white font-semibold font-dm drop-shadow-lg">
              Recommended
            </span>
            <FiUsers className="text-8xl ml-4 mt-10 text-text-blue-small" />
            {recData.map((item, i) => (
              <span key={i} className="flex flex-col gap-5">
                <h4 className="font-bold text-2xl font-arvo py-3">
                  {item.title}
                </h4>

                {item.options.map((option, i) =>
                  option.status ? (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCheckmarkCircle className="text-green-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm">{option.label}</p>
                    </span>
                  ) : (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCloseCircle className="text-red-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm text-gray-400">{option.label}</p>
                    </span>
                  )
                )}

                <div className=" absolute bottom-0 left-0 right-0 bg-[#f8f8fa] rounded-xl">
                  <div className="flex items-center justify-between py-5 px-10">
                    <span className="flex flex-col ">
                      <p className="font-dm font-bold text-xl">Starting from</p>
                      <p className="font-arvo font-bold text-2xl text-text-blue-small">
                        {item.amount}
                      </p>
                    </span>
                    <IoIosArrowRoundForward className="text-5xl text-gray-800 hover:text-black hover:shadow-lg rounded-full hover:bg-white transition-all duration-500 cursor-pointer animate-pulse" />
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
