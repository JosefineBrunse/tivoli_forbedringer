"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import HeaderSliderElement from "./HeaderSliderElement";

gsap.registerPlugin(Draggable);

export default function HeaderSlider({ data }) {
  const proxyRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const slideAnimationRef = useRef(null);
  const slideDuration = 0.8;
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [transform, setTransform] = useState(100 * slideIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === 4) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);
  useEffect(() => {
    filterAndSortData(data); // Filter and sort data on initial load
  }, [data]);

  const filterAndSortData = (data) => {
    // Filter events to include only upcoming events
    const now = new Date();
    let filteredDataCopy = data.filter((item) => new Date(item.from) >= now);

    // Sort events by date
    filteredDataCopy.sort((a, b) => new Date(a.from) - new Date(b.from));

    // Limit to the first 5 events
    filteredDataCopy = filteredDataCopy.slice(0, 5);

    setFilteredData(filteredDataCopy);
  };

  return (
    <div className="scrollelementcontainer">
      <div className="scrolllogoelement">
        <h1>Kommende Events</h1>
      </div>
      <div
        className="scrollleft"
        onClick={() =>
          setSlideIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1))
        }
      >
        <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#FDF8EE" />
        </svg>
      </div>
      <div
        className="scrollright"
        onClick={() =>
          setSlideIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1))
        }
      >
        <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#FDF8EE" />
        </svg>
      </div>
      <div className="dots">
        {filteredData
          ? filteredData.map((item, index) => (
              <div
                key={index}
                className={`dot ${slideIndex === index ? "active" : ""}`}
                onClick={() => {
                  setSlideIndex(index);
                }}
              ></div>
            ))
          : null}
      </div>
      <section
        className="headerslider"
        ref={proxyRef}
        style={{
          right: `${slideIndex * 100}%`,
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((artist) => (
            <HeaderSliderElement
              key={artist.slug} // Add a unique key
              headline={artist.name}
              time={artist.from}
              place={artist.place}
              koncept={artist.koncept}
              slug={artist.slug}
              img={artist.img}
            />
          ))
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}
