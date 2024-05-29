import Image from "next/image";
import styles from "./programside.css";
import { programdata } from "../data";
import Loader from "@/app/loading";
import ProgramComponent from "@/components/ProgramComponent";
import localFont from "next/font/local";
const myFont = localFont({
  src: "/../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export const metadata = {
  title: "Program - Tivoli Genlyd",
  description:
    "Vi har massere af musik på programmet hele sommeren! Gå på udforskning i programmet, og planlæg de næste solrige måneder",
  type: "website",
  icons: {
    icon: "/icon.svg",
  },
};

export default function Program() {
  return (
    <main className={"programside"}>
      <h1 className={`${myFont.className}`}>Program</h1>
      <ProgramComponent data={programdata} />
    </main>
  );
}
