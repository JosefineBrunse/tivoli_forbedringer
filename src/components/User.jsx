"use client";
import Image from "next/image";
import styles from "@/styles/user.css";
import { UserContext, SetUserContext } from "./MyContexts";
import { useContext, useState } from "react";
import Login from "./Login";

import ProgramComponent from "./ProgramComponent";
export default function User({ data }) {
  const userState = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);

  function handlelogout() {
    userDispatch(null);
    sessionStorage.clear();
  }

  return (
    <>
      {userState ? (
        <>
          <section className="myuser">
            <div className="flex">
              <div>
                <h1>velkommen tilbage {userState.firstName}</h1>
                <p>
                  På denne side kan du se dit program og gemme det så du altid
                  kan huske hvilke arrangementer du kan glæde dig til
                </p>
              </div>
              <button onClick={handlelogout}>Log ud</button>
            </div>
          </section>

          <section className="yourprogram">
            <ProgramComponent
              likedArtists={userState.likedArtists}
              viewLiked={true}
              data={data}
              headline={"Dit program"}
            />
          </section>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
