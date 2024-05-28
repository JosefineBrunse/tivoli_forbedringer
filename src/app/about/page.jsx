import Image from "next/image";
import styles from "./about.css";
import { programdata } from "../data";
import Loader from "@/app/loading";
import ProgramComponent from "@/components/ProgramComponent";
import TwoCol from "@/components/TwoCol";
import AccordionContainer from "@/components/AccordionContainer";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function Page() {
  return (
    <main className={"aboutside"}>
      <div className="thing">
        <h1 className={`${myFont.className}`}>Om tivoligenlyd</h1>
        <p>
          Tivoli genlyd er stedet der samler alle tivolis musikkoncepter et
          sted, for at gøre det nemmere for dig at finde rundt i så du
          udelukkende kan koncentrere dig om hvad du har lyst til opleve, med
          hvem og hvornår!
        </p>
      </div>
      <TwoCol>
        <div className="imgcontainer">
          <video muted autoPlay loop src="genlyd_identitet.mp4"></video>
        </div>
        <AccordionContainer
          accordions={[
            {
              headline: "hvad er Tivoli Genlyd",
              text: "Tivoli genlyd er stedet der samler alle tivolis musikkoncepter et sted, for at gøre det nemmere for dig at finde rundt i så du udelukkende kan koncentrere dig om hvad du har lyst til opleve, med hvem og hvornår!",
            },
            {
              headline: "Hvad for noget musik kan man høre?",
              text: "Det gode ved Tivoli Genlyd er at man kan høre lidt af det hele, vi har nemlig samlet en masse forskellige genre og steminger under 8 koncepter der sikre at der altid er noget til dig uanset dit humør!",
            },
            {
              headline: "Hvor er Tivoli Genlyd?",
              text: "Tvioli genlyd foregår rundt omkring i Tivolis skønne Have placeret centralt i københavn!",
            },
          ]}
        ></AccordionContainer>
      </TwoCol>
    </main>
  );
}
