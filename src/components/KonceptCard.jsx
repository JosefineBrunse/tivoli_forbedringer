"use client";
import Image from "next/image";
import styles from "../styles/productshelf.css";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KonceptCard({ imgsrc, headline, text, btnlink }) {
  const left = useRef(null);
  const top = useRef(null);
  const end = useRef(null);
  const right = useRef(null);
  const headlineref = useRef(null);
  const textref = useRef(null);
  const btn = useRef(null);
  const imgref = useRef(null);
  const cardref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".konceptcard",
        start: "top center",
        end: "bottom center",
      }
    });

    
    tl.fromTo(headlineref.current, { bottom: "-100%" }, { bottom: 0, duration: .5 , ease: "ease-in-out"})
    .fromTo(textref.current, {opacity: 0, right: -100}, { opacity: 1, right:0, duration: .5 , ease: "ease-in-out"}, "-=.3")
 
    .fromTo(btn.current, { bottom: -10, opacity:0 }, { bottom: 0, opacity:1, duration: .5 },"-=.4")

  }, []);

  return (
    <Link className="konceptcard" ref={cardref} href={btnlink}>
      <div className="border top" ref={top}></div>
      <div className="border right" ref={right}></div>
      <div className="border end" ref={end}></div>
      <div className="border left" ref={left}></div>
      <div ref={imgref} className="imgcontainer">
        <div className={"imgoverlay"}></div>
        <img src={imgsrc} alt="" />
      </div>
      <div className={"bottom " + headline}>
        <div>
          <h3  className="konceptheadline">
          
          <span ref={headlineref}>
            {headline}
          </span>
          </h3>
          <p ref={textref}>{text}</p>
        </div>
        <PrimaryBtn ref={btn} text={"Læs mere"} link={btnlink} />
      </div>
    </Link>
  );
}
