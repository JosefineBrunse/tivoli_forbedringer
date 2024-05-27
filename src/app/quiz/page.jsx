import Image from "next/image";
import styles from "./quiz.css";
import { programdata } from "../data";
import Loader from "@/components/Loader";
import ProgramComponent from "@/components/ProgramComponent";
import localFont from "next/font/local";
import Quiz from "@/components/Quiz";

const myFont = localFont({
  src: "../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function Page() {
  return (
    <main className="quizside">
      <Quiz data={programdata} />
    </main>
  );
}
