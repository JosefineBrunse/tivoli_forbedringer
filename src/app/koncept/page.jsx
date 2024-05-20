import Image from "next/image";
import styles from "./Koncept.module.css";
import localFont from "next/font/local";
import ProgramComponent from "@/components/ProgramComponent";
const myFont = localFont({
  src: "../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
import { programdata } from "../data";
const data = programdata;
export default function Koncept() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1 className={`${myFont.className} ${styles.konceptheadline}`}>
            Havefest
          </h1>
          <p>
            Vi fylder endnu engang Haven med fyraftensstemning, sprøde dj's,
            quiz og comedy hver sommerfredag fra kl. 16.00. Glæd dig til kolde
            drikke i godt selskab, og slå dig løs med vennerne i den lune
            sommeraften. Så er du helt varmet op, når ugens Fredagsrock-kunstner
            går på scenen!
          </p>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.videocontainer}>
          <video src="havefest.mp4" muted loop autoPlay></video>
        </div>
      </div>

      <ProgramComponent headline={"Program"} data={data} />
    </main>
  );
}
