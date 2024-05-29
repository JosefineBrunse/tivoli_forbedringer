import Image from "next/image";
import styles from "../styles/productshelf.css";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import Link from "next/link";

export default function KonceptCard({ imgsrc, headline, text, btnlink }) {
  return (
    <Link className="konceptcard" href={btnlink}>
      <div className="imgcontainer">
        <div className={"imgoverlay"}></div>
        <img src={imgsrc} alt="" />
      </div>
      <div className={"bottom " + headline}>
        <div>
          <h3 className="konceptheadline">{headline}</h3>
          <p>{text}</p>
        </div>

        <PrimaryBtn text={"Læs mere"} link={btnlink} />
      </div>
    </Link>
  );
}
