"use client";
import Image from "next/image";
import styles from "../styles/SecondaryBtn.module.css";
import { UserContext, SetUserContext } from "./MyContexts";
import { useState, useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
export default function LikeBtn({ artistId }) {
  const supabase = createClient(
    "https://dmyzwmcuzrezoxseqnfh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E"
  );

  const SupabaseAccount = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);
  const [liked, setLiked] = useState(false);

  let lists = [];

  function toggleLike() {
    setLiked((old) => !old);
  }

  useEffect(() => {
    if (SupabaseAccount) {
      lists = SupabaseAccount.likedArtists;

      const likedEvent = lists.find((item) => item.id === artistId);

      setLiked(likedEvent ? true : false);
    } else {
      // Load liked events from localStorage on mount
      const likedEvents = JSON.parse(localStorage.getItem("liked")) || [];
      const likedEvent = likedEvents.find((obj) => obj.id === artistId);
      setLiked(likedEvent !== undefined);
    }
  }, [artistId]);

  async function Patch(artistid, body) {
    let objectForPatch = { likedArtists: body };

    let bodyContent = JSON.stringify(body);

    console.log("BODY CONTET", bodyContent);
    console.log("likedartist", body);
    console.log("ID", SupabaseAccount.id);

    const { data, error } = await supabase
      .from("Users")
      .update({ likedArtists: body })
      .eq("id", SupabaseAccount.id)
      .select();
    console.log(data);
  }

  function handleLike(e) {
    toggleLike();
    console.log(SupabaseAccount);
    if (SupabaseAccount) {
      lists = SupabaseAccount.likedArtists;

      if (lists.find((obj) => obj.id === artistId)) {
        const objWithNameIndex = lists.findIndex((obj) => obj.id === artistId);
        lists.splice(objWithNameIndex, 1);

        Patch(SupabaseAccount.id, lists);
        SupabaseAccount.likedArtists = lists;
        userDispatch(SupabaseAccount);
      } else {
        lists.push({ id: artistId });
        // patch til supabase

        Patch(SupabaseAccount.id, lists);
        SupabaseAccount.likedArtists = lists;
        userDispatch(SupabaseAccount);
      }
    } else if (localStorage.getItem("liked")) {
      lists = JSON.parse(localStorage.getItem("liked"));

      if (lists.find((obj) => obj.id === artistId)) {
        const objWithNameIndex = lists.findIndex((obj) => obj.id === artistId);
        lists.splice(objWithNameIndex, 1);
        localStorage.setItem("liked", JSON.stringify(lists));
      } else {
        lists.push({ name: props.name });
        localStorage.setItem("liked", JSON.stringify(lists));
      }
    } else {
      lists.push({ id: artistId });
      let lS = JSON.stringify(lists);
      localStorage.setItem("liked", lS);
    }
  }

  return (
    <button className="likeBtn" onClick={handleLike}>
      <svg
        className={liked ? "active" : null}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
}
