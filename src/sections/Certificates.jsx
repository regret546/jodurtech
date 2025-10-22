import { motion } from "motion/react";
import HeaderLine from "../components/UI/HeaderLine";

import fundamentalsBadge from "../assets/microsoft-badge/microsoft-certified-fundamentals-badge.svg";
import associateBadge from "../assets/microsoft-badge/microsoft-certified-associate-badge.svg";
import specialtyBadge from "../assets/microsoft-badge/microsoft-certified-specialty-badge.svg";

function Certificates() {
  const certificates = [
    {
      title: "AZ-900",
      image: fundamentalsBadge,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JohnKennethDuran-2998/EDC61166F5F5C87B?sharingId=9916EEB5AEA901F9",
    },
    {
      title: "SC-900",
      image: fundamentalsBadge,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JohnKennethDuran-2998/A3AE570CED55B4E7?sharingId=9916EEB5AEA901F9",
    },
    {
      title: "AZ-104",
      image: associateBadge,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JohnKennethDuran-2998/9789B1880568AD55?sharingId=9916EEB5AEA901F9",
    },
    {
      title: "AZ-800",
      image: associateBadge,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JohnKennethDuran-2998/470EE793CA116D77?sharingId=9916EEB5AEA901F9",
    },
    {
      title: "AZ-140",
      image: specialtyBadge,
      url: "https://learn.microsoft.com/api/credentials/share/en-us/JohnKennethDuran-2998/1F3807221538EB4D?sharingId=9916EEB5AEA901F9",
    },
  ];
  return (
    <div className=" md:w-[60%] w-[80%] mt-[4rem]  ">
      <h2 className="font-extrabold text-[3.5rem] mb-5 flex w-full items-center text-accent-blue">
        Certificates.
        <HeaderLine color="accent-blue" />
      </h2>
      <ul className="flex justify-center gap-4 mt-[2rem]">
        {certificates.map((item) => (
          <li key={item.title} className="grid justify-items-center gap-2">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 transition-transform duration-200 "
                whileHover={{
                  scale: 1.2,
                  rotate: "-2.5deg",
                }}
                whileTap={{
                  scale: 0.85,
                }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                }}
              />
            </a>
            <p className="text-fg font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
