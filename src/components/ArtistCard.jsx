import Image from "next/image";
import styles from "../styles/ArtistCard.css";
import SecondaryBtn from "./SecondaryBtn";
export default function ArtistCard(props) {
  return (
    <div className="artistcard" href="#">
      <img
        src={
          "https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/" +
          props.slug +
          ".webp"
        }
        alt=""
      />
      <div className="artistcardinfo">
        <div>
          <div className={"tag " + props.tag}>{props.tag}</div>
          <h3>{props.name}</h3>
          <h4 className="shortdescription">{props.shortDescription}</h4>
        </div>
        <div className="bottom">
          <div className="artistcardinfodetails">
            <p className="time">{props.time}</p>
            <p className="place">{props.place}</p>
          </div>
          <SecondaryBtn text={"Læs mere"} />
        </div>
      </div>
    </div>
  );
}
