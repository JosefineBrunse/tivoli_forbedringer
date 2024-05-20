import Image from "next/image";
import styles from "../styles/productshelf.css";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

export default function KonceptCard({ imgsrc, headline, text, btnlink }) {
  return (
    <div className="konceptcard">
      <div className="imgcontainer">
        <img src={imgsrc} alt="" />
      </div>
      <div className="bottom">
        <div>
          <h3>{headline}</h3>
          <p>{text}</p>
        </div>
        <div>
          <PrimaryBtn text={"Læs mere"} link={btnlink} />
        </div>
      </div>
    </div>
  );
}
