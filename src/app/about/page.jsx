import Image from "next/image";
import styles from "./about.css";
import { programdata } from "../data";
import Loader from "@/app/loading";
import ProgramComponent from "@/components/ProgramComponent";
import TwoCol from "@/components/TwoCol";
import AccordionContainer from "@/components/AccordionContainer";
import localFont from "next/font/local";
import SignUp from "@/components/signup";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GetCard from "@/components/GetCard";

const myFont = localFont({
  src: "../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export const metadata = {
  title: "Om Tivoli Genlyd",
  description: "Oplev festivalsstemning til Havefest, bliv inspireret af nye spirende talenter til MINT, dans til nostalgiske hits ved LørdagsHits og nyd fest, farver og fredagsfest til Fredagsrock. Uanset hvad du er til, byder Genlyd på god stemning og formidabel musik under åben himmel!",
  type: "website",
  icons: {
    icon: "/icon.svg",
  },
};

export default function Page() {
  return (
    <main className={"aboutside"}>
      <div className="thing">
        <h1 className={`${myFont.className}`}>Om tivoli Genlyd</h1>
        <p>Velkommen til Tivoli Genlyd – dit nye musikalske fristed i hjertet af København! Tivoli Genlyd er skabt for at bringe mennesker sammen gennem en mangfoldig palet af musikoplevelser. Vi har samlet 8 unikke musikkoncepter, der hver især byder på noget særligt, så der findes noget for enhver smag. Det hele handler om gode musikoplevelser i fællesskab og uforglemmelige minder, der giver Genlyd.</p>
      </div>
      <TwoCol>
        <div className="imgcontainer">
          <video controls={false} muted autoPlay loop src="stemning.webm"></video>
        </div>
        <AccordionContainer
          accordions={[
            {
              headline: "Hvad er Tivoli Genlyd",
              text: "Tivoli Genlyd er stedet der samler alle tivolis musikkoncepter et sted, for at gøre det nemmere for dig at finde rundt i så du udelukkende kan koncentrere dig om hvad du har lyst til opleve, med hvem og hvornår!",
            },
            {
              headline: "Hvad for noget musik kan man høre?",
              text: "Det gode ved Tivoli Genlyd er at man kan høre lidt af det hele, vi har nemlig samlet en masse forskellige genre og steminger under 8 koncepter, der sikre at der altid er noget til dig uanset dit humør!",
            },
            {
              headline: "Hvor er Tivoli Genlyd?",
              text: "Tivoli Genlyd foregår rundt omkring i Tivolis skønne Have, der er placeret centralt i København. Det fremgår af den enkelte begivenhed i programmet, hvilken scene eventet foregår på.",
            },
            {
              headline: "Skal jeg bruge en særlig billet udover min entré-billet?",
              text: "På fredage med Fredagsrock kræves der et Tivolikort eller en særkilt Fredagsrock-entrébillet ved indgang til Haven efter kl.18.00.! Vær obs. på, at der kan være krav om pladsreservation til udvalgte koncerter for alle gæster.",
            },
          ]}
        ></AccordionContainer>
      </TwoCol>
      <div className="breaker"></div>
      <GetCard order={true} />
      <div className="breaker"></div>
      <SignUp />
    </main>
  );
}
