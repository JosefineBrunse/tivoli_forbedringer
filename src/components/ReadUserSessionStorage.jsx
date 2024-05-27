"use client";
import Image from "next/image";
import styles from "../styles/PrimaryBtn.module.css";
import { createClient } from "@supabase/supabase-js";
import { useContext, useEffect } from "react";
import { SetUserContext, UserContext } from "./MyContexts";
export default function ReadUserSessionStorge({ children }) {
  const supabase = createClient(
    "https://dmyzwmcuzrezoxseqnfh.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E"
  );

  const userState = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);

  useEffect(() => {
    if (userState) {
      null;
    } else if (sessionStorage.getItem("userid")) {
      async function fetchAllUsers() {
        let { data: Users, error } = await supabase.from("Users").select("*");

        const userid = parseInt(sessionStorage.getItem("userid"));
        const myUser = Users.find((account) => account.id === userid);

        console.log("MY USER", myUser);
        userDispatch(myUser);
      }

      fetchAllUsers();
    }
  }, []);

  return <body>{children}</body>;
}
