import Image from "next/image";
import { barlow, fraunces } from "../../fonts/fonts";
import styles from "./styles.module.css";

import Logo from "@/assets/agency-landing/logo.svg";
import FooterLogo from "@/assets/agency-landing/logo-footer.svg";
import ArrowDown from "@/assets/agency-landing/icon-arrow-down.svg";
import Hamburger from "@/assets/agency-landing/icon-hamburger.svg";
import Emily from "@/assets/agency-landing/image-emily.jpg";
import Jennie from "@/assets/agency-landing/image-jennie.jpg";
import Thomas from "@/assets/agency-landing/image-thomas.jpg";
import FacebookIcon from "@/assets/agency-landing/icon-facebook.svg";
import InstagramIcon from "@/assets/agency-landing/icon-instagram.svg";
import TwitterIcon from "@/assets/agency-landing/icon-twitter.svg";
import PinterestIcon from "@/assets/agency-landing/icon-pinterest.svg";

import MobileHeader from "@/assets/agency-landing/mobile/image-header.jpg";
import MobileTransform from "@/assets/agency-landing/mobile/image-transform.jpg";
import MobileStandOut from "@/assets/agency-landing/mobile/image-stand-out.jpg";
import MobileGraphicDesign from "@/assets/agency-landing/mobile/image-graphic-design.jpg";
import MobilePhotography from "@/assets/agency-landing/mobile/image-photography.jpg";
import MobileSugarCubes from "@/assets/agency-landing/mobile/image-gallery-sugar-cubes.jpg";
import MobileOrange from "@/assets/agency-landing/mobile/image-gallery-orange.jpg";
import MobileMilkBottles from "@/assets/agency-landing/mobile/image-gallery-milkbottles.jpg";
import MobileCone from "@/assets/agency-landing/mobile/image-gallery-cone.jpg";

import Link from "next/link";

