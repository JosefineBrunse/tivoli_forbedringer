import Image from "next/image";
import styles from "./programside.css";
import { programdata } from "../data";
import Loader from "@/components/Loader";
import ProgramComponent from "@/components/ProgramComponent";

export default function Program() {
  return (
    <main className={"programside"}>
      <h1>Program</h1>
      <ProgramComponent data={programdata} />
    </main>
  );
}
