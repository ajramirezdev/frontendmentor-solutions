import { dm_sans } from "../fonts/fonts";
import Image from "next/image";

import FiveStars from "@/assets/bento-grid/illustration-five-stars.webp";
import Calendar from "@/assets/bento-grid/illustration-consistent-schedule.webp";
import XLogo from "@/assets/bento-grid/x-logo.svg";
import InstaLogo from "@/assets/bento-grid/insta-logo.svg";

// const PURPLE_100 = "hsl(254,88%,90%)";
const PURPLE_500 = "hsl(256,67%,59%)";
const YELLOW_100 = "hsl(31,66%,93%)";
const YELLOW_500 = "hsl(39,100%,71%)";
const WHITE = "hsl(0,0%,100%)";
const BLACK = "hsl(0,0%,7%)";

export default function BentoGrid() {
    return (
        <div
            style={{ backgroundColor: WHITE }}
            className={`py-8 px-4 w-screen ${dm_sans.className}`}
        >
            <div
                className="rounded-[10px] flex flex-col items-center p-8 mb-8"
                style={{ backgroundColor: PURPLE_500 }}
            >
                <div
                    className="text-5xl -tracking-2 font-medium text-center mb-5 leading-[44px]"
                    style={{ color: WHITE }}
                >
                    Social Media <span style={{ color: YELLOW_500 }}>10x</span>{" "}
                    <span className=" italic">Faster</span> with AI
                </div>
                <div className="mb-1">
                    <Image
                        className="w-[200px]"
                        src={FiveStars}
                        alt="Five stars"
                    />
                </div>
                <div className="text-lg" style={{ color: YELLOW_100 }}>
                    Over 4,000 5-star reviews
                </div>
            </div>
            <div className="p-4 rounded-[10px] drop-shadow-md bg-white mb-8">
                <div className="flex justify-between mb-4">
                    <div className="flex drop-shadow-md bg-white rounded-full justify-center p-4 pr-6">
                        <div className="flex items-center gap-2">
                            <div
                                className="rounded-full w-9 h-9 p-1.5"
                                style={{ backgroundColor: YELLOW_500 }}
                            >
                                <Image src={InstaLogo} alt="instagram logo" />
                            </div>
                            <div>
                                <div
                                    className="font-semibold -tracking-3"
                                    style={{ color: BLACK }}
                                >
                                    @YourCo
                                </div>
                                <div className="text-black text-xs -mt-0.5 -tracking-2 opacity-60">
                                    12k Followers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex drop-shadow-md bg-white rounded-full p-4 pr-6">
                        <div className="flex items-center gap-2">
                            <div
                                className="rounded-full w-9 h-9 p-1.5"
                                style={{ backgroundColor: YELLOW_500 }}
                            >
                                <Image
                                    className=""
                                    src={XLogo}
                                    alt="instagram logo"
                                />
                            </div>
                            <div>
                                <div
                                    className="font-semibold -tracking-3"
                                    style={{ color: BLACK }}
                                >
                                    @YourCo
                                </div>
                                <div className="text-black text-xs -mt-0.5 -tracking-2 opacity-60">
                                    8k Followers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="font-medium text-2xl -tracking-3 leading-[22px]"
                    style={{ color: BLACK }}
                >
                    Manage multiple accounts and platforms.
                </div>
            </div>
            <div
                className="rounded-[10px]"
                style={{ backgroundColor: YELLOW_500 }}
            >
                <div
                    className="p-4 pr-8 font-medium text-2xl -tracking-3 leading-[22px]"
                    style={{ color: BLACK }}
                >
                    Maintain a consistent posting schedule.
                </div>
                <div className="pl-4 ">
                    <Image
                        className="w-[195px] h-[128px] object-top object-cover"
                        src={Calendar}
                        alt="calendar"
                    />
                </div>
            </div>
        </div>
    );
}
