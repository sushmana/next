'use client';
import Image from "next/image";
import { use } from "react";

export default function Home(props: any) {
  console.log("Hello "+ props);
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
