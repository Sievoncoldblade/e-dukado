import Link from "next/link";
import React from "react";

const SignInButton = ({ text, bgColor, href }: { text: string; bgColor?: string; href: string }) => {
  return (
    <Link href={href} className={`p-2 px-4 ${bgColor ? bgColor : "bg-green-500"} rounded-lg text-white`}>
      {text}
    </Link>
  );
};

export default SignInButton;
