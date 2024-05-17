"use client";
import Image from "next/image";
import styles from "./page.module.css";
import PrimaryBtn from "@/components/PrimaryBtn";
import SecondaryBtn from "@/components/SecondaryBtn";
import HeaderSlider from "@/components/HeaderSlider";

import SpotifyEmbed from "@/components/SpotifyEmbed";
import ArtistCard from "@/components/ArtistCard";
import TwoCol from "@/components/TwoCol";
import Accordion from "@/components/Accordion";
import AccordionContainer from "@/components/AccordionContainer";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect, useContext } from "react";
import ProgramComponent from "@/components/ProgramComponent";
import Navbar from "@/components/Navbar";
import List from "@/components/List";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function Home() {
  const [data, setData] = useState([]);

  const supabaseUrl = "https://dmyzwmcuzrezoxseqnfh.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E";
  const supabase = createClient(supabaseUrl, supabaseKey);

  async function getData() {
    let { data: mindata, error } = await supabase.from("tivoli_ny").select("*");

    if (mindata) {
      setData(mindata);
      console.log(mindata);
    }
    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className={styles.main}>
      {/* <h1>Coming up</h1>
      <PrimaryBtn text={"Se hele programmet"} />
    <SecondaryBtn text={"Læs mere"} /> */}
      <HeaderSlider data={data} />
      <TwoCol>
        <div className="imgcontainer">
          <video muted autoPlay loop src="genlyd_identitet.mp4"></video>
        </div>
        {/* <AccordionContainer /> */}
        <List>
          <h2 className={`${myFont.className}`}>Hvad er Tivoli genllyd?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            eveniet quibusdam fugiat quo aperiam obcaecati id, minima deleniti
            dolore delectus aliquam, minus sapiente alias? Eveniet mollitia
            ratione eum ipsa ut.
          </p>
          <PrimaryBtn text={"læs mere"} />
        </List>
      </TwoCol>
      <ProgramComponent headline={"Program"} data={data} />
    </main>
  );
}
