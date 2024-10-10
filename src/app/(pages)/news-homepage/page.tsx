import Image from "next/image";
import { inter } from "../../fonts/fonts";
import styles from "./styles.module.css";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/news-homepage-sheet";

import Logo from "@/assets/news-homepage/logo.svg";
import MenuIcon from "@/assets/news-homepage/icon-menu.svg";
import GamingGrowth from "@/assets/news-homepage/image-gaming-growth.jpg";
import RetroPCs from "@/assets/news-homepage/image-retro-pcs.jpg";
import TopLaptops from "@/assets/news-homepage/image-top-laptops.jpg";
import Web3Mobile from "@/assets/news-homepage/image-web-3-mobile.jpg";
import Web3Desktop from "@/assets/news-homepage/image-web-3-desktop.jpg";
import Link from "next/link";

export default function NewsHomepage() {
    return (
        <main
            className={`${inter.className} ${styles.main} py-8 px-4 lg:px-8 xl:p-0 xl:flex xl:justify-center xl:items-center xl:h-screen`}
        >
            <div className="xl:max-w-[1110px]">
                <nav className="flex items-center justify-between mb-8 xl:mb-14">
                    <Image
                        className="w-[45px] xl:w-[64px]"
                        src={Logo}
                        alt="logo"
                    />
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Image src={MenuIcon} alt="Menu icon" />
                            </SheetTrigger>
                            <SheetContent>
                                <div className="flex flex-col gap-5">
                                    <Link href={"/news-homepage"}>Home</Link>
                                    <Link href={"/news-homepage"}>New</Link>
                                    <Link href={"/news-homepage"}>Popular</Link>
                                    <Link href={"/news-homepage"}>
                                        Trending
                                    </Link>
                                    <Link href={"/news-homepage"}>
                                        Categories
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden lg:flex lg:gap-8 xl:gap-10">
                        <Link
                            className={`${styles.textDarkGrayishBlue} hover:text-[hsl(5,85%,63%)]`}
                            href={"/news-homepage"}
                        >
                            Home
                        </Link>
                        <Link
                            className={`${styles.textDarkGrayishBlue} hover:text-[hsl(5,85%,63%)]`}
                            href={"/news-homepage"}
                        >
                            New
                        </Link>
                        <Link
                            className={`${styles.textDarkGrayishBlue} hover:text-[hsl(5,85%,63%)]`}
                            href={"/news-homepage"}
                        >
                            Popular
                        </Link>
                        <Link
                            className={`${styles.textDarkGrayishBlue} hover:text-[hsl(5,85%,63%)]`}
                            href={"/news-homepage"}
                        >
                            Trending
                        </Link>
                        <Link
                            className={`${styles.textDarkGrayishBlue} hover:text-[hsl(5,85%,63%)]`}
                            href={"/news-homepage"}
                        >
                            Categories
                        </Link>
                    </div>
                </nav>
                <div className="md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-y-16">
                    <section className="mb-16 md:grid md:grid-cols-2 md:gap-8 md:col-span-2 md:mb-0">
                        <Image
                            className="mb-8 md:hidden"
                            src={Web3Mobile}
                            alt="web 3 image"
                        />
                        <Image
                            className="hidden md:block md:col-span-2"
                            src={Web3Desktop}
                            alt="web 3 image"
                        />
                        <h1
                            className={`${styles.textVeryDarkBlue} font-extrabold text-[2.65rem] leading-10 mb-6 md:text-6xl md:mb-0`}
                        >
                            The Bright Future of Web 3.0?
                        </h1>
                        <div>
                            <div
                                className={`${styles.textDarkGrayishBlue} leading-relaxed mb-8`}
                            >
                                We dive into the next evolution of the web that
                                claims to put the power of the platforms back
                                into the hands of the people. But is it really
                                fulfilling its promise?
                            </div>
                            <button
                                className={`${styles.bgSoftRed} ${styles.textVeryDarkBlue} font-extrabold text-sm tracking-[.35em] w-[186px] py-3.5 hover:bg-[hsl(240,100%,5%)] hover:text-[hsl(36,100%,99%)]`}
                            >
                                READ MORE
                            </button>
                        </div>
                    </section>
                    <section
                        className={`${styles.bgVeryDarkBlue} px-4 py-6 mb-16 md:mb-0`}
                    >
                        <div
                            className={`${styles.textSoftOrange} font-bold text-3xl mb-6 xl:text-4xl`}
                        >
                            New
                        </div>
                        <div className="flex flex-col gap-8">
                            <div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textOffWhite} font-bold text-[1.27rem] hover:text-[hsl(35,77%,62%)]`}
                                >
                                    Hydrogen VS Electric Cars
                                </Link>
                                <div
                                    className={`${styles.textGrayishBlue} leading-relaxed mt-2`}
                                >
                                    Will hydrogen-fueled cars ever catch up to
                                    EVs?
                                </div>
                            </div>
                            <div
                                className={`${styles.borderDarkGrayishBlue} border-b`}
                            ></div>
                            <div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textOffWhite} font-bold text-[1.27rem] hover:text-[hsl(35,77%,62%)]`}
                                >
                                    The Downsides of AI Artistry
                                </Link>
                                <div
                                    className={`${styles.textGrayishBlue} leading-relaxed mt-2`}
                                >
                                    What are the possible adverse effects of
                                    on-demand AI image generation?
                                </div>
                            </div>
                            <div
                                className={`${styles.borderDarkGrayishBlue} border-b`}
                            ></div>
                            <div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textOffWhite} font-bold text-[1.27rem] hover:text-[hsl(35,77%,62%)]`}
                                >
                                    Is VC Funding Drying Up?
                                </Link>
                                <div
                                    className={`${styles.textGrayishBlue} leading-relaxed mt-2`}
                                >
                                    Private funding by VC firms is down 50% YOY.
                                    We take a look at what that means.
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-8 mb-16 md:mb-0 xl:grid xl:grid-cols-3 xl:col-span-3">
                        <div className="flex items-center gap-6">
                            <Image
                                className="w-[100px]"
                                src={RetroPCs}
                                alt="retro pcs"
                            />
                            <div className="flex flex-col gap-1">
                                <div
                                    className={`${styles.textSoftRed} text-[2rem] font-extrabold xl:-mt-1`}
                                >
                                    01
                                </div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textVeryDarkBlue} font-extrabold text-lg xl:-mt-1 hover:text-[hsl(5,85%,63%)]`}
                                >
                                    Reviving Retro PCs
                                </Link>
                                <div
                                    className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                                >
                                    What happens when old PCs are given modern
                                    upgrades?
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Image
                                className="w-[100px]"
                                src={TopLaptops}
                                alt="retro pcs"
                            />
                            <div className="flex flex-col gap-1">
                                <div
                                    className={`${styles.textSoftRed} text-[2rem] font-extrabold xl:-mt-1`}
                                >
                                    02
                                </div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textVeryDarkBlue} font-extrabold text-lg xl:-mt-1 hover:text-[hsl(5,85%,63%)]`}
                                >
                                    Top 10 Laptops of 2022
                                </Link>
                                <div
                                    className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                                >
                                    Our best picks for various needs and
                                    budgets.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Image
                                className="w-[100px]"
                                src={GamingGrowth}
                                alt="retro pcs"
                            />
                            <div>
                                <div
                                    className={`${styles.textSoftRed} text-[2rem] font-extrabold xl:-mt-1`}
                                >
                                    03
                                </div>
                                <Link
                                    href="/news-homepage"
                                    className={`${styles.textVeryDarkBlue} font-extrabold text-lg xl:-mt-1 hover:text-[hsl(5,85%,63%)]`}
                                >
                                    The Growth of Gaming
                                </Link>
                                <div
                                    className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                                >
                                    How the pandemic ahs sparked fresh
                                    opportunities.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
