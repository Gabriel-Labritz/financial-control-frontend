"use client";
import CountUp from "react-countup";

export default function CounterAnimated({ amount }: { amount: number }) {
  return (
    <CountUp
      end={amount}
      decimal=","
      decimals={2}
      duration={2.75}
      prefix="R$"
    />
  );
}
