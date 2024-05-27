import Image from "next/image";
import styles from "./programside.css";
import { programdata } from "../data";
import Loader from "@/components/Loader";
import ProgramComponent from "@/components/ProgramComponent";
import Login from "@/components/Login";
import User from "@/components/User";

export default function Page() {
  return (
    <main className={"loginside"}>
      {/* <Login /> */}
      <User data={programdata} />
    </main>
  );
}
