"use client";

import React, { useState } from "react";
import Image from "next/image";

const LanguageDropdown = () => {
  const [currentLanguage, setCurrentLanguage] = useState("al");
  const languages = [
    { code: "en", name: "English", label: "Language", flag: "/flags/en.webp" },
    { code: "al", name: "Shqip", label: "Gjuhë", flag: "/flags/al.webp" },
    { code: "ru", name: "Русский", label: "Язык", flag: "/flags/ru.webp" },
    { code: "tr", name: "Türkçe", label: "Dil", flag: "/flags/tr.webp" },
    { code: "ar", name: "العربية", label: " اللغة", flag: "/flags/ar.webp" },
    { code: "rs", name: "Српски", label: "Jezik", flag: "/flags/rs.webp" },
  ];

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    // Dil değişimi ile ilgili işlem yapabilirsiniz
  };

  const currentLangObj = languages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className="absolute top-[10px] right-[10px] inline-block group">
      <button className="bg-[#c0a162] text-black px-[10px] py-[5px] border-0 cursor-pointer w-[120px] flex justify-between align-center text-[14px] h-[30px] transition-colors duration-300 ease-in-out group-hover:bg-[#c0a162]">
        <Image
          className="object-cover"
          src={`${currentLangObj.flag}`}
          alt={`${currentLangObj.name} Flag`}
          width={20}
          height={15}
        />
        {currentLangObj.label}
      </button>
      <ul className="hidden group-hover:block absolute top-[100%] left-0 w-[120px] bg-[#c0a162] b-[#c0a162] z-[1000] p-0 m-0">
        {languages.map((lang) => (
          <li className="list-none" key={lang.code}>
            <a
              className="p-[10px] flex align-center justify-between text-black no-underline text-[14px] gap-[10px] hover:bg-[#0a0a0a] hover:text-[#c0a162]"
              href={lang.code === "en" ? "/" : `/${lang.code}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <Image
                className="object-cover"
                src={`${lang.flag}`}
                alt={`${lang.name} Flag`}
                width={20}
                height={15}
              />
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
