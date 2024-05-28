import Image from "next/image";
import styles from "./programside.css";
import { programdata } from "../data";
import Loader from "@/components/Loader";
import ProgramComponent from "@/components/ProgramComponent";
import localFont from "next/font/local";
const myFont = localFont({
  src: "/../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function Program() {
  return (
    <main className={"programside"}>
      <h1 style={myFont.className}>Program</h1>
      <ProgramComponent data={programdata} />
    </main>
  );
}
