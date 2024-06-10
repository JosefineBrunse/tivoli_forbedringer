import Image from "next/image";
import styles from "../styles/GetCard.module.css";
import TwoCol from "./TwoCol";
import PrimaryBtn from "./PrimaryBtn";
import List from "./List";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function GetCard({ order }) {
  return (
    <TwoCol>
      <div className={styles.imgcontainer} style={{ order: order ? 1 : null }}>
        <img className={styles.kortet} src="kortet.svg" alt="" />
        <div className={styles.overlay}></div>
        <img src="https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/img/fredagsrock/head.webp" alt="" />
      </div>
      <List>
        <h2 className={`${myFont.className} ${styles.subheadline}`}>Ét kort - en hel sommer med oplevelser</h2>
        <p>Med et Tivolikort slipper du for at købe billet, hver gang du har lyst til at give den gas til Tivoli Genlyd! Du kan vælge mellem fire forskellige korttyper: Tivolikort, Tivolikort Sølv, Wild Card og Tivolikort Guld, som alle giver fri adgang til musik i Tivoli – og naturligvis mange flere oplevelser.</p>
        <div className="flex">
          <PrimaryBtn text={"Køb tivolikort"} link={"https://www.tivoli.dk/da/billetter-og-tivolikort/tivolikort"} target={"blank"} fill={true} />
        </div>
      </List>
    </TwoCol>
  );
}
