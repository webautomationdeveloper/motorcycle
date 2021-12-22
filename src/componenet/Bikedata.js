import { Supabase } from "./Client";
import React, { useEffect, useState } from "react";
import Bikecard from "./Bikecard";
import './bikedata.css'
import Filter from "./Filter";
import Header from "../UI/Header";

const Bikedata = () => {
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

  console.log(bikedata);

  
  return (
  
        <div>
          <Header />
          
          <Filter />

            <div className="container">
            {
              bikedata.map((val)=>{
                if(val.Displacement!==987)
                return (<Bikecard  make = {val.make} capacity = {val.Displacement} hp={val.power}/>)
              })
            }
            </div>
        </div>
            );
};


export default Bikedata;
