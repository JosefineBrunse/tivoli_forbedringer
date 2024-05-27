import { programdata } from "@/app/data";
import styles from "./singleview.module.css";
import localFont from "next/font/local";
import TwoCol from "@/components/TwoCol";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import Carroussel from "@/components/Carroussel";
import DescriptionComponent from "@/components/Description";

const myFont = localFont({
  src: "../../../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export async function generateStaticParams() {
  const paths = programdata.map((thing) => {
    if (thing.slug) {
      return { slug: thing.slug.toString() };
    }
  });

  return paths;
}

export default function page({ params }) {
  const { slug } = params;
  const event = programdata.find((thing) => thing.slug === slug);
  console.log(event);

  const months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const date = new Date(event.from);

  const formattedDate = `${date.getDate()}. ${months[date.getMonth()]}`;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <main className={styles.main}>
      <section
        style={{
          backgroundImage: `url(https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/${
            event.img ? event.img : event.slug
          }.webp)`,
        }}
        className={styles.header}
      >
        <div className={styles.info}>
          <div className={styles.smallinfo}>
            <p className={styles.koncept}>{event.koncept}</p>
            <div>
              <p className={styles.time}>
                {formattedDate + " -  " + formattedTime}
              </p>
            </div>
            <p className={styles.place}>{event.place}</p>
          </div>
          <h1 className={`${myFont.className} ${styles.h1}`}>{event.name}</h1>
        </div>
        <div className={styles.headerimg}></div>
      </section>
      <div className={styles.headline}></div>

      <div className={styles.infoshelf}>
        {event.spotifyurl ? (
          <div>
            <SpotifyEmbed src={event.spotifyurl} />
            {event.spotifyurl2 ? (
              <SpotifyEmbed src={event.spotifyurl2} />
            ) : null}
          </div>
        ) : null}
        <div>
          <h3 className={`${myFont.className} slugheadline`}>
            {"Om " + event.name}
          </h3>
          <DescriptionComponent description={event.description} />
        </div>
      </div>
      <div className={styles.headline}></div>
    </main>
  );
}
