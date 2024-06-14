import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello, I am Monzil</h2>
      <Heading />
      <button>CLick Me</button>
    </main>
  );
}
