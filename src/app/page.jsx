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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            eveniet quibusdam fugiat quo aperiam obcaecati id, minima deleniti
            dolore delectus aliquam, minus sapiente alias? Eveniet mollitia
            ratione eum ipsa ut.
          </p>
          <PrimaryBtn text={"læs mere"} />
        </List>
      </TwoCol>
      <ProductShelf
        headline={"Vi har helt sikkert noget til dig!"}
        text={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga blanditiis voluptas amet autem accusantium est, nisi possimus voluptatem eos repudiandae ex illo sed ullam nulla! Asperiores labore ex in repudiandae!"
        }
      >
        {konceptdata
          ? konceptdata.map((koncept) => (
              <KonceptCard
                headline={koncept.name}
                text={koncept.shortDescription}
                imgsrc={"havefestimg.png"}
                btnlink={"koncept/" + koncept.slug}
              />
            ))
          : null}
      </ProductShelf>

      <ProgramComponent headline={"Program"} data={data} />
    </main>
  );
}
