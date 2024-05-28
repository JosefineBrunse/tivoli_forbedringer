"use client";
import Image from "next/image";
import styles from "../styles/signup.css";
import { useState } from "react";
export default function SignUp() {
  const [signedup, setsignedup] = useState(false);
  return (
    <section className={`signup ${signedup ? "done" : null}`}>
      {signedup ? (
        <>
          <h2>Du hører ikke fra os</h2>
          <p>da dette er en studie opgave</p>
        </>
      ) : (
        <>
          <div>
            <h2>Tilmeld dig vores nyehedsbrev</h2>
            <p>
              Og få information om ugens program, nyeste opdateringer og meget
              meget mere.
            </p>
          </div>
          <div className="signupform">
            <label htmlFor="mailsignup"></label>
            <input type="mail" id="mailsignup" placeholder="minmail@mail.com" />

            <button onClick={() => setsignedup(true)}>Tilmeld</button>
          </div>
        </>
      )}
    </section>
  );
}
