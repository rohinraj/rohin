import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "./FooterNavbar.module.scss";

function FooterNavbar(): JSX.Element {
  const { pathname } = useRouter();
  return (
    <nav className={classNames.footerNavbar}>
      <div className={classNames.navMenu}>
        <Link href="/about">
          <a
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/about").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/user.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>About</span>
          </a>
        </Link>
        <Link href="/">
          <a
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/home.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/contact").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/contact.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>Contact</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default FooterNavbar;
