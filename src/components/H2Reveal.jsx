"use client";

import Image from "next/image";
import styles from "../styles/headline.css";

import { gsap } from 'gsap';
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import localFont from "next/font/local";

const myFont = localFont({
    src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

gsap.registerPlugin(ScrollTrigger);

export default function H2Reveal({ text }) {
    const myheadlineref = useRef(null);

    useEffect(() => {
        gsap.set(myheadlineref.current, {y: "100%"})
        gsap.to(
            myheadlineref.current,
            { y: 0, duration: .2, ease: "ease-in-out", 
              scrollTrigger: {
                  trigger: myheadlineref.current,
                  start: "top 80%",
                  end: "bottom 60%",
                  toggleActions: "play none none reverse",
                  markers: true
              } 
            }
        );
    }, []);

    return (
        <h2 className={`${myFont.className} overflowreveal`}>
            <span ref={myheadlineref}>
                {text}
            </span>
        </h2>
    );
}
