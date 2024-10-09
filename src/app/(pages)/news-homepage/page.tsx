import Image from "next/image";
import { inter } from "../../fonts/fonts";
import styles from "./styles.module.css";

import Logo from "@/assets/news-homepage/logo.svg";
import MenuIcon from "@/assets/news-homepage/icon-menu.svg";
// import MenuCloseIcon from "@/assets/news-homepage/icon-menu-close.svg";
import GamingGrowth from "@/assets/news-homepage/image-gaming-growth.jpg";
import RetroPCs from "@/assets/news-homepage/image-retro-pcs.jpg";
import TopLaptops from "@/assets/news-homepage/image-top-laptops.jpg";
// import Web3Desktop from "@/assets/news-homepage/image-web-3-desktop.jpg";
import Web3Mobile from "@/assets/news-homepage/image-web-3-mobile.jpg";

export default function NewsHomepage() {
    return (
        <main className={`${inter.className} ${styles.main} py-8 px-4`}>
            <nav className="flex items-center justify-between mb-8">
                <Image width={45} src={Logo} alt="logo" />
                <button>
                    <Image src={MenuIcon} alt="Menu icon" />
                </button>
            </nav>
            <section className="mb-16">
                <Image className="mb-8" src={Web3Mobile} alt="web 3 image" />
                <h1
                    className={`${styles.textVeryDarkBlue} font-extrabold text-[2.65rem] leading-10 mb-6`}
                >
                    The Bright Future of Web 3.0?
                </h1>
                <div>
                    <div
                        className={`${styles.textDarkGrayishBlue} leading-relaxed mb-8`}
                    >
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </div>
                    <button
                        className={`${styles.bgSoftRed} ${styles.textVeryDarkBlue} font-extrabold text-sm tracking-[.35em] w-[186px] py-3.5`}
                    >
                        READ MORE
                    </button>
                </div>
            </section>
            <section className={`${styles.bgVeryDarkBlue} px-4 py-6 mb-16`}>
                <div
                    className={`${styles.textSoftOrange} font-bold text-3xl mb-6`}
                >
                    New
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <div
                            className={`${styles.textOffWhite} font-bold text-[1.27rem] mb-1`}
                        >
                            Hydrogen VS Electric Cars
                        </div>
                        <div
                            className={`${styles.textGrayishBlue} leading-relaxed`}
                        >
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </div>
                    </div>
                    <div
                        className={`${styles.borderDarkGrayishBlue} border-b`}
                    ></div>
                    <div>
                        <div
                            className={`${styles.textOffWhite} font-bold text-[1.27rem] mb-1`}
                        >
                            The Downsides of AI Artistry
                        </div>
                        <div
                            className={`${styles.textGrayishBlue} leading-relaxed`}
                        >
                            What are the possible adverse effects of on-demand
                            AI image generation?
                        </div>
                    </div>
                    <div
                        className={`${styles.borderDarkGrayishBlue} border-b`}
                    ></div>
                    <div>
                        <div
                            className={`${styles.textOffWhite} font-bold text-[1.27rem] mb-1`}
                        >
                            Is VC Funding Drying Up?
                        </div>
                        <div
                            className={`${styles.textGrayishBlue} leading-relaxed`}
                        >
                            Private funding by VC firms is down 50% YOY. We take
                            a look at what that means.
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-8 mb-16">
                <div className="flex items-center gap-6">
                    <Image
                        className="w-[100px]"
                        src={RetroPCs}
                        alt="retro pcs"
                    />
                    <div className="flex flex-col gap-1">
                        <div
                            className={`${styles.textSoftRed} text-[2rem] font-extrabold`}
                        >
                            01
                        </div>
                        <div
                            className={`${styles.textVeryDarkBlue} font-extrabold text-lg`}
                        >
                            Reviving Retro PCs
                        </div>
                        <div
                            className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                        >
                            What happens when old PCs are given modern upgrades?
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
                            className={`${styles.textSoftRed} text-[2rem] font-extrabold`}
                        >
                            02
                        </div>
                        <div
                            className={`${styles.textVeryDarkBlue} font-extrabold text-lg`}
                        >
                            Top 10 Laptops of 2022
                        </div>
                        <div
                            className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                        >
                            Our best picks for various needs and budgets.
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
                            className={`${styles.textSoftRed} text-[2rem] font-extrabold`}
                        >
                            03
                        </div>
                        <div
                            className={`${styles.textVeryDarkBlue} font-extrabold text-lg`}
                        >
                            The Growth of Gaming
                        </div>
                        <div
                            className={`${styles.textDarkGrayishBlue} leading-relaxed`}
                        >
                            How the pandemic ahs sparked fresh opportunities.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
