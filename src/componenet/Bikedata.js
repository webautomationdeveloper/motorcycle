import { Supabase } from "./Client";
import React, { useEffect, useState } from "react";

import Pagination from "./Pagination";
import './bikedata.css'

import Header from "../UI/Header";
import MultiRangeSlider from "./MultiRangeSlider";
import Posts from "./Posts";

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
  const [currentpage,setCurrentpage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(21);

  const filterData = ()=>{
    let filteredData = bikedata.filter(function(val){
      if((min1<val.Displacement && val.Displacement<max1) && (min2<val.Power && val.Power < max2))
            return val;
    });
    setFiltereddata(filteredData);
  }

  let [bikedata, assigndata] = React.useState([]);
  useEffect(() => {
    const supabase_bikedata = async () => {
      try{
        let data = await Supabase.from("bike main").select();
        return data;
      }
      catch(error){
        console.log(error);
      }
    };

    supabase_bikedata().then((val) => {
      assigndata(val.data);
      setFiltereddata(val.data);
    });
  }, []);

  const paginate =(pageNumber)=>{
    setCurrentpage(pageNumber);
  }


  const indexOfLastPost = currentpage*postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentPosts =  filteredBikeData.slice(indexOfFirstPost,indexOfLastPost);

  
  return (
        <div>
          <Header /> 
          <div className="sliderContainer">
            <div className="sliderprop">
              <label>Displacement</label>
            <MultiRangeSlider
                  min={800}
                  max={1500}
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
              <label>Power</label>
            <MultiRangeSlider
                  min={50}
                  max={ 500}
                  onChange={({ min, max }) => {setmin2(min);setmax2(max);}}
            />
            <div className="unit">
              <label>{min2}ps</label>
              <label>{max2}ps</label>
            </div>
            </div>

            <div className="sliderprop">
              <label>Make(not working)</label>
            <MultiRangeSlider
                  min={0}
                  max={10}
                  onChange={({ min, max }) => {setmin3(min);setmax3(max);}}
            />
            <div className="unit">
              <label>
                {min3}
              </label>
              <label>{max3}</label>
            </div>
            </div>

            <div className="sliderprop">
              <label>Capacity(not working)</label>
            <MultiRangeSlider
                  min={0}
                  max={10}
                  onChange={({ min, max }) => {setmin4(min);setmax4(max);}}
            />
            <div className="unit">
              <label>
                {min4}
              </label>
              <label>{max4}</label>
            </div>
            </div>
          </div>

          {/* filter Button for filtering data */}
          <div className="filterButton">
            <button className="filterbtn btn btn-outline-warning btn-lg" onClick={filterData}>Filter</button>
          </div>
            <div className="container">
            <Posts posts={currentPosts} />  
            </div>
            <div className="paginationProp" >
            <Pagination postPerPage={postPerPage} totalPosts={filteredBikeData.length} paginate={paginate}/>
            </div>

        </div>
            );
};


export default Bikedata;
