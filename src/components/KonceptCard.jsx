import Image from "next/image";
import styles from "../styles/productshelf.css";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

export default function KonceptCard({ imgsrc, headline, text, btnlink }) {
  return (
    <div className="konceptcard">
      <div className="imgcontainer">
        <div className={"imgoverlay"}></div>
        <img src={imgsrc} alt="" />
      </div>
      <div className={"bottom " + headline}>
        <div>
          <h3>{headline}</h3>
          <p>{text}</p>
        </div>

        <SecondaryBtn text={"Læs mere"} link={btnlink} />
      </div>
    </div>
  );
}
