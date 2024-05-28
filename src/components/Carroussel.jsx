"use client";
import Image from "next/image";
import styles from "../styles/carroussel.css";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import localFont from "next/font/local";
const myFont = localFont({
  src: "/../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function Carroussel({ slug, children, title, dynamic }) {
  const supabase = createClient(
    "https://dmyzwmcuzrezoxseqnfh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E"
  );

  const [imgs, setimgs] = useState([]);
  const folderpath = `img/${slug}/stemning`;
  console.log("PATH", folderpath);

  async function getimgs() {
    const { data, error } = await supabase.storage
      .from("koncept")
      .list(folderpath, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    console.log("IMGS", data);
    setimgs(data);
  }

  useEffect(() => {
    getimgs();
  }, [slug]);

  return (
    <section className="carroussel">
      <h3 className={`${myFont.className}`}>{title}</h3>

      <div className="outercontainer">
        <div className="innercontainer">
          {dynamic
            ? imgs.map((img) => (
                <div className="imgcontainer">
                  <img
                    src={`https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/koncept/img/${slug}/stemning/${img.name}`}
                    alt=""
                  />
                  ;
                </div>
              ))
            : children}
        </div>
      </div>
    </section>
  );
}
