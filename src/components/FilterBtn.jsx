import Image from "next/image";
import styles from "../styles/filterbtn.css";
export default function FilterBtn(props) {
  return (
    <label htmlFor={props.name}>
      <select
        aria-label={"filtrer efter " + props}
        className="filterbtn"
        name={props.name}
        id={props.id}
      >
        <option selected value="name">
          {props.name}
        </option>
        {props.options
          ? props.options.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))
          : null}
      </select>
    </label>
  );
}
