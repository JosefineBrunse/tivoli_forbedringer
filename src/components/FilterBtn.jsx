import Image from "next/image";
import styles from "../styles/filterbtn.css";
export default function FilterBtn(props) {
  function handleSelect(value) {
    props.changestate(props.name, value);
  }

  return (
    <label htmlFor={props.name}>
      {props.name}
      <select
        defaultValue={"name"}
        onChange={(e) => {
          handleSelect(e.target.value);
        }}
        aria-label={"filtrer efter " + props}
        className="filterbtn"
        name={props.name}
        id={props.id}
      >
        <optgroup label={props.name}>
          <option value="all">All</option>
          {props.options
            ? props.options.map((option) => (
                <option value={option.value}>{option.value}</option>
              ))
            : null}
        </optgroup>
      </select>
    </label>
  );
}