export default function AgencyLanding() {
    return (
        <main
            className={`${barlow.className} ${styles.textNormal} bg-[#fffbf8]`}
        >
            <section className="relative">
                <div className="absolute w-full px-6 py-8 flex flex-col items-center">
                    <nav className="flex justify-between items-center w-full mb-24">
                        <Image src={Logo} alt="logo" />
                        <Image src={Hamburger} alt="menu icon" />
                    </nav>
                    <h1
                        className={`${fraunces.className} font-black text-[2.35rem] text-center tracking-[0.21em] leading-tight mb-11`}
                    >
                        WE ARE CREATIVES
                    </h1>
                    <Image src={ArrowDown} alt="arrow down icon" />
                </div>
                <Image src={MobileHeader} alt="header for mobile" />
            </section>
            <section>
                <Image src={MobileTransform} alt="egg" />
                <div className="flex flex-col gap-6 items-center text-center px-6 py-[4.3rem]">
                    <div
                        className={`${fraunces.className} text-[hsl(212,27%,19%)] font-black text-[2rem] leading-tight`}
                    >
                        Transform your brand
                    </div>
                    <div className="text-[hsl(232,10%,55%)]">
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </div>
                    <Link
                        className={`group ${fraunces.className} text-[hsl(212,27%,19%)] mt-4 font-black text-base`}
                        href="/agency-landing"
                    >
                        LEARN MORE
                        <div className="bg-[#fef1b5] h-2.5 rounded-full -mt-2.5 group-hover:bg-[hsl(51,100%,49%)] w-[134px]"></div>
                    </Link>
                </div>
            </section>
            <section>
                <Image src={MobileStandOut} alt="cup" />
                <div className="flex flex-col gap-6 items-center text-center px-6 py-[4.3rem]">
                    <div
                        className={`${fraunces.className} text-[hsl(212,27%,19%)] font-black text-[2rem] leading-tight`}
                    >
                        Stand out to the right audience
                    </div>
                    <div className="text-[hsl(232,10%,55%)]">
                        Using a collaborative formula of designers,researchers,
                        photographers, videographers, and copywriters,
                        we&apos;ll build and extend your brand in digital
                        places.
                    </div>
                    <Link
                        className={`group ${fraunces.className} text-[hsl(212,27%,19%)] mt-4 font-black text-base`}
                        href="/agency-landing"
                    >
                        LEARN MORE
                        <div className="bg-[#fed9cf] h-2.5 rounded-full -mt-2.5 group-hover:bg-[hsl(7,99%,70%)] w-[134px]"></div>
                    </Link>
                </div>
            </section>
            <section className="relative">
                <div className="absolute bottom-16 px-5 text-base text-center">
                    <div
                        className={`${fraunces.className} text-[hsl(167,40%,24%)] font-black text-[2rem] mb-8`}
                    >
                        Graphic Design
                    </div>
                    <div className="text-[hsl(167,40%,24%)]">
                        Great design makes you memorable. We deliver artwork
                        that underscores your brand message and captures
                        potential clients&apos; attention.
                    </div>
                </div>
                <Image src={MobileGraphicDesign} alt="cherries" />
            </section>
            <section className="relative">
                <div className="absolute bottom-16 px-5 text-base text-center">
                    <div
                        className={`${fraunces.className} text-[hsl(198,62%,26%)] font-black text-[2rem] mb-8`}
                    >
                        Photography
                    </div>
                    <div className="text-[hsl(198,62%,26%)]">
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </div>
                </div>
                <Image src={MobilePhotography} alt="orange" />
            </section>
            <section className="px-6 text-center pt-16 pb-[90px]">
                <h3
                    className={`${fraunces.className} text-[hsl(210,4%,67%)] font-black text-base tracking-[0.24em] mb-[3.75rem]`}
                >
                    CLIENT TESTIMONIALS
                </h3>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col items-center gap-8">
                        <Image
                            className="w-[72px] rounded-full"
                            src={Emily}
                            alt="Emily"
                        />
                        <div className="text-[hsl(213,9%,39%)] leading-relaxed">
                            We put our trust in Sunnyside and they delivered,
                            making sure our needs were met and deadlines were
                            always hit.
                        </div>
                        <div>
                            <div
                                className={`${fraunces.className} font-black text-[hsl(212,27%,19%)] mb-2`}
                            >
                                Emily R.
                            </div>
                            <div className="text-[hsl(210,4%,67%)] text-sm">
                                Marketing Director
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <Image
                            className="w-[72px] rounded-full"
                            src={Thomas}
                            alt="Thomas"
                        />
                        <div className="text-[hsl(213,9%,39%)] leading-relaxed">
                            Sunnyside&apos;s enthusiasm coupled with their keen
                            interest in our brand&apos;s success made it a
                            satisfying and enjoyable experience.
                        </div>
                        <div>
                            <div
                                className={`${fraunces.className} font-black text-[hsl(212,27%,19%)] mb-2`}
                            >
                                Thomas S.
                            </div>
                            <div className="text-[hsl(210,4%,67%)] text-sm">
                                Chief Operating Officer
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <Image
                            className="w-[72px] rounded-full"
                            src={Jennie}
                            alt="Jennie"
                        />
                        <div className="text-[hsl(213,9%,39%)] leading-relaxed">
                            Incredible end result! Our sales increased over 400%
                            when we worked with Sunnyside. Highly recommended!
                        </div>
                        <div>
                            <div
                                className={`${fraunces.className} font-black text-[hsl(212,27%,19%)] mb-2`}
                            >
                                Jennie F.
                            </div>
                            <div className="text-[hsl(210,4%,67%)] text-sm">
                                Business Owner
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <Image src={MobileMilkBottles} alt="milk bottles" />
                <Image src={MobileOrange} alt="orange" />
                <Image src={MobileCone} alt="cone" />
                <Image src={MobileSugarCubes} alt="sugar cube" />
            </section>
            <footer className="bg-[#90d4c5] flex flex-col items-center pt-16 pb-24">
                <Image
                    className="w-[180px] mb-12"
                    src={FooterLogo}
                    alt="logo"
                />
                <div className="text-[#2c7464] flex gap-14 mb-[90px] text-xl">
                    <Link href="/agency-landing">About</Link>
                    <Link href="/agency-landing">Services</Link>
                    <Link href="/agency-landing">Projects</Link>
                </div>
                <div className="flex gap-7">
                    <Link href="/agency-landing">
                        <Image src={FacebookIcon} alt="facebook icon" />
                    </Link>
                    <Link href="/agency-landing">
                        <Image src={InstagramIcon} alt="instagram icon" />
                    </Link>
                    <Link href="/agency-landing">
                        <Image src={TwitterIcon} alt="twitter icon" />
                    </Link>
                    <Link href="/agency-landing">
                        <Image src={PinterestIcon} alt="pinterest icon" />
                    </Link>
                </div>
            </footer>
        </main>
    );
}
