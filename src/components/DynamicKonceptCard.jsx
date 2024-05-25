import Image from "next/image";
import styles from "../styles/productshelf.css";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

export default function DynamicKonceptCard({
  imgsrc,
  headline,
  text,
  btnlink,
}) {
  return (
    <div className="dynamic konceptcard">
      <div className="imgcontainer">
        <div className={"imgoverlay"}></div>
        <img src={imgsrc} alt="" />
      </div>
      <div className={"bottom " + headline}>
        <div>
          <h3>{headline}</h3>
          <p>{text}</p>
        </div>

        <PrimaryBtn text={"Læs mere"} link={btnlink} />
      </div>
    </div>
  );
}
