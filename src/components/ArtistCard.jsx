"use client";
import Image from "next/image";
import styles from "../styles/ArtistCard.css";
import SecondaryBtn from "./SecondaryBtn";
import LikeBtn from "./LikeBtn";
export default function ArtistCard(props) {
  const months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const date = new Date(props.time);

  const formattedDate = `${date.getDate()}. ${months[date.getMonth()]}`;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <div className="artistcard" href="#">
      <div className="imgcontainer">
        <img
          src={props.img}
          // {
          //   "https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/" +
          //   props.slug +
          //   ".webp"
          // }
          alt=""
        />
      </div>
      <div className="artistcardinfo">
        <div className="flexbetween">
          <div>
            <div className={"tag " + props.tag}>{props.tag}</div>
            <h3>{props.name}</h3>
            <h4 className="shortdescription">{props.shortDescription}</h4>
          </div>
          <LikeBtn></LikeBtn>
        </div>
        <div className="bottom">
          <div className="artistcardinfodetails">
            <p className="time">{formattedDate + " - kl." + formattedTime}</p>

            <p className="place">{props.place}</p>
          </div>
          <SecondaryBtn text={"Læs mere"} link={"event/" + props.slug} />
        </div>
      </div>
    </div>
  );
}
