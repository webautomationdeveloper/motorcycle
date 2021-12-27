import { Supabase } from "./Client";
import React, { useEffect, useState } from "react";
import Bikecard from "./Bikecard";
import './bikedata.css'

import Header from "../UI/Header";
import MultiRangeSlider from "./MultiRangeSlider";

const Bikedata = () => {
  const [min1,setmin]= useState(0);
  const [max1,setmax]=useState(0);
  const [min2,setmin2]=useState(0);
  const [max2,setmax2]=useState(0);
  const [min3,setmin3]=useState(0);
  const [max3,setmax3]=useState(0);
  const [min4,setmin4]=useState(0);
  const [max4,setmax4]=useState(0);
  const [filteredBikeData,setFiltereddata]=useState([]);


// console.log("filteredBikeData===")


  const filterData = ()=>{
    console.log(min1);
    console.log(max1);
    let filteredData = bikedata.filter(function(val){
      if((min1<val.Displacement && val.Displacement<max1))
      return val;
    });


    setFiltereddata(filteredData);
  }

  let [bikedata, assigndata] = React.useState([]);
  useEffect(() => {
    const supabase_bikedata = async () => {
      try{
        let data = await Supabase.from("bikedata").select();
        return data;
      }
      catch(error){
        console.log(error);
      }
    };

    supabase_bikedata().then((val) => {
      assigndata(val.data);
    });
  }, []);


  
  return (
        <div>
          <Header /> 
          <div className="sliderContainer">
            <div className="sliderprop">
              <label>Capacity</label>
            <MultiRangeSlider
                  min={800}
                  max={1500}
                  unit ={"cm3"}
                  onChange={({ min, max }) => {setmin(min);setmax(max);}}
            />
            <div className="unit">
              <label>
                {min1}cm<sup>3</sup>
              </label>
              <label>{max1}cm<sup>3</sup></label>
            </div>
            </div>

            <div className="sliderprop">
              <label>Capacity</label>
            <MultiRangeSlider
                  min={800}
                  max={1500}
                  unit ={"cm3"}
                  onChange={({ min, max }) => {setmin(min);setmax(max);}}
            />
            <div className="unit">
              <label>
                {min1}cm<sup>3</sup>
              </label>
              <label>{max1}cm<sup>3</sup></label>
            </div>
            </div>

            <div className="sliderprop">
              <label>Capacity</label>
            <MultiRangeSlider
                  min={800}
                  max={1500}
                  unit ={"cm3"}
                  onChange={({ min, max }) => {setmin(min);setmax(max);}}
            />
            <div className="unit">
              <label>
                {min1}cm<sup>3</sup>
              </label>
              <label>{max1}cm<sup>3</sup></label>
            </div>
            </div>

            <div className="sliderprop">
              <label>Capacity</label>
            <MultiRangeSlider
                  min={800}
                  max={1500}
                  unit ={"cm3"}
                  onChange={({ min, max }) => {setmin(min);setmax(max);}}
            />
            <div className="unit">
              <label>
                {min1}cm<sup>3</sup>
              </label>
              <label>{max1}cm<sup>3</sup></label>
            </div>
            </div>
          </div>
          <div className="filterButton">
            <button className="filterbtn" onClick={filterData}>Filter</button>

          </div>
            <div className="container">
            {
              filteredBikeData.map((val)=>{
                if(val !== "")
                {
                   return (<Bikecard  make = {val.make} capacity = {val.Displacement} hp={val.power}/>)
                }
                else{
                  return <h1>No record Found</h1>
                }
              })
            }
            </div>
        </div>
            );
};


export default Bikedata;
