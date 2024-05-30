import Image from "next/image";
import styles from "./programside.css";
import { programdata } from "../data";
import Loader from "@/app/loading";
import ProgramComponent from "@/components/ProgramComponent";
import Login from "@/components/Login";
import User from "@/components/User";

export const metadata = {
  title: "Min Tivoli Genlyd",
  description: "På denne side kan du se dit program og gemme det, så du altid kan huske, hvilke arrangementer du kan glæde dig til.",
  type: "website",
  icons: {
    icon: "/icon.svg",
  },
};

export default function Page() {
  return (
    <main className={"loginside"}>
      <User data={programdata} />
    </main>
  );
}
