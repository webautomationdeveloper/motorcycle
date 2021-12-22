import "./filter.css";
// import Slider from './Slider';
import Filterproperty from "./Filterproperty";

const Filter = () => {
  return (
    <div className="filtercontent">
      <div className="filterprop">
      <Filterproperty
      
        fltr1="capacity"
        min={23}
        max={55}
        unit="cm3"
      />
      <Filterproperty
     
        fltr1="capacity"
        min={23}
        max={55}
        unit="cm3"
      />
      <Filterproperty
        
        fltr1="capacity"
        min={23}
        max={55}
        unit="cm3"
      />
    </div>
    <div>
      <button type="button" className="btn">Filter</button>
    </div>
    </div>
  );
};

export default Filter;
