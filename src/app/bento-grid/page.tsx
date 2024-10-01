import { dm_sans } from "../fonts/fonts";
import Image from "next/image";

import FiveStars from "@/assets/bento-grid/illustration-five-stars.webp";
import MultiPlatform from "@/assets/bento-grid/illustration-multiple-platforms.webp";

const PURPLE_100 = "hsl(254,88%,90%)";
const PURPLE_500 = "hsl(256,67%,59%)";
const YELLOW_100 = "hsl(31,66%,93%)";
const YELLOW_500 = "hsl(39,100%,71%)";
const WHITE = "hsl(0,0%,100%)";
const BLACK = "hsl(0,0%,7%)";

export default function BentoGrid() {
    return (
        <div
            style={{ backgroundColor: WHITE }}
            className={`py-8 px-4 h-screen w-screen ${dm_sans.className}`}
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
            <div className="rounded-[10px] drop-shadow-md bg-white">
                <Image
                    className="mx-4 w-auto py-4"
                    src={MultiPlatform}
                    alt="multiple platform image"
                />

                <div
                    className="font-medium text-2xl -tracking-3 leading-[22px] px-4 pb-4"
                    style={{ color: BLACK }}
                >
                    Manage multiple accounts and platforms.
                </div>
            </div>
        </div>
    );
}
