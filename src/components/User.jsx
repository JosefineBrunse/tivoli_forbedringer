"use client";
import Image from "next/image";
import styles from "../styles/SecondaryBtn.module.css";
import { UserContext, SetUserContext } from "./MyContexts";
import { useContext } from "react";
import Login from "./Login";
export default function User({ data }) {
  const userState = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);
  return (
    <>
      {userState ? <h1>velkommen tilbage {userState.firstName}</h1> : <Login />}
    </>
  );
}
