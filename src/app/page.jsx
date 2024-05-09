import Image from "next/image";
import styles from "./page.module.css";
import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import HeaderSlider from "@/components/HeaderSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Coming up</h1>
      <PrimaryBtn text={"Se hele programmet"} />
      <SecondaryBtn text={"Se hele programmet"} />
      <HeaderSlider />
    </main>
  );
}
