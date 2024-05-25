import Image from "next/image";
import styles from "./Koncept.module.css";
import localFont from "next/font/local";

import ProgramComponent from "@/components/ProgramComponent";
const myFont = localFont({
  src: "../../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

import { konceptdata, programdata } from "@/app/data";
import Carroussel from "@/components/Carroussel";
const koncept = konceptdata;
console.log(konceptdata);
const program = programdata;

export async function generateStaticParams() {
  const paths = konceptdata.map((thing) => {
    if (thing.slug) {
      return { slug: thing.slug.toString() };
    }
  });

  return paths;
}

export default function page({ params }) {
  const { slug } = params;
  const dettekoncept = koncept.find((thing) => thing.slug === slug);
  console.log(dettekoncept);
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1 className={`${myFont.className} ${styles.konceptheadline}`}>
            {dettekoncept.name}
          </h1>
          <p>{dettekoncept.description}</p>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.videocontainer}>
          {dettekoncept.img ? (
            <img
              src={`https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/img/${dettekoncept.slug}/head.webp`}
              alt=""
            />
          ) : (
            <video
              src={`https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/video/${dettekoncept.slug}.webm`}
              muted
              loop
              autoPlay
            ></video>
          )}
        </div>
      </div>

      {dettekoncept.stemning ? (
        <Carroussel
          title={`Få ${dettekoncept.name} følelsen`}
          slug={dettekoncept.slug}
        ></Carroussel>
      ) : null}

      <ProgramComponent
        headline={"Program"}
        data={program}
        filter={dettekoncept.Filter}
      />
    </main>
  );
}
