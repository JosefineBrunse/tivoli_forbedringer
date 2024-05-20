"use client";
import Image from "next/image";
import styles from "../styles/navbar.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ koncepter }) {
  const [active, setactive] = useState(false);

  function handleBurgerClick() {
    setactive((old) => !old);
  }
  function closeBurger() {
    setactive((old) => false);
  }

  return (
    <div className="nav_container">
      <nav className="navbar">
        <Link className="nav-branding" href="/" onClick={closeBurger}>
          <img src="Tivoli_logo.png" alt="" />
        </Link>

        <article className={"nav-menu " + (active ? "active" : "")}>
          <h1>menu</h1>
          <ul>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/program"
                onClick={handleBurgerClick}
              >
                Program
              </Link>
            </li>
            {koncepter.map((item) => (
              <li className="nav-item under">
                <Link
                  className="nav-link"
                  href={"/koncept/" + item.slug}
                  onClick={handleBurgerClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <div
          className={"hamburger " + (active ? "active" : "")}
          onClick={handleBurgerClick}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
      </nav>
      <div
        onClick={handleBurgerClick}
        className={"blur " + (active ? "active" : "")}
      ></div>
    </div>
  );
}
