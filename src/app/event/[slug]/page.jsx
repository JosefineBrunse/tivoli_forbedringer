import { loginInfo } from "@/app/data";
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
  const paths = loginInfo.map((thing) => {
    if (thing.slug) {
      return { slug: thing.slug.toString() };
    }
  });

  return paths;
}

export default function page({ params }) {
  const { slug } = params;
  const event = loginInfo.find((thing) => thing.slug === slug);
  console.log(event);

  return (
    <main className={styles.main}>
      <section
        style={{
          backgroundImage: `url(./header3.jpeg)`,
        }}
        className={styles.header}
      >
        <div className={styles.info}>
          <div className={styles.smallinfo}>
            <p className={styles.koncept}></p>
            <div>
              <p className={styles.date}>10. maj</p>
              <p className={styles.time}>{event.from}</p>
            </div>
            <p className={styles.place}>{event.place}</p>
          </div>
          <h2 className={`${myFont.className}`}>{event.name}</h2>
        </div>
        <div className={styles.headerimg}></div>
      </section>
      <h3 className={`${myFont.className}`}>Om kunstneren</h3>
      <TwoCol>
        {event.spotifyurl ? (
          <div>
            <SpotifyEmbed src={event.spotifyurl} />
            {event.spotifyurl2 ? <SpotifyEmbed src={event.spotifyurl} /> : null}
          </div>
        ) : null}
        <DescriptionComponent description={event.description} />
      </TwoCol>

      <Carroussel title={"Om Havefest"}>
        <img src="imghigh.png" alt="" />
        <img src="imglong.png" alt="" />
        <img src="imghigh.png" alt="" />
        <img src="imghigh.png" alt="" />
        <img src="imglong.png" alt="" />
      </Carroussel>
    </main>
  );
}
