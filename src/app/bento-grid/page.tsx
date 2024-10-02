import { dm_sans } from "../fonts/fonts";
import Image from "next/image";

import FiveStars from "@/assets/bento-grid/illustration-five-stars.webp";
import Calendar from "@/assets/bento-grid/illustration-consistent-schedule.webp";
import SchedPost from "@/assets/bento-grid/illustration-schedule-posts.webp";
import GrowingFollowers from "@/assets/bento-grid/illustration-grow-followers.webp";
import AudienceGrowth from "@/assets/bento-grid/illustration-audience-growth.webp";
import CreatePost from "@/assets/bento-grid/illustration-create-post.webp";
import AIContent from "@/assets/bento-grid/illustration-ai-content.webp";

import XLogo from "@/assets/bento-grid/x-logo.svg";
import InstaLogo from "@/assets/bento-grid/insta-logo.svg";

const PURPLE_100 = "hsl(254,88%,90%)";
const PURPLE_500 = "hsl(256,67%,59%)";
const YELLOW_100 = "hsl(31,66%,93%)";
const YELLOW_500 = "hsl(39,100%,71%)";
const WHITE = "hsl(0,0%,100%)";
const BLACK = "hsl(0,0%,7%)";

export default function BentoGrid() {
    return (
        <div
            style={{ backgroundColor: "#f5f5f5" }}
            className={`py-8 px-4 w-full ${dm_sans.className} xl:flex xl:justify-center xl:items-center xl:p-0 xl:h-screen`}
        >
            <div className="xl:w-[1120px] xl:h-[880px] xl:grid xl:grid-cols-4 xl:gap-8">
                <div
                    className="rounded-[10px] flex flex-col items-center p-8 mb-8"
                    style={{ backgroundColor: PURPLE_500 }}
                >
                    <div
                        className="text-5xl -tracking-2 font-medium text-center mb-5 leading-[44px]"
                        style={{ color: WHITE }}
                    >
                        Social Media{" "}
                        <span style={{ color: YELLOW_500 }}>10x</span>{" "}
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
                                    <Image
                                        src={InstaLogo}
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
                    className="rounded-[10px] mb-8"
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
                <div
                    className="rounded-[10px] py-10 flex flex-col gap-6 mb-8"
                    style={{ backgroundColor: PURPLE_100 }}
                >
                    <div
                        className="font-medium text-2xl -tracking-3 leading-[22px] text-center"
                        style={{ color: BLACK }}
                    >
                        Schedule to social media.
                    </div>
                    <div className="px-4">
                        <Image src={SchedPost} alt="scheduling post" />
                    </div>
                    <div
                        className="font-medium px-8 text-center text-lg -tracking-2 leading-[18px]"
                        style={{ color: BLACK }}
                    >
                        Optimize post timings to publish content at the perfect
                        time for your audience.
                    </div>
                </div>
                <div
                    className="rounded-[10px] p-8 px-14 mb-8"
                    style={{ backgroundColor: PURPLE_500 }}
                >
                    <div className="mb-10">
                        <Image
                            src={GrowingFollowers}
                            alt="chart with growing followers"
                        />
                    </div>
                    <div className="font-medium text-3xl -tracking-3 leading-[26px] px-5 text-center">
                        Grow followers with non-stop content.
                    </div>
                </div>
                <div
                    className="rounded-[10px] drop-shadow-md bg-white p-6 flex flex-col gap-4 mb-8"
                    style={{ backgroundColor: WHITE, color: BLACK }}
                >
                    <div className="text-5xl font-medium -tracking-3">
                        &gt;56%
                    </div>
                    <div className="font-medium text-lg -mt-2">
                        faster audience growth
                    </div>
                    <div className="w-[180px]">
                        <Image src={AudienceGrowth} alt="avatars" />
                    </div>
                </div>
                <div
                    className="rounded-[10px] p-6 flex flex-col gap-4 mb-8"
                    style={{ backgroundColor: YELLOW_100, color: BLACK }}
                >
                    <div className="text-3xl font-medium -tracking-[0.060em] leading-[26px] mb-2">
                        Create and schedule content{" "}
                        <span className="italic" style={{ color: PURPLE_500 }}>
                            quicker.
                        </span>
                    </div>
                    <div className="w-[190px]">
                        <Image src={CreatePost} alt="create post image" />
                    </div>
                </div>
                <div
                    className="p-8 rounded-[10px]"
                    style={{ backgroundColor: YELLOW_500, color: BLACK }}
                >
                    <div className="text-3xl font-medium -tracking-[0.060em] leading-[26px] mb-8">
                        Write your content using AI.
                    </div>
                    <div className="w-[210px]">
                        <Image src={AIContent} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
