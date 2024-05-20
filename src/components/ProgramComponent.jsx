"use client";
import { format } from "date-fns";
import { da } from "date-fns/locale";
import styles from "../styles/program.css";
import ArtistCard from "./ArtistCard";

import localFont from "next/font/local";
import FilterBtn from "./FilterBtn";
import SecondaryBtn from "./SecondaryBtn";
import { useState, useEffect } from "react";
import ArtistPosterCard from "./ArtistPosterCard";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function ProgramComponent({ headline, data, filter }) {
  const [filteredData, setFilteredData] = useState([]);
  const [konceptFilter, setKonceptFilter] = useState(filter || null);
  const [GenreFilter, setGenreFilter] = useState(null);
  const [stemningFilter, setStemningFilter] = useState(null);
  const [monthFilter, setMonthFilter] = useState(null);
  const [posterView, setPosterView] = useState(false);
  const [monthOptions, setMonthOptions] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const validData = data.filter(
      (event) => new Date(event.from) > currentDate
    );

    const uniqueMonths = [
      ...new Set(
        validData.map((event) =>
          format(new Date(event.from), "MMMM", { locale: da })
        )
      ),
    ];

    setMonthOptions(uniqueMonths.map((month) => ({ value: month })));

    setFilteredData(validData);
  }, [data]);

  useEffect(() => {
    let filteredDataCopy = [...data].filter(
      (event) => new Date(event.from) > new Date()
    );

    if (konceptFilter) {
      const capitalizedKonceptFilter =
        konceptFilter.charAt(0).toUpperCase() +
        konceptFilter.slice(1).toLowerCase();
      filteredDataCopy = filteredDataCopy.filter((item) =>
        item.koncept.includes(capitalizedKonceptFilter)
      );
    }
    if (GenreFilter) {
      filteredDataCopy = filteredDataCopy.filter((item) =>
        item.genre.includes(GenreFilter)
      );
    }
    if (stemningFilter) {
      filteredDataCopy = filteredDataCopy.filter((item) =>
        item.Stemning.includes(stemningFilter)
      );
    }
    if (monthFilter) {
      filteredDataCopy = filteredDataCopy.filter(
        (item) =>
          format(new Date(item.from), "MMMM", { locale: da }) === monthFilter
      );
    }

    setFilteredData(filteredDataCopy);
  }, [data, konceptFilter, GenreFilter, stemningFilter, monthFilter]);

  function changeKonceptState(name, value) {
    if (name === "Koncept") {
      setKonceptFilter(value !== "all" ? value : null);
    }
    if (name === "Genre") {
      setGenreFilter(value !== "all" ? value : null);
    }
    if (name === "Stemning") {
      setStemningFilter(value !== "all" ? value : null);
    }
    if (name === "Month") {
      setMonthFilter(value !== "all" ? value : null);
    }
  }

  const groupedByMonth = filteredData.reduce((acc, item) => {
    const monthYear = new Date(item.from).toLocaleString("da-DK", {
      month: "long",
      year: "numeric",
    });
    acc[monthYear] = [...(acc[monthYear] || []), item];
    return acc;
  }, {});

  return (
    <section className="program">
      <h2 className={`${myFont.className}`}>{headline}</h2>
      <div className="flexshelf">
        <div className="filtershelf">
          <FilterBtn
            changestate={changeKonceptState}
            value={konceptFilter}
            name={"Koncept"}
            id={"koncept"}
            options={[
              { value: "fredagsrock" },
              { value: "mint" },
              { value: "lørdagsdans" },
              { value: "onsdagsjazz" },
              { value: "sommerklassik" },
              { value: "lørdagshits" },
              { value: "syngmedtivoli" },
              { value: "havefest" },
            ]}
          />
          <FilterBtn
            changestate={changeKonceptState}
            name={"Genre"}
            id={"Genre"}
            value={GenreFilter}
            options={[
              { value: "Pop" },
              { value: "Rock" },
              { value: "Klassisk" },
              { value: "Hiphop" },
              { value: "Dance" },
            ]}
          />
          <FilterBtn
            changestate={changeKonceptState}
            name={"Stemning"}
            id={"Stemning"}
            value={stemningFilter}
            options={[
              { value: "Glade dage" },
              { value: "Rolige rytmer" },
              { value: "Fællessang" },
              { value: "Høj energi" },
              { value: "Dansefest" },
            ]}
          />

          <FilterBtn
            changestate={changeKonceptState}
            name={"Month"}
            id={"Month"}
            options={monthOptions}
          />
        </div>

        <div className="flex">
          <button
            onClick={() => {
              setPosterView(false);
            }}
            className={"programview first" + (!posterView ? " active" : "")}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>

          <button
            onClick={() => {
              setPosterView(true);
            }}
            className={"programview second" + (posterView ? " active" : "")}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="3.5" x2="14" y2="3.5" stroke="black" />
              <line y1="14.5" x2="14" y2="14.5" stroke="black" />
              <line y1="24.5" x2="14" y2="24.5" stroke="black" />
              <line y1="7.5" x2="11" y2="7.5" stroke="black" />
              <line y1="17.5" x2="11" y2="17.5" stroke="black" />
              <line y1="28.5" x2="11" y2="28.5" stroke="black" />
              <line y1="0.5" x2="13" y2="0.5" stroke="black" />
              <line y1="10.5" x2="13" y2="10.5" stroke="black" />
              <line y1="21.5" x2="13" y2="21.5" stroke="black" />
              <line x1="13" y1="7.5" x2="23" y2="7.5" stroke="black" />
              <line x1="13" y1="17.5" x2="23" y2="17.5" stroke="black" />
              <line x1="13" y1="28.5" x2="23" y2="28.5" stroke="black" />
              <line x1="21" y1="0.5" x2="32" y2="0.5" stroke="black" />
              <line x1="21" y1="10.5" x2="32" y2="10.5" stroke="black" />
              <line x1="21" y1="21.5" x2="32" y2="21.5" stroke="black" />
              <line x1="25" y1="7.5" x2="32" y2="7.5" stroke="black" />
              <line x1="25" y1="17.5" x2="32" y2="17.5" stroke="black" />
              <line x1="25" y1="28.5" x2="32" y2="28.5" stroke="black" />
              <line x1="16" y1="3.5" x2="23" y2="3.5" stroke="black" />
              <line x1="16" y1="14.5" x2="23" y2="14.5" stroke="black" />
              <line x1="16" y1="24.5" x2="23" y2="24.5" stroke="black" />
              <line x1="25" y1="3.5" x2="32" y2="3.5" stroke="black" />
              <line x1="25" y1="14.5" x2="32" y2="14.5" stroke="black" />
              <line x1="25" y1="24.5" x2="32" y2="24.5" stroke="black" />
              <line x1="14" y1="0.5" x2="19" y2="0.5" stroke="black" />
              <line x1="14" y1="10.5" x2="19" y2="10.5" stroke="black" />
              <line x1="14" y1="21.5" x2="19" y2="21.5" stroke="black" />
            </svg>
          </button>
        </div>
      </div>
      {posterView ? (
        <div className="monthview">
          {Object.keys(groupedByMonth).map((month, index) => {
            // Check if MonthFilter is set and if the current month matches the filter
            // Check if MonthFilter is set and if the current month matches the filter
            const filteredMonth = monthFilter
              ? monthFilter.toLowerCase().trim().substring(0, 3)
              : null;
            const currentMonth = month.toLowerCase().trim().substring(0, 3);
            if (filteredMonth && currentMonth !== filteredMonth) {
              return null;
            }
            return (
              <div key={index} className="month">
                <h3 className="monthh3">{month}</h3>
                <div className="posterlist">
                  {groupedByMonth[month].map((artist) => (
                    <ArtistPosterCard
                      key={artist.slug}
                      tag={artist.koncept}
                      name={artist.name}
                      shortDescription={artist.shortDescription}
                      time={artist.from}
                      place={artist.place}
                      slug={artist.slug}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="artistlist">
          {/* {filteredData
            ? filteredData.map((artist, index) => (
                <ArtistCard
                  key={index}
                  tag={artist.koncept}
                  name={artist.name}
                  shortDescription={artist.shortDescription}
                  time={artist.from}
                  place={artist.place}
                  img={"https://source.unsplash.com/random/"}
                  slug={artist.slug}
                />
              ))
            : null} */}

          {Object.keys(groupedByMonth).map((month, index) => {
            // Check if MonthFilter is set and if the current month matches the filter
            // Check if MonthFilter is set and if the current month matches the filter
            const filteredMonth = monthFilter
              ? monthFilter.toLowerCase().trim().substring(0, 3)
              : null;
            const currentMonth = month.toLowerCase().trim().substring(0, 3);
            if (filteredMonth && currentMonth !== filteredMonth) {
              return null;
            }
            return (
              <div key={index} className="month">
                <h3 className="monthh3">{month}</h3>
                <div className="posterlist">
                  {groupedByMonth[month].map((artist) => (
                    <ArtistCard
                      key={artist.slug}
                      tag={artist.koncept}
                      name={artist.name}
                      shortDescription={artist.shortDescription}
                      time={artist.from}
                      place={artist.place}
                      slug={artist.slug}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
