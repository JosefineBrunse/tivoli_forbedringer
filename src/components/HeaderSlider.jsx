import Image from "next/image";
import styles from "../styles/headerslider.css";
import SecondaryBtn from "./SecondaryBtn";
export default function HeaderSlider(props) {
  return (
    <section className={"headerslider"}>
      <div className="headersliderelement">
        <div className={"info"}>
          <div className="smallinfo">
            <p className="koncept">fredagsrock</p>
            <div>
              <p className="date">10. maj</p>
              <p className="time">22:00</p>
            </div>
            <p className="place">Plænen</p>
          </div>
          <h2>GOBS & Thor Farlov</h2>

          <SecondaryBtn text={"Læs mere"} />
        </div>
        <img className={"headerimg"} src="/header.png" alt="" />
      </div>
    </section>
  );
}
