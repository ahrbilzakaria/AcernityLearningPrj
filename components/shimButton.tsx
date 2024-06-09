import React from "react";

type Props = {
  text: string;
};

export default function ShimButton(props: Props) {
  return (
    <button className="w-fit px-4 py-2  text-xl animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#000103,20%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {props.text}
    </button>
  );
}
