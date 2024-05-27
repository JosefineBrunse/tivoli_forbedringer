"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/headerslider.css";
import SecondaryBtn from "./SecondaryBtn";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function HeaderSliderElement(props) {
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

  gsap.registerPlugin(ScrollToPlugin);
  const scrollRef = useRef(null);

  function scrollforward() {
    console.log("SCROLL");
    gsap.to(scrollRef, {
      ScrollToPlugin: "-100vw",
    });
  }

  return (
    <div
      ref={scrollRef}
      className="headersliderelement"
      style={{
        backgroundImage: `url(https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/${
          props.img ? props.img : props.slug
        }.webp)`,
      }}
    >
      <div className={"info"}>
        <div className="smallinfo">
          <p className="koncept">{props.koncept}</p>
          <div>
            <p className="date">{formattedDate}</p>
          </div>
          <p className="place">{props.place}</p>
        </div>
        <h2
          className={`${myFont.className} ${"headline"}`}
          onClick={scrollforward}
        >
          {props.headline}
        </h2>

        <SecondaryBtn text={"Læs mere"} link={"event/" + props.slug} />
      </div>
      <div className="headerimg"></div>
    </div>
  );
}
