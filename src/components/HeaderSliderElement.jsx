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
        backgroundImage: `url(https://source.unsplash.com/random/")`,
      }}
    >
      <div className={"info"}>
        <div className="smallinfo">
          <p className="koncept">{props.koncept}</p>
          <div>
            <p className="date">10. maj</p>
            <p className="time">{props.time}</p>
          </div>
          <p className="place">{props.place}</p>
        </div>
        <h2 className={`${myFont.className}`} onClick={scrollforward}>
          {props.headline}
        </h2>

        <SecondaryBtn text={"Læs mere"} link={"event/" + props.slug} />
      </div>
      <div className="headerimg"></div>
    </div>
  );
}
