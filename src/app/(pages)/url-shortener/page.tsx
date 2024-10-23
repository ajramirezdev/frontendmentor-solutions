"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { poppins } from "@/app/fonts/fonts";

import { GrMenu } from "react-icons/gr";

import Logo from "@/assets/url-shortener/logo.svg";
import HeaderImage from "@/assets/url-shortener/illustration-working.svg";
import BrandRecognition from "@/assets/url-shortener/icon-brand-recognition.svg";
import DetailedRecords from "@/assets/url-shortener/icon-detailed-records.svg";
import FullyCustomizable from "@/assets/url-shortener/icon-fully-customizable.svg";

import ShortenMobile from "@/assets/url-shortener/bg-shorten-mobile.svg";
import BoostMobile from "@/assets/url-shortener/bg-boost-mobile.svg";
import { useEffect, useState } from "react";

import ShortedDesktop from "@/assets/url-shortener/bg-shorten-desktop.svg";
import BoostDesktop from "@/assets/url-shortener/bg-boost-desktop.svg";

interface IUrls {
    longUrl: string;
    shortUrl: string;
}

export default function URLShortener() {
    const [dropMenu, setDropMenu] = useState(false);
    const [url, setUrl] = useState("");
    const [isUrl, setIsUrl] = useState(false);
    const [shortUrls, setShortUrls] = useState<IUrls[]>([]);

    useEffect(() => {
        const storedUrls = localStorage.getItem("urls");

        if (storedUrls) {
            setShortUrls(JSON.parse(storedUrls));
        } else {
            setShortUrls([]);
        }
    }, []);

    useEffect(() => {
        if (shortUrls.length > 0) {
            localStorage.setItem("urls", JSON.stringify(shortUrls));
        }
    }, [shortUrls]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            new URL(url);
            setIsUrl(false);

            const response = await fetch("/api/url-shortener-proxy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url,
                }),
            });

            const data = await response.json();

            const updatedShortUrls =
                shortUrls.length >= 3 ? shortUrls.slice(1) : shortUrls;

            setShortUrls([
                ...updatedShortUrls,
                { longUrl: url, shortUrl: data.result_url },
            ]);
        } catch {
            setIsUrl(true);
        }

        setUrl("");
    };

    return (
        <main
            className={`${poppins.className} ${styles.baseFontSize} bg-[#ffffff] flex flex-col items-center`}
        >
            <nav className="relative w-full flex justify-between pt-10 p-6 lg:px-0 items-center max-w-[1110px]">
                <div className="flex items-center gap-11">
                    <Image src={Logo} alt="logo" />
                    <div className="hidden lg:flex gap-8 text-[hsl(257,7%,63%)] font-bold">
                        <Link
                            className="hover:text-[hsl(260,8%,14%)]"
                            href="/url-shortener"
                        >
                            Features
                        </Link>
                        <Link
                            className="hover:text-[hsl(260,8%,14%)]"
                            href="/url-shortener"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="hover:text-[hsl(260,8%,14%)]"
                            href="/url-shortener"
                        >
                            Resources
                        </Link>
                    </div>
                </div>
                <button
                    className="lg:hidden"
                    onClick={() => setDropMenu((prev) => !prev)}
                >
                    <GrMenu className="-mr-0.5" size={30} color="#96949f" />
                </button>
                <div className="hidden lg:flex gap-9 font-bold items-center">
                    <Link
                        className="text-[hsl(257,7%,63%)] hover:text-[hsl(260,8%,14%)]"
                        href="/url-shortener"
                    >
                        Login
                    </Link>
                    <Link
                        className="bg-[hsl(180,66%,49%)] hover:bg-[#9ae1e1] px-6 py-2 rounded-full"
                        href="/url-shortener"
                    >
                        Sign Up
                    </Link>
                </div>
                {dropMenu && (
                    <div className="absolute bg-[hsl(257,27%,26%)] rounded-xl right-6 left-6 z-50 top-[97px] font-bold py-10 px-6 flex flex-col gap-7 items-center">
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Resources</div>
                        <div className="border-b border-[#ffffff3b] w-full"></div>
                        <div>Login</div>
                        <div className="bg-[hsl(180,66%,49%)] w-full text-center rounded-full py-2.5">
                            Sign Up
                        </div>
                    </div>
                )}
            </nav>
            <section className="mb-[88px] w-full relative overflow-hidden max-w-[1110px] lg:flex lg:flex-row-reverse ">
                <Image
                    className="min-h-[338px] lg:w-1/2 max-h-[484px] mb-8 object-cover object-left pl-6"
                    src={HeaderImage}
                    alt="header image"
                />
                <div className="px-6 lg:px-0 lg:w-1/2 text-center flex flex-col items-center lg:items-start lg:text-left">
                    <h1 className="text-[hsl(255,11%,22%)] font-bold text-[2.65rem] leading-[1.15] -tracking-2 mb-3 lg:text-8xl">
                        More than just shorter links
                    </h1>
                    <p className="text-[hsl(257,7%,63%)] leading-relaxed mb-8">
                        Build your brand&apos;s recognition and get detailed
                        insights on how your links are performing.
                    </p>
                    <Link
                        onClick={() =>
                            navigator.clipboard.writeText("hello, how are you?")
                        }
                        className="bg-[hsl(180,66%,49%)] hover:bg-[#9ae1e1] font-black px-10 py-3.5 rounded-full tracking-2"
                        href="/url-shortener"
                    >
                        Get Started
                    </Link>
                </div>
                <div></div>
            </section>
            <section
                className={`${styles.formGradient} px-6 w-full flex flex-col pb-6 items-center justify-center`}
            >
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="relative flex lg:flex-row flex-col lg:py-[52px] lg:px-16 max-w-[1110px] w-full gap-4 lg:gap-6 p-6 bg-[hsl(257,27%,26%)] rounded-xl lg:relative"
                >
                    <input
                        className={`outline-none ${
                            isUrl &&
                            "border-[3px] border-[hsl(0,87%,67%)] placeholder-[#f462626e]"
                        } px-4 py-3 lg:px-8 lg:py-[18px] lg:text-xl lg:w-full rounded-md bg-white text-base text-[hsl(260,8%,14%)] z-10`}
                        placeholder="Shorten a link here..."
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {isUrl && (
                        <div className="z-30 italic text-[hsl(0,87%,67%)] text-xs -mt-2.5 lg:absolute lg:text-base lg:bottom-4">
                            Please add a link
                        </div>
                    )}
                    <button
                        className="bg-[hsl(180,66%,49%)] hover:bg-[#9ae1e1] rounded-md font-bold h-[48px] lg:h-auto lg:text-xl lg:w-[188px] z-10"
                        type="submit"
                    >
                        Shorten It!
                    </button>
                    <Image
                        className="absolute top-0 right-0 rounded-tr-xl lg:hidden"
                        src={ShortenMobile}
                        alt="shorten mobile"
                    />
                    <Image
                        className={`absolute top-0 bottom-0 right-0 rounded-xl hidden lg:block ${
                            isUrl && "lg:h-[174px]"
                        }`}
                        src={ShortedDesktop}
                        alt="shorten desktop"
                    />
                </form>
            </section>
            <section className="w-full bg-[#f0f1f6] px-6 flex justify-center">
                <div className="flex flex-col gap-6 lg:gap-4 max-w-[1110px] w-full">
                    {shortUrls.length !== 0 &&
                        shortUrls.toReversed().map((url, index) => (
                            <div
                                className="bg-white w-full rounded-md text-base lg:flex lg:items-center lg:justify-between"
                                key={index}
                            >
                                <div className="text-[hsl(255,11%,22%)] lg:text-xl px-4 pt-3 pb-2 truncate -tracking-2">
                                    {url.longUrl}
                                </div>
                                <div className="border-b border-[#bfbfbf6b] lg:hidden"></div>
                                <div className="p-4 lg:flex lg:items-center lg:gap-6">
                                    <div className="text-[hsl(180,66%,49%)] mb-4 lg:m-0 lg:text-xl -tracking-2">
                                        {url.shortUrl}
                                    </div>
                                    <button className="bg-[hsl(180,66%,49%)] focus:bg-red-400 font-bold w-full py-2 rounded-md lg:w-[104px]">
                                        Copy
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <section className="bg-[#f0f1f6] lg:h-[825px] w-full px-6 pt-[84px] pb-[80px] lg:py-[120px] flex justify-center">
                <div className="max-w-[1110px]">
                    <div className="text-center mb-24 lg:mb-[104px] lg:flex lg:flex-col items-center">
                        <h2 className="text-[hsl(260,8%,14%)] font-bold text-[1.65rem] mb-4 lg:text-[2.5rem]">
                            Advanced Statistics
                        </h2>
                        <p className="text-[hsl(257,7%,63%)] text-base lg:text-lg leading-relaxed lg:w-[512px]">
                            Track how your links are performing across the web
                            with our advanced statistics dashboard.
                        </p>
                    </div>
                    <div className="relative flex flex-col lg:flex-row gap-[92px] lg:gap-[30px]">
                        <div className="relative bg-white rounded-md pt-[78px] pb-[38px] lg:pb-[42px] px-6 lg:w-1/3 text-center lg:text-left z-10 lg:mb-[88px]">
                            <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 lg:left-8 lg:mx-0 mx-auto w-[88px]">
                                <Image
                                    src={BrandRecognition}
                                    alt="brand recognition"
                                />
                            </div>
                            <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3 lg:mb-4">
                                Brand Recognition
                            </h3>
                            <div className="text-[hsl(257,7%,63%)] text-base">
                                Boost your brand recognition with each click.
                                Generic links don&apos;t mean a thing. Branded
                                links help instil confidence in your content.
                            </div>
                        </div>
                        <div className="relative bg-white rounded-md pt-[78px] pb-[38px] lg:pb-[42px] px-6 lg:w-1/3 text-center lg:text-left z-10 lg:my-[44px]">
                            <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 lg:left-8 lg:mx-0 mx-auto w-[88px]">
                                <Image
                                    src={DetailedRecords}
                                    alt="brand recognition"
                                />
                            </div>
                            <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3 lg:mb-4">
                                Detailed Records
                            </h3>
                            <div className="text-[hsl(257,7%,63%)] text-base">
                                Gain insights into who is clicking your links.
                                Knowing when and where people engage with your
                                content helps inform better decisions.
                            </div>
                        </div>
                        <div className="relative bg-white rounded-md pt-[78px] pb-[38px] lg:pb-[42px] px-6 lg:w-1/3 text-center lg:text-left z-10 lg:mt-[88px]">
                            <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 lg:left-8 lg:mx-0 mx-auto w-[88px]">
                                <Image
                                    src={FullyCustomizable}
                                    alt="brand recognition"
                                />
                            </div>
                            <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3 lg:mb-4">
                                Fully Customizable
                            </h3>
                            <div className="text-[hsl(257,7%,63%)] text-base">
                                Improve brand awareness and content
                                discoverability through customizable links,
                                supercharging audience engagement.
                            </div>
                        </div>
                        <div className="absolute w-[8px] lg:w-auto lg:h-[8px] bg-[hsl(180,66%,49%)] top-0 bottom-0 lg:bottom-8 right-0 left-0 mx-auto lg:mx-0 lg:my-auto"></div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[hsl(257,27%,26%)] h-[300px] lg:h-[250px] w-full">
                <div className="absolute right-0 left-0 top-0 bottom-0 m-auto text-center flex flex-col items-center justify-center">
                    <h2 className="font-bold text-[1.65rem] mb-4 lg:text-4xl lg:mb-8">
                        Boost your links today
                    </h2>
                    <Link
                        className="bg-[hsl(180,66%,49%)] hover:bg-[#9ae1e1] font-black px-10 py-3.5 rounded-full tracking-2"
                        href="/url-shortener"
                    >
                        Get Started
                    </Link>
                </div>
                <Image
                    className="w-full h-full object-fill lg:hidden"
                    src={BoostMobile}
                    alt="boost mobile"
                />
                <Image
                    className="w-full h-full object-fill hidden lg:block"
                    src={BoostDesktop}
                    alt="boost mobile"
                />
            </section>
            <section className="bg-[hsl(260,8%,14%)] w-full flex justify-center text-center text-sm text-[hsl(0,0%,75%)]">
                <div className="py-14 lg:py-[72px] flex flex-col lg:flex-row lg:w-full lg:justify-between gap-10 items-center lg:items-start max-w-[1110px]">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="121"
                            height="33"
                        >
                            <path
                                fill="#fff"
                                d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
                        <div className="flex flex-col gap-3 lg:items-start">
                            <div className="text-white mb-4 font-bold">
                                Features
                            </div>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Link Shortening
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Branded Links
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Analytics
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 lg:items-start">
                            <div className="text-white mb-4 font-bold">
                                Resources
                            </div>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Blog
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Developers
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Support
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 lg:items-start">
                            <div className="text-white mb-4 font-bold">
                                Company
                            </div>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                About
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Our Team
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Careers
                            </Link>
                            <Link
                                className="hover:text-[hsl(180,66%,49%)]"
                                href="/url-shortener"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex gap-6">
                            <Link href="/url-shortener">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="group"
                                >
                                    <path
                                        className="group-hover:fill-[hsl(180,66%,49%)]"
                                        fill="#FFF"
                                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/url-shortener">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="20"
                                    className="group"
                                >
                                    <path
                                        className="group-hover:fill-[hsl(180,66%,49%)]"
                                        fill="#FFF"
                                        d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/url-shortener">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="group"
                                >
                                    <path
                                        className="group-hover:fill-[hsl(180,66%,49%)]"
                                        fill="#FFF"
                                        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/url-shortener">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="group"
                                >
                                    <path
                                        className="group-hover:fill-[hsl(180,66%,49%)]"
                                        fill="#FFF"
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
