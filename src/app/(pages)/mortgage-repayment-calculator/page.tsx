"use client";

import Image from "next/image";
import { plus_jakarta_sans } from "../../fonts/fonts";
import styles from "./styles.module.css";

import CalcIcon from "@/assets/mortgage-calculator/icon-calculator.svg";
import Empty from "@/assets/mortgage-calculator/illustration-empty.svg";

// const LIME = "hsl(61, 70%, 52%)";
// const RED = "hsl(4, 69%, 50%)";
const SLATE_100 = "hsl(202, 86%, 94%)";
const SLATE_300 = "hsl(203, 41%, 72%)";
const SLATE_500 = "hsl(200, 26%, 54%)";
const SLATE_700 = "hsl(200, 24%, 40%)";
const SLATE_900 = "hsl(202, 55%, 16%)";

export default function MortgageRepaymentCalculator() {
    return (
        <div
            style={{ color: SLATE_900 }}
            className={`${plus_jakarta_sans.className} bg-white`}
        >
            <div className="px-4 py-8">
                <div className="mb-5">
                    <div
                        className="font-bold text-2xl mb-2"
                        style={{ color: SLATE_900 }}
                    >
                        Mortgage Calculator
                    </div>
                    <button
                        className="font-medium border-b leading-4"
                        style={{ color: SLATE_700, borderColor: SLATE_500 }}
                    >
                        Clear All
                    </button>
                </div>

                <form className="flex flex-col gap-6">
                    <div>
                        <label
                            className="font-medium"
                            style={{ color: SLATE_700 }}
                            htmlFor="amount"
                        >
                            Mortgage Amount
                        </label>
                        <div
                            style={{ borderColor: SLATE_500 }}
                            className="flex border rounded-sm mt-2"
                        >
                            <div
                                className="font-bold py-2.5 px-4 text-lg rounded-s-sm"
                                style={{
                                    backgroundColor: SLATE_100,
                                    color: SLATE_700,
                                }}
                            >
                                £
                            </div>
                            <input
                                className="w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold"
                                type="text"
                                pattern="[0-9]+"
                                inputMode="numeric"
                                required
                                onInput={(event) => {
                                    const target =
                                        event.target as HTMLInputElement;
                                    const value = target.value.replace(
                                        /,/g,
                                        ""
                                    );
                                    const formattedValue =
                                        Number(value).toLocaleString();
                                    target.value = formattedValue;
                                }}
                                name="amount"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            className="font-medium"
                            style={{ color: SLATE_700 }}
                            htmlFor="term"
                        >
                            Mortgage Term
                        </label>
                        <div
                            style={{ borderColor: SLATE_500 }}
                            className="flex border rounded-sm mt-2"
                        >
                            <input
                                className="w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold"
                                type="text"
                                pattern="[0-9]+"
                                inputMode="numeric"
                                required
                                name="term"
                            />
                            <div
                                className="font-bold py-2.5 px-4 text-lg rounded-e-sm"
                                style={{
                                    backgroundColor: SLATE_100,
                                    color: SLATE_700,
                                }}
                            >
                                years
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            className="font-medium"
                            style={{ color: SLATE_700 }}
                            htmlFor="interest"
                        >
                            Interest Rate
                        </label>
                        <div
                            style={{ borderColor: SLATE_500 }}
                            className="flex border rounded-sm mt-2"
                        >
                            <input
                                className="w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold"
                                type="text"
                                pattern="[0-9]+"
                                inputMode="numeric"
                                required
                                name="term"
                            />
                            <div
                                className="font-bold py-2.5 px-4 text-lg rounded-e-sm"
                                style={{
                                    backgroundColor: SLATE_100,
                                    color: SLATE_700,
                                }}
                            >
                                %
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            className="font-medium"
                            style={{ color: SLATE_700 }}
                            htmlFor="type"
                        >
                            Mortgage Type
                        </label>
                        <div className=" mt-2">
                            <div
                                className={`${styles.radioInputHover} flex items-center border py-[9px] px-4 rounded-sm gap-4 mb-2 cursor-pointer`}
                            >
                                <input
                                    className={`${styles.radioInputs}`}
                                    type="radio"
                                    id="repayment"
                                    value="Repayment"
                                    name="type"
                                    // checked={}
                                    // onClick={}
                                />
                                <label
                                    className="font-bold text-lg w-full cursor-pointer"
                                    htmlFor="repayment"
                                >
                                    Repayment
                                </label>
                            </div>
                            <div
                                className={`${styles.radioInputHover} flex items-center border py-[9px] px-4 rounded-sm gap-4 mb-2 cursor-pointer`}
                            >
                                <input
                                    className={`${styles.radioInputs}`}
                                    type="radio"
                                    id="interest-only"
                                    value="Interest Only"
                                    name="type"
                                />
                                <label
                                    className="font-bold text-lg w-full cursor-pointer"
                                    htmlFor="interest-only"
                                >
                                    Interest Only
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        className={`${styles.submitButton} font-bold text-lg flex items-center gap-3 justify-center p-3.5 rounded-full -mt-2`}
                    >
                        <Image src={CalcIcon} alt="Calculator Icon" />
                        Calculate Replayments
                    </button>
                </form>
            </div>
            <div
                className="flex flex-col items-center gap-4 py-8"
                style={{ backgroundColor: SLATE_900 }}
            >
                <Image src={Empty} alt="Empty ilustration" />
                <div className="text-white font-bold text-2xl">
                    Results shown here
                </div>
                <div className="text-center" style={{ color: SLATE_300 }}>
                    Complete the from and click &quot;calculate repayments&quot;
                    to see waht your monthly replayments would be.
                </div>
            </div>
        </div>
    );
}
