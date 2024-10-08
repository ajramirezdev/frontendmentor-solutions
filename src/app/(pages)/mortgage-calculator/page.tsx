"use client";

import Image from "next/image";
import { plus_jakarta_sans } from "../../fonts/fonts";
import styles from "./styles.module.css";

import CalcIcon from "@/assets/mortgage-calculator/icon-calculator.svg";
import Empty from "@/assets/mortgage-calculator/illustration-empty.svg";
import { FormEvent, useState } from "react";

const LIME = "hsl(61, 70%, 52%)";
const RED = "hsl(4, 69%, 50%)";
const SLATE_100 = "hsl(202, 86%, 94%)";
const SLATE_300 = "hsl(203, 41%, 72%)";
const SLATE_500 = "hsl(200, 26%, 54%)";
const SLATE_700 = "hsl(200, 24%, 40%)";
const SLATE_900 = "hsl(202, 55%, 16%)";

export default function MortgageRepaymentCalculator() {
    const [payments, setPayments] = useState({
        monthly: 0,
        total: 0,
    });

    const [formData, setFormData] = useState({
        amount: "",
        term: "",
        rate: "",
        type: "",
    });

    const [isFocused, setIsFocused] = useState({
        amount: false,
        term: false,
        rate: false,
        type: "",
    });

    const [isFieldRequired, setIsFieldRequired] = useState({
        amount: false,
        term: false,
        rate: false,
        type: false,
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (formData.amount.trim() === "") {
            setIsFieldRequired({ ...isFieldRequired, amount: true });
            return;
        }

        if (formData.term.trim() === "") {
            setIsFieldRequired({ ...isFieldRequired, term: true });
            return;
        }

        if (formData.rate.trim() === "") {
            setIsFieldRequired({ ...isFieldRequired, rate: true });
            return;
        }

        if (formData.type.trim() === "") {
            setIsFieldRequired({ ...isFieldRequired, type: true });
            return;
        }

        const monthlyInterestRate = Number(formData.rate) / 100 / 12;
        const numberOfPayments = Number(formData.term) * 12;

        let monthlyPayment = 0;

        if (formData.type === "repayment") {
            monthlyPayment =
                (Number(formData.amount.replace(/,/g, "")) *
                    (monthlyInterestRate *
                        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        }

        if (formData.type === "interest") {
            monthlyPayment =
                Number(formData.amount.replace(/,/g, "")) * monthlyInterestRate;
        }

        setPayments({
            monthly: monthlyPayment,
            total: monthlyPayment * numberOfPayments,
        });
        console.log(payments);
    }

    return (
        <div
            style={{ color: SLATE_900, backgroundColor: SLATE_100 }}
            className={`${plus_jakarta_sans.className} lg:flex lg:h-screen lg:w-screen lg:items-center lg:justify-center`}
        >
            <div className="lg:flex lg:max-w-[1008px] lg:h-[606px] bg-white lg:rounded-3xl lg:drop-shadow-2xl">
                <div className="px-4 py-8 bg-white lg:w-1/2 lg:p-10 lg:rounded-3xl">
                    <div className="mb-5 lg:mb-[42px] lg:flex lg:items-center justify-between">
                        <div
                            className="font-bold text-2xl mb-2 lg:m-0"
                            style={{ color: SLATE_900 }}
                        >
                            Mortgage Calculator
                        </div>
                        <button
                            className={`${styles.clearAllButton} font-medium border-b leading-4 lg:h-[17px]`}
                            onClick={() => {
                                setFormData({
                                    amount: "",
                                    term: "",
                                    rate: "",
                                    type: "",
                                });
                                setIsFocused({
                                    amount: false,
                                    term: false,
                                    rate: false,
                                    type: "",
                                });

                                setPayments({
                                    monthly: 0,
                                    total: 0,
                                });
                            }}
                        >
                            Clear All
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="flex flex-col gap-6 "
                    >
                        <div className="relative">
                            <label
                                className="font-medium"
                                style={{ color: SLATE_700 }}
                                htmlFor="amount"
                            >
                                Mortgage Amount
                            </label>
                            <div
                                style={{
                                    borderColor: isFocused.amount
                                        ? LIME
                                        : isFieldRequired.amount
                                        ? RED
                                        : SLATE_500,
                                }}
                                className={"flex border rounded-sm mt-2"}
                            >
                                <div
                                    className={`font-bold py-2.5 px-4 text-lg rounded-s-sm`}
                                    style={{
                                        backgroundColor: isFocused.amount
                                            ? LIME
                                            : isFieldRequired.amount
                                            ? RED
                                            : SLATE_100,
                                        color: isFieldRequired.amount
                                            ? "white"
                                            : SLATE_700,
                                    }}
                                >
                                    £
                                </div>
                                <input
                                    className={`${styles.input} w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold`}
                                    type="text"
                                    pattern="([0-9]{1,3})(,[0-9]{3})*"
                                    inputMode="numeric"
                                    value={formData.amount}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            amount: e.target.value,
                                        })
                                    }
                                    onInput={(event) => {
                                        const target =
                                            event.target as HTMLInputElement;
                                        const value = target.value.replace(
                                            /,/g,
                                            ""
                                        );

                                        if (!isNaN(Number(value))) {
                                            const formattedValue =
                                                Number(value).toLocaleString();
                                            target.value = formattedValue;
                                        }
                                    }}
                                    id="amount"
                                    name="amount"
                                    onFocus={() => {
                                        setIsFocused({
                                            ...isFocused,
                                            amount: true,
                                        });
                                        setIsFieldRequired({
                                            ...isFieldRequired,
                                            amount: false,
                                        });
                                    }}
                                    onBlur={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            amount: false,
                                        })
                                    }
                                />
                            </div>
                            {isFieldRequired.amount && (
                                <div
                                    style={{ color: RED }}
                                    className="absolute text-sm font-medium"
                                >
                                    This field is required
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="relative">
                                <label
                                    className="font-medium"
                                    style={{ color: SLATE_700 }}
                                    htmlFor="term"
                                >
                                    Mortgage Term
                                </label>
                                <div
                                    style={{
                                        borderColor: isFocused.term
                                            ? LIME
                                            : isFieldRequired.term
                                            ? RED
                                            : SLATE_500,
                                    }}
                                    className="flex border rounded-sm mt-2"
                                >
                                    <input
                                        className="w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold"
                                        type="text"
                                        pattern="[0-9]+"
                                        inputMode="numeric"
                                        name="term"
                                        value={formData.term}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                term: e.target.value,
                                            })
                                        }
                                        onFocus={() => {
                                            setIsFocused({
                                                ...isFocused,
                                                term: true,
                                            });
                                            setIsFieldRequired({
                                                ...isFieldRequired,
                                                term: false,
                                            });
                                        }}
                                        onBlur={() =>
                                            setIsFocused({
                                                ...isFocused,
                                                term: false,
                                            })
                                        }
                                        id="term"
                                    />
                                    <div
                                        className="font-bold py-2.5 px-4 text-lg rounded-e-sm"
                                        style={{
                                            backgroundColor: isFocused.term
                                                ? LIME
                                                : isFieldRequired.term
                                                ? RED
                                                : SLATE_100,
                                            color: isFieldRequired.term
                                                ? "white"
                                                : SLATE_700,
                                        }}
                                    >
                                        years
                                    </div>
                                </div>
                                {isFieldRequired.term && (
                                    <div
                                        style={{ color: RED }}
                                        className="absolute text-sm font-medium"
                                    >
                                        This field is required
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <label
                                    className="font-medium"
                                    style={{ color: SLATE_700 }}
                                    htmlFor="interest"
                                >
                                    Interest Rate
                                </label>
                                <div
                                    style={{
                                        borderColor: isFocused.rate
                                            ? LIME
                                            : isFieldRequired.rate
                                            ? RED
                                            : SLATE_500,
                                    }}
                                    className="flex border rounded-sm mt-2"
                                >
                                    <input
                                        className="w-full bg-white rounded-sm outline-none py-2.5 px-4 font-bold"
                                        type="text"
                                        pattern="[0-9]+(\.[0-9]+)?"
                                        inputMode="numeric"
                                        name="rate"
                                        value={formData.rate}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                rate: e.target.value,
                                            })
                                        }
                                        onFocus={() => {
                                            setIsFocused({
                                                ...isFocused,
                                                rate: true,
                                            });
                                            setIsFieldRequired({
                                                ...isFieldRequired,
                                                rate: false,
                                            });
                                        }}
                                        onBlur={() =>
                                            setIsFocused({
                                                ...isFocused,
                                                rate: false,
                                            })
                                        }
                                        id="interest"
                                    />
                                    <div
                                        className="font-bold py-2.5 px-4 text-lg rounded-e-sm"
                                        style={{
                                            backgroundColor: isFocused.rate
                                                ? LIME
                                                : isFieldRequired.rate
                                                ? RED
                                                : SLATE_100,
                                            color: isFieldRequired.rate
                                                ? "white"
                                                : SLATE_700,
                                        }}
                                    >
                                        %
                                    </div>
                                </div>
                                {isFieldRequired.rate && (
                                    <div
                                        style={{ color: RED }}
                                        className="absolute text-sm font-medium"
                                    >
                                        This field is required
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <label
                                className="font-medium"
                                style={{ color: SLATE_700 }}
                                htmlFor="type"
                            >
                                Mortgage Type
                            </label>
                            <div className=" mt-2">
                                <div
                                    className={`flex items-center border py-[9px] px-4 rounded-sm gap-4 mb-2 cursor-pointer border-[#6b94a8] hover:border-[#d7da2f] ${
                                        isFocused.type === "repayment" &&
                                        "bg-[#fafae0] border-[#d7da2f]"
                                    }`}
                                >
                                    <input
                                        className={`${styles.radioInputs}`}
                                        type="radio"
                                        id="type"
                                        value="Repayment"
                                        name="type"
                                        checked={isFocused.type === "repayment"}
                                        onChange={() => {
                                            setIsFocused({
                                                ...isFocused,
                                                type: "repayment",
                                            });

                                            setFormData({
                                                ...formData,
                                                type: "repayment",
                                            });

                                            setIsFieldRequired({
                                                ...isFieldRequired,
                                                type: false,
                                            });
                                        }}
                                    />
                                    <label
                                        className="font-bold text-lg w-full cursor-pointer"
                                        htmlFor="repayment"
                                    >
                                        Repayment
                                    </label>
                                </div>
                                <div
                                    className={`flex items-center border py-[9px] px-4 rounded-sm gap-4 mb-2 cursor-pointer border-[#6b94a8] hover:border-[#d7da2f] ${
                                        isFocused.type === "interest" &&
                                        "bg-[#fafae0] border-[#d7da2f]"
                                    }`}
                                >
                                    <input
                                        className={`${styles.radioInputs}`}
                                        type="radio"
                                        id="type"
                                        value="Interest Only"
                                        name="type"
                                        checked={isFocused.type === "interest"}
                                        onChange={() => {
                                            setIsFocused({
                                                ...isFocused,
                                                type: "interest",
                                            });

                                            setFormData({
                                                ...formData,
                                                type: "interest",
                                            });

                                            setIsFieldRequired({
                                                ...isFieldRequired,
                                                type: false,
                                            });
                                        }}
                                    />
                                    <label
                                        className="font-bold text-lg w-full cursor-pointer"
                                        htmlFor="interest-only"
                                    >
                                        Interest Only
                                    </label>
                                </div>
                            </div>
                            {isFieldRequired.type && (
                                <div
                                    style={{ color: RED }}
                                    className="absolute text-sm font-medium -bottom-3"
                                >
                                    This field is required
                                </div>
                            )}
                        </div>
                        <button
                            className={`${styles.submitButton} font-bold text-lg flex items-center gap-3 justify-center p-3.5 rounded-full -mt-2 lg:max-w-[314px] lg:mt-3 hover:bg-[#ebed97]`}
                        >
                            <Image src={CalcIcon} alt="Calculator Icon" />
                            Calculate Repayments
                        </button>
                    </form>
                </div>
                <div
                    className="lg:w-1/2 lg:rounded-e-3xl lg:rounded-bl-[80px]"
                    style={{ backgroundColor: SLATE_900 }}
                >
                    {payments.monthly === 0 ? (
                        <div className="flex flex-col items-center gap-4 py-8 px-10 lg:justify-center lg:px-8 lg:h-full">
                            <Image src={Empty} alt="Empty ilustration" />
                            <div className="text-white font-bold text-2xl">
                                Results shown here
                            </div>
                            <div
                                className="text-center"
                                style={{ color: SLATE_300 }}
                            >
                                Complete the from and click &quot;calculate
                                repayments&quot; to see waht your monthly
                                repayments would be.
                            </div>
                        </div>
                    ) : (
                        <div className="px-4 py-8 flex flex-col gap-4 lg:p-10">
                            <div className="text-white font-bold text-2xl">
                                Your results
                            </div>
                            <div
                                className="lg:mb-6"
                                style={{ color: SLATE_300 }}
                            >
                                Your results are shown below based on the
                                information you provided. To adjust the results,
                                edit the form and click &quot;calculate
                                repayments&quot; again.
                            </div>
                            <div
                                className="rounded-md pt-1"
                                style={{ backgroundColor: LIME }}
                            >
                                <div className="bg-[#0e2431] rounded-sm p-4 flex flex-col lg:p-8">
                                    <div style={{ color: SLATE_300 }}>
                                        Your monthly repayments
                                    </div>
                                    <div
                                        className="font-bold text-[42px] mb-4 lg:text-[55px]"
                                        style={{ color: LIME }}
                                    >
                                        £
                                        {Number(
                                            payments.monthly.toFixed(2)
                                        ).toLocaleString()}
                                    </div>
                                    <div
                                        style={{ borderColor: "#304653" }}
                                        className="border-b mb-4 lg:mb-6"
                                    ></div>
                                    <div
                                        className="mb-3"
                                        style={{ color: SLATE_300 }}
                                    >
                                        Total you&apos;ll repay over the term
                                    </div>
                                    <div className="text-white text-2xl font-bold">
                                        £
                                        {Number(
                                            payments.total.toFixed(2)
                                        ).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
