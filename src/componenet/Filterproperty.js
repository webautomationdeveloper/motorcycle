import "./filterproperty.css";
import MultiRangeSlider from "./MultiRangeSlider";
import { useState } from "react";

const Filterproperty = (prop) => {
  // const [minval, setMin] = useState([]);
  return (
    <div className="sliderProp">
      <div className="heading">
        <label>{prop.fltr1} </label>
      </div>
      <MultiRangeSlider
        min={prop.min}
        max={prop.max}
        unit ={prop.unit}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default Filterproperty;
