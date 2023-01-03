import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FiMinus, FiPlus } from "react-icons/fi";

const data = [
  {
    id: 1,
    title: `01. Which domain should I purchase?`,
    contents: (
      <div>
        Kirimkan pengujian situs web Anda ke rumah untuk mengumpulkan sampel. Secara sederhana
        hubungi kami dan kami akan memindahkan akun hosting Anda dari penyedia lain,
        terlepas dari panel kontrol. Jika sewaktu-waktu website Anda sedang down
        lebih dari 0,1% hasil dengan eksperimen investigasi yang tepat.
      </div>
    ),
  },
  {
    id: 2,
    title: `Bagaimana tips ketika memilih nama sebuah perusahaan`,
    contents: (
      <div>
        Tips memilih nama sebuah perusahaan yang pertama yaitu menentukan produk apa yang ingin anda jual, lalu apa visi dan misi dari perusahaan tersebut lalu carilah nama yang sesuai yang belum digunakan oleh perusahaan manapun
      </div>
    ),
  },
  {
    id: 3,
    title: `Bagaimana ketika setelah website dibuat terjadi sebuah error maupun bug?`,
    contents: (
      <div>
        Apabila website yang telah dibuat mengalami sebuah kesalahan kami akan memberikan sebuah pengecekan secara berkala maksimal 4 bulan setelah web itu dibuat
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Can I upgrade or downgrade my web hosting subscription system?`,
    contents: (
      <div>
        Penetapan harga membuat saya sedikit ragu pada awalnya, tetapi saya telah melakukannya. Cukup hubungi kami dan kami akan memindahkan akun hosting Anda dari penyedia lain, terlepas dari panel kontrolnya. Jika sewaktu-waktu situs web Anda turun lebih dari 0,1% hasil dengan eksperimen investigasi yang tepat.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Learn from community on Brandwagon`,
    contents: (
      <div>
        Hentikan pemirsa Anda agar tidak terganggu. Publikasikan video ke. Cukup hubungi kami dan kami akan memindahkan akun hosting Anda dari penyedia lain, terlepas dari panel kontrolnya. Jika sewaktu-waktu situs web Anda turun lebih dari 0,1% hasil dengan eksperimen investigasi yang tepat.
      </div>
    ),
  },
];

const FaqQuestions = () => {
  const [isOpen, setIsOpen] = useState(1);
  const active = "border-black";
  const minus = <FiMinus className="text-gray-800 text-lg" />;
  const plus = <FiPlus className="text-gray-400 text-lg" />;

  return (
    <Accordion
      allowMultipleExpanded={false}
      preExpanded={[1]}
      className="border-none"
    >
      {data.map((item, i) => (
        <AccordionItem
          className={`py-5 mb-8 border-b-2 flex flex-col md:flex-row justify-between lg:px-5 items-center gap-8 ${
            item.id === isOpen ? active : ""
          }`}
          key={item.id}
          uuid={item.id}
        >
          <AccordionItemHeading className="w-full md:w-1/2">
            <AccordionItemButton className=" font-medium text-xl font-dm leading-10">
              {item.title}
              {/* <AccordionItemState>
                {({ expanded }) => expanded && setIsOpen(item.id)}
              </AccordionItemState> */}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="w-full md:w-1/2 pt-5 font-dm text-sm leading-7">
            {item.contents}
          </AccordionItemPanel>
          {item.id === isOpen ? minus : plus}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqQuestions;
