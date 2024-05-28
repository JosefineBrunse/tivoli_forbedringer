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
import PrimaryBtn from "./PrimaryBtn";
import Quiz from "./Quizcard";
import Quizcard from "./Quizcard";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function ProgramComponent({
  quiz,
  quizfilters,
  headline,
  data,
  filter,
  likedArtists,
  viewLiked,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [konceptFilter, setKonceptFilter] = useState(filter || null);
  const [GenreFilter, setGenreFilter] = useState(null);
  const [stemningFilter, setStemningFilter] = useState(null);
  const [monthFilter, setMonthFilter] = useState(null);
  const [posterView, setPosterView] = useState(false);
  const [togglefilters, setToggleFilters] = useState(false);
  const [monthOptions, setMonthOptions] = useState([]);
  const [likedartist, setlikedartists] = useState();

  useEffect(() => {
    if (quizfilters) {
      if (quizfilters.genre) {
        setGenreFilter(quizfilters.genre);
      }
      if (quizfilters.month) {
        if (quizfilters === "all") {
        } else {
          setMonthFilter(quizfilters.month);
        }
      }
      if (quizfilters.stemning) {
        setStemningFilter(quizfilters.stemning);
      }
      if (quizfilters.koncept) {
        setKonceptFilter(quizfilters.koncept);
      }
    }
  }, [quizfilters]);

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
  }, [data]);

  useEffect(() => {
    let filteredDataCopy = [...data].filter(
      (event) => new Date(event.from) > new Date()
    );

    // Sort events by the 'from' date
    filteredDataCopy.sort((a, b) => new Date(a.from) - new Date(b.from));

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
        item.stemning.includes(stemningFilter)
      );
    }
    if (monthFilter) {
      filteredDataCopy = filteredDataCopy.filter(
        (item) =>
          format(new Date(item.from), "MMMM", { locale: da }) === monthFilter
      );
    }

    if (likedArtists && likedArtists.length > 0) {
      const likedArtistIds = likedArtists.map((artist) => artist.id);
      const filteredLikedData = filteredDataCopy.filter((event) =>
        likedArtistIds.includes(event.id)
      );
      console.log("FROM THE LIKED PROGRAM", filteredLikedData);

      setFilteredData(filteredLikedData);
    } else {
      console.log("HELLOOOOOO");
      setFilteredData(filteredDataCopy);
    }

    console.log(filteredDataCopy);
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
        <div
          className="hidden showfilters"
          onClick={() => {
            setToggleFilters((old) => !old);
          }}
        >
          <button>Filtrer</button>
        </div>
        <div className={`filtershelf${togglefilters ? " active" : ""}`}>
          <h3 className="filterheadline hidden">Filtre</h3>
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
              { value: "sommerklassisk" },
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
              { value: "Funk" },
              { value: "Dansktop" },
              { value: "Comedy" },
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
              { value: "Store følelser" },
            ]}
          />

          <FilterBtn
            changestate={changeKonceptState}
            name={"Month"}
            id={"Month"}
            options={monthOptions}
          />

          <div
            onClick={() => {
              setToggleFilters((old) => !old);
            }}
            className="viewresults hidden"
          >
            <PrimaryBtn text={"Se resultat"} />
          </div>
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
                      fleretider={artist.fleretider}
                      img={artist.img}
                      id={artist.id}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="artistlist">
          {Object.keys(groupedByMonth).map((month, index) => {
            const filteredMonth = monthFilter
              ? monthFilter.toLowerCase().trim().substring(0, 3)
              : null;
            const currentMonth = month.toLowerCase().trim().substring(0, 3);
            if (filteredMonth && currentMonth !== filteredMonth) {
              return null;
            }
            const artists = groupedByMonth[month].map((artist, artistIndex) => {
              if (index === 0 && artistIndex === 1 && !quizfilters) {
                return (
                  <>
                    <ArtistCard
                      key={artist.slug}
                      tag={artist.koncept}
                      name={artist.name}
                      shortDescription={artist.shortDescription}
                      time={artist.from}
                      place={artist.place}
                      slug={artist.slug}
                      fleretider={artist.fleretider}
                      img={artist.img}
                      id={artist.id}
                    />
                    <Quizcard />
                  </>
                );
              }
              return (
                <ArtistCard
                  key={artist.slug}
                  tag={artist.koncept}
                  name={artist.name}
                  shortDescription={artist.shortDescription}
                  time={artist.from}
                  place={artist.place}
                  slug={artist.slug}
                  fleretider={artist.fleretider}
                  img={artist.img}
                  id={artist.id}
                />
              );
            });
            return (
              <div key={index} className="month">
                <h3 className="monthh3">{month}</h3>
                <div className="posterlist">{artists}</div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
