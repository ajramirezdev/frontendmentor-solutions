import {
    DM_Sans,
    Plus_Jakarta_Sans,
    Inter,
    Barlow,
    Fraunces,
    Poppins,
} from "next/font/google";

export const dm_sans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

export const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700"],
    style: "normal",
});
