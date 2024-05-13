import styles from "../styles/program.css";
import ArtistCard from "./ArtistCard";

import localFont from "next/font/local";
import FilterBtn from "./FilterBtn";
import SecondaryBtn from "./SecondaryBtn";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function ProgramComponent({ headline, data }) {
  console.log(data);
  return (
    <section className="program">
      <h2 className={`${myFont.className}`}>{headline}</h2>
      <div className="flexshelf">
        <div className="filtershelf">
          <FilterBtn
            name={"Koncept"}
            id={"koncept"}
            options={[
              { value: "Fredagsrock" },
              { value: "Mint" },
              { value: "Lørdagsdans" },
            ]}
          />
          <FilterBtn
            name={"Genre"}
            id={"Genre"}
            options={[
              { value: "Pop" },
              { value: "Rock" },
              { value: "Klassisk" },
              { value: "Hiphop" },
              { value: "Dance" },
            ]}
          />
          <FilterBtn
            name={"Stemning"}
            id={"Stemning"}
            options={[
              { value: "Glade dage" },
              { value: "Rolige rytmer" },
              { value: "Fællessang" },
              { value: "Høj energi" },
              { value: "Dansefest" },
            ]}
          />
        </div>
        <SecondaryBtn text={"Se dit program"} />
      </div>
      <div className="artistlist">
        {data
          ? data.map((artist) => (
              <ArtistCard
                tag={artist.koncept}
                name={artist.name}
                shortDescription={artist.shortDescription}
                time={artist.time}
                place={artist.place}
                img={"header.png"}
                slug={artist.slug}
              />
            ))
          : null}
      </div>
    </section>
  );
}
