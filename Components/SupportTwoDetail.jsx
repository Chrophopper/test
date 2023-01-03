import React from "react";
import Image from "next/image";
import Icon1 from "../assets/images/icons/1.png";
import Icon2 from "../assets/images/icons/2.png";
import { FiArrowRight } from "react-icons/fi";

const supportTwoData = [
  {
    icon: Icon1,
    title: "Bantuan melalui email",
    desc: "Hubungi kami melalui email dan akan kami jawab dalam jangka waktu 1x24 jam",
  },
  {
    icon: Icon2,
    title: "Bantuan dengan whatsapp",
    desc: "Hubungi kami melalui whatsapp untuk mendapatkan bantuan dan akan dijawab oleh tim kami",
    link:"https://wa.me/628812422351?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20produk%20Anda."
  },
];

const SupportTwoDetail = () => {
  return (
    <div className="flex flex-col">
      {supportTwoData.map((item, i) => (
        <div
          className="flex gap-5 p-5 rounded-xl hover:drop-shadow-lg hover:shadow-lg cursor-pointer"
          key={i}
        >
          <Image
            src={item.icon}
            alt="icon"
            className="object-contain"
            width="auto"
            height="auto"
          />
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <span>
            <span className="flex gap-2 items-center">
              <p className="font-bold font-dm text-[#313131] text-base">
                {item.title}
              </p>
              <FiArrowRight className="mt-1" />
            </span>
            <p className="font-dm text-sm">{item.desc}</p>
          </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SupportTwoDetail;
