import "./filterproperty.css";
import MultiRangeSlider from "./MultiRangeSlider";

const Filterproperty = (prop) => {
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
