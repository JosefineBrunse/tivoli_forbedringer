"use client";
import Image from "next/image";
import styles from "../styles/ArtistCard.css";
import SecondaryBtn from "./SecondaryBtn";
import LikeBtn from "./LikeBtn";
import Link from "next/link";
import { gsap } from 'gsap';
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArtistPosterCard(props) {
  const date = new Date(props.time);

  const options = { day: "2-digit", month: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
 const myelementref = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(myelementref.current, 
        { y: 200, opacity: 0.5 }, 
        { y: 0, opacity: 1, duration: 1, scrollTrigger: {
          trigger: myelementref.current,
          start: "top 100%",
          end: "bottom 92%",
          scrub: true,
          toggleActions: "play none none reverse",
          
        } }
      );
    }, []);
   

  return (
    <Link
    ref={myelementref}
      href={"/event/" + props.slug}
      className={"artistcard poster " + props.tag}
    >
      <h3>{props.name}</h3>

      <p className={"time " + props.tag}>{formattedDate}</p>
    </Link>
  );
}
