import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandHackerrank,
  IconPhone,
  IconMail,
  IconBrandStackoverflow,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/akarms",
    },

    {
      title: "linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "www.linkedin.com/in/akar-ahamedh",
    },
    {
      title: "Hackerrank",
      icon: (
        <IconBrandHackerrank className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.hackerrank.com/profile/akarsihar",
    },
    {
      title: "Medium",
      icon: (
        <Image
          src="/medium.svg"
          width={20}
          height={20}
          alt="medium"
          className="bg-white p-1 rounded-full "
        />
      ),
      href: "https://medium.com/@akarsihar",
    },
    {
      title: "Stackoverflow",
      icon: (
        <IconBrandStackoverflow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://stackoverflow.com/users/22925010/akar-ahamadh",
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:akarsihar@gmail.com",
    },

    {
      title: "Telephone",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+94765525997",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full pt-32 p-10 bg-black">
      <FloatingDock
        mobileClassName="md:translate-y-20 " 
        items={links}
      />

      <div className="flex justify-center items-center w-full pt-10">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © 2024 Akar Ahamadh. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
