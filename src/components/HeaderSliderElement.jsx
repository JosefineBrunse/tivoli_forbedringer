"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "../styles/headerslider.css";
import SecondaryBtn from "./SecondaryBtn";
import { gsap } from "gsap";

import localFont from "next/font/local";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function HeaderSliderElement(props) {
  const containerref = useRef(null);
  const sliderheadlineref = useRef(null);
  const inforef = useRef(null);
  const hasAnimatedIn = useRef(false);
  const hasAnimatedOut = useRef(false);

  useEffect(() => {
    if (props.slideIndex === props.index) {
      if (!hasAnimatedIn.current) {
        gsap.fromTo(
          inforef.current,
          { top: 100, opacity: 0 },
          { top: 0, opacity: 1, duration: 0.5, ease: "ease-in" }
          ,"+=0.2"
        );
        hasAnimatedIn.current = true;
        hasAnimatedOut.current = false;
      }
    } else {
      if (!hasAnimatedOut.current) {
        gsap.fromTo(
          inforef.current,
          { top: 0, opacity: 1 },
          { top: 100, opacity: 0, duration: 0.5, ease: "ease-in" }
        );
        hasAnimatedOut.current = true;
        hasAnimatedIn.current = false;
      }
    }
  }, [props.slideIndex, props.index]);

  const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const date = new Date(props.time);
  const formattedDate = `${date.getDate()}. ${months[date.getMonth()]}`;
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  // Split headline into an array of letters
  const splitHeadline = props.headline.split("");

  return (
    <div
      ref={containerref}
      className="headersliderelement"
      style={{
        backgroundImage: `url(https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/${
          props.img ? props.img : props.slug
        }.webp)`,
      }}
    >

      <div ref={inforef} className={"info"}>
      <div className="smallinfo">
          <p className="koncept">{props.koncept}</p>
          <p className="date">{formattedDate}</p>
          <p className="place">{props.place}</p>
        </div>
        <h2 className={`${myFont.className} ${"headline"}`} ref={sliderheadlineref}>
          {splitHeadline.map((letter, index) => (
            <span className="letter" key={index}>
              {letter}
            </span>
          ))}
        </h2>
        

        <SecondaryBtn text={"Læs mere"} link={"event/" + props.slug} />
      </div>
      <div className="headerimg"></div>
    </div>
  );
}
