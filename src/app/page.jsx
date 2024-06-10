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
import GetCard from "@/components/GetCard";
import SignUp from "@/components/signup";
import Quizcard from "@/components/Quizcard";
import H2Reaveal from "@/components/H2Reveal";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export const metadata = {
  title: "Tivoli Genlyd",
  description:
    "Tivoli genlyd er stedet der samler alle tivolis musikkoncepter et sted, for at gøre det nemmere for dig at finde rundt i så du udelukkende kan koncentrere dig om hvad du har lyst til opleve, med hvem og hvornår!",
  type: "website",
  icons: {
    icon: "/icon.svg",
  },
};

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
          <video
            controls={false}
            muted
            autoPlay
            loop
            src="genlyd_identitet.mp4"
          ></video>
        </div>
        {/* <AccordionContainer /> */}
        <List>


          <h2 className={`${myFont.className}`}>Musik der giver Genlyd!</h2>
          <p>
            Oplev festivalsstemning til Havefest, bliv inspireret af nye
            spirende talenter til MINT, dans til nostalgiske hits ved
            LørdagsHits og nyd fest, farver og fredagsfest til Fredagsrock.
            Uanset hvad du er til, byder Tivoli Genlyd på god stemning og
            formidabel musik under åben himmel.
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
          "Det gode ved Tivoli Genlyd er, at du kan høre lidt af det hele eller meget mere af det samme. Vi har nemlig samlet en masse forskellige genrer og stemninger under otte koncepter, der sikrer, at der altid er noget for dig, uanset dit humør!"
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

      <GetCard order={true} />

      <div className={styles.spacer}></div>
      <Quizcard />

      <div className={styles.spacer}></div>
      <ProgramComponent headline={"Program"} data={data} />
      <SignUp />
    </main>
  );
}
