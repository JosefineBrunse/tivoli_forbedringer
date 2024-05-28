import Image from "next/image";
import styles from "./page.module.css";
import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import HeaderSlider from "@/components/HeaderSlider";

import SpotifyEmbed from "@/components/SpotifyEmbed";
import ArtistCard from "@/components/ArtistCard";
import TwoCol from "@/components/TwoCol";
import Accordion from "@/components/Accordion";
import AccordionContainer from "@/components/AccordionContainer";

import ProgramComponent from "@/components/ProgramComponent";
import Navbar from "@/components/Navbar";
import List from "@/components/List";

import localFont from "next/font/local";
import ProductShelf from "@/components/ProductShelf";
import KonceptCard from "@/components/KonceptCard";
import { konceptdata, programdata } from "@/app/data";
import DynamicProductShelf from "@/components/DynamicProductShelf";
import DynamicKonceptCard from "@/components/DynamicKonceptCard";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function Home() {
  const data = programdata;
  const koncepter = konceptdata;

  return (
    <main className={styles.main}>
      {/* <h1>Coming up</h1>
      <PrimaryBtn text={"Se hele programmet"} />
    <SecondaryBtn text={"Læs mere"} /> */}
      <HeaderSlider data={data} />

      <TwoCol>
        <div className="imgcontainer">
          <video muted autoPlay loop src="genlyd_identitet.mp4"></video>
        </div>
        {/* <AccordionContainer /> */}
        <List>
          <h2 className={`${myFont.className}`}>Hvad er Tivoli genllyd?</h2>
          <p>
            Tivoli genlyd er stedet der samler alle tivolis musikkoncepter et
            sted, for at gøre det nemmere for dig at finde rundt i så du
            udelukkende kan koncentrere dig om hvad du har lyst til opleve, med
            hvem og hvornår!
          </p>
          <div className="flex">
            <PrimaryBtn text={"læs mere"} link={"/about"} />
            <PrimaryBtn text={"Se programmet"} link={"/program"} fill={true} />
          </div>
        </List>
      </TwoCol>

      <ProductShelf
        headline={"Vi har helt sikkert noget til dig!"}
        text={
          "Det gode ved Tivoli Genlyd er at man kan høre lidt af det hele, vi har nemlig samlet en masse forskellige genre og steminger under 8 koncepter der sikre at der altid er noget til dig uanset dit humør!"
        }
      >
        {konceptdata
          ? konceptdata.map((koncept) => (
              <KonceptCard
                headline={koncept.name}
                text={koncept.shortDescription}
                imgsrc={`https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/img/${koncept.slug}/head.webp`}
                btnlink={"koncept/" + koncept.slug}
              />
            ))
          : null}
      </ProductShelf>

      <TwoCol>
        <div className={styles.imgcontainer}>
          <img className={styles.kortet} src="kortet.svg" alt="" />
          <div className={styles.overlay}></div>
          <img
            src="https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/img/fredagsrock/head.webp"
            alt=""
          />
        </div>
        <List>
          <h2 className={`${myFont.className} ${styles.subheadline}`}>
            1 kort - en hel sommer med oplevelser
          </h2>
          <p>
            Med et Tivolikort slipper du for at købe billet, hver gang du har
            lyst til at give den gas til MINT! Du kan vælge mellem fire
            forskellige korttyper: Tivolikort, Tivolikort Sølv, Wild Card og
            Tivolikort Guld, som alle giver fri adgang til Tivoli – og
            naturligvis mange flere oplevelser.
          </p>
          <div className="flex">
            <PrimaryBtn
              text={"Køb tivolikort"}
              link={
                "https://www.tivoli.dk/da/billetter-og-tivolikort/tivolikort"
              }
              target={"blank"}
              fill={true}
            />
          </div>
        </List>
      </TwoCol>
      <div className={styles.spacer}></div>
      <ProgramComponent headline={"Program"} data={data} />
    </main>
  );
}
