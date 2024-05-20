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

  useEffect(() => {
    filterAndSortData(data); // Filter and sort data on initial load

    // Auto-scroll to the next slide every 5 seconds
    const intervalId = setInterval(() => {
      animateSlides(-1); // Scroll to the next slide
    }, 5000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
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

  function animateSlides(direction) {
    if (isAnimating) return; // Don't animate if already animating
    setIsAnimating(true); // Set animation flag to true

    const proxy = proxyRef.current;
    const slideWidth = proxy.children[0].offsetWidth; // Get width of first child
    const x = gsap.getProperty(proxy, "x") + direction * slideWidth;
    const lastIndex = proxy.children.length - 1;

    let newX = x;

    if (x > 0 && direction === 1) {
      newX = -slideWidth * lastIndex;
    }

    if (x < -slideWidth * lastIndex && direction === -1) {
      newX = 0;
    }

    slideAnimationRef.current = gsap.to(proxy, {
      x: newX,
      duration: slideDuration,
      onComplete: () => setIsAnimating(false), // Reset animation flag when animation completes
      onUpdate: updateActiveDot, // Add onUpdate callback to update active dot
    });
  }

  function updateActiveDot() {
    const proxy = proxyRef.current;
    const slideWidth = proxy.children[0].offsetWidth; // Get width of first child
    const x = gsap.getProperty(proxy, "x");
    const activeIndex = Math.round(-x / slideWidth);
    setActiveDotIndex(activeIndex);
  }

  useEffect(() => {
    if (prevButtonRef.current) {
      prevButtonRef.current.addEventListener("click", () => {
        if (!isAnimating) {
          animateSlides(1);
        }
      });
    }
    if (nextButtonRef.current) {
      nextButtonRef.current.addEventListener("click", () => {
        if (!isAnimating) {
          animateSlides(-1);
        }
      });
    }

    return () => {
      if (prevButtonRef.current) {
        prevButtonRef.current.removeEventListener("click", () =>
          animateSlides(1)
        );
      }
      if (nextButtonRef.current) {
        nextButtonRef.current.removeEventListener("click", () =>
          animateSlides(-1)
        );
      }
    };
  }, [isAnimating]);

  let dots = [];
  if (proxyRef.current && filteredData) {
    dots = Array.from(proxyRef.current.children).map((_, index) => index);
  }

  return (
    <div className="scrollelementcontainer">
      <div className="scrolllogoelement">
        <h1>Kommende Events</h1>
      </div>
      <div className="scrollleft" ref={prevButtonRef}>
        <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#FDF8EE" />
        </svg>
      </div>
      <div className="scrollright" ref={nextButtonRef}>
        <svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="#FDF8EE" />
        </svg>
      </div>
      <div className="dots">
        {dots
          ? dots.map((i) => (
              <div
                key={i}
                className={`dot ${activeDotIndex === i ? "active" : ""}`}
                onClick={() => {
                  animateSlides(-1 * (i - activeDotIndex));
                }}
              ></div>
            ))
          : null}
      </div>
      <section className="headerslider" ref={proxyRef}>
        {filteredData.length > 0 ? (
          filteredData.map((artist) => (
            <HeaderSliderElement
              key={artist.slug} // Add a unique key
              img={"header.png"}
              headline={artist.name}
              time={artist.time}
              place={artist.place}
              koncept={artist.koncept}
              slug={artist.slug}
            />
          ))
        ) : (
          <p>No events found</p>
        )}
      </section>
    </div>
  );
}
