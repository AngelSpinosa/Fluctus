import { Dela_Gothic_One } from "next/font/google";
import Player from "./Components/player";

const Dela = Dela_Gothic_One({
  weight: '400',
  subsets: ["latin"] });

export default function Home() {
  return<main className={Dela.className}>
    <div>
      <Player />
    </div>
  </main>
}