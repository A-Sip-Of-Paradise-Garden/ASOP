import Image from "next/image";
import WomanPlanting from "../public/images/asop.webp";
import ValueCard, { valueCardInfo } from "@/components/main-page/value-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-4 px-8">
      <h1 className="text-3xl">
        Welcome to <span className="text-emerald-400">ASOP</span> community
      </h1>
      <h2 className="text-xl">A bartenders' community garden!</h2>
      <Image className="rounded-xl" alt="Garden picture" src={WomanPlanting} width={1000} />
      <div className="flex flex-col border-2 border-emerald-400 rounded-xl p-4">
        <span className="text-xl font-semibold underline decoration-emerald-400 underline-offset-4 decoration-2">
          About Us:
        </span>
        <p className="text-xl">
          A Sip of Paradise is a non profit bartenders’ community
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {valueCardInfo.map(card => <ValueCard key={card.title} title={card.title}>{card.content}</ValueCard>)}
      </div>
    </div>
  );
}
