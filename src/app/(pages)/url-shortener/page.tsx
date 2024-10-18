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

export default function URLShortener() {
    return (
        <main
            className={`${poppins.className} ${styles.baseFontSize} bg-[#ffffff]`}
        >
            <nav className="flex justify-between pt-10 p-6">
                <Image src={Logo} alt="logo" />
                <GrMenu className="-mr-1.5" size={30} color="#96949f" />
            </nav>
            <section className="mb-[88px]">
                <div className="h-[338px] w-full relative mb-8 overflow-hidden">
                    <Image
                        className="absolute h-full object-cover object-left bottom-0 -right-4"
                        src={HeaderImage}
                        alt="header image"
                    />
                </div>
                <div className="px-6 text-center flex flex-col items-center">
                    <h1 className="text-[hsl(255,11%,22%)] font-bold text-[2.65rem] leading-[1.15] -tracking-2 mb-3">
                        More than just shorter links
                    </h1>
                    <p className="text-[hsl(257,7%,63%)] leading-relaxed mb-8">
                        Build your brand&apos;s recognition and get detailed
                        insights on how your links are performing.
                    </p>
                    <Link
                        className="bg-[hsl(180,66%,49%)] font-black px-10 py-3.5 rounded-full tracking-2"
                        href="/url-shortener"
                    >
                        Get Started
                    </Link>
                </div>
                <div></div>
            </section>
            <section className={`${styles.formGradient} px-6`}>
                <form className="relative flex flex-col gap-4 p-6 bg-[hsl(257,27%,26%)] rounded-xl">
                    <input
                        className="outline-none px-4 py-3 rounded-md bg-white text-base text-[hsl(260,8%,14%)] z-10"
                        placeholder="Shorten a link here..."
                        type="text"
                    />
                    <button
                        className="bg-[hsl(180,66%,49%)] rounded-md font-bold h-[48px] z-10"
                        type="submit"
                    >
                        Shorten It!
                    </button>
                    <Image
                        className="absolute top-0 right-0 rounded-tr-xl"
                        src={ShortenMobile}
                        alt="shorted mobile"
                    />
                </form>
            </section>
            <section className="bg-[#f0f1f6] px-6 pt-[84px] pb-[80px]">
                <div className="text-center mb-24">
                    <h2 className="text-[hsl(260,8%,14%)] font-bold text-[1.65rem] mb-4">
                        Advanced Statistics
                    </h2>
                    <p className="text-[hsl(257,7%,63%)] text-base leading-relaxed">
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                </div>
                <div className="relative flex flex-col gap-[92px]">
                    <div className="relative bg-white rounded-md pt-[78px] pb-[38px] px-6 text-center z-10">
                        <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 mx-auto w-[88px]">
                            <Image
                                src={BrandRecognition}
                                alt="brand recognition"
                            />
                        </div>
                        <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3">
                            Brand Recognition
                        </h3>
                        <div className="text-[hsl(257,7%,63%)] text-base">
                            Boost your brand recognition with each click.
                            Generic links don&apos;t mean a thing. Branded links
                            help instil confidence in your content.
                        </div>
                    </div>
                    <div className="relative bg-white rounded-md pt-[78px] pb-[38px] px-6 text-center z-10">
                        <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 mx-auto w-[88px]">
                            <Image
                                src={DetailedRecords}
                                alt="brand recognition"
                            />
                        </div>
                        <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3">
                            Detailed Records
                        </h3>
                        <div className="text-[hsl(257,7%,63%)] text-base">
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your
                            content helps inform better decisions.
                        </div>
                    </div>
                    <div className="relative bg-white rounded-md pt-[78px] pb-[38px] px-6 text-center z-10">
                        <div className="absolute bg-[hsl(257,27%,26%)] p-6 rounded-full -top-[44px] left-0 right-0 mx-auto w-[88px]">
                            <Image
                                src={FullyCustomizable}
                                alt="brand recognition"
                            />
                        </div>
                        <h3 className="text-[hsl(260,8%,14%)] font-bold text-[1.36rem] mb-3">
                            Fully Customizable
                        </h3>
                        <div className="text-[hsl(257,7%,63%)] text-base">
                            Improve brand awareness and content discoverability
                            through customizable links, supercharging audience
                            engagement.
                        </div>
                    </div>
                    <div className="absolute w-[8px] bg-[hsl(180,66%,49%)] top-0 bottom-0 right-0 left-0 mx-auto"></div>
                </div>
            </section>
            <section className="relative bg-[hsl(257,27%,26%)] h-[300px]">
                <div className="absolute right-0 left-0 top-0 bottom-0 m-auto text-center flex flex-col items-center justify-center">
                    <h2 className="font-bold text-[1.65rem] mb-4">
                        Boost your links today
                    </h2>
                    <Link
                        className="bg-[hsl(180,66%,49%)] font-black px-10 py-3.5 rounded-full tracking-2"
                        href="/url-shortener"
                    >
                        Get Started
                    </Link>
                </div>
                <Image
                    className="w-full h-full object-fill"
                    src={BoostMobile}
                    alt="boost mobile"
                />
            </section>
        </main>
    );
}
