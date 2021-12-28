import Bikecard from "./Bikecard";
const Posts =({posts})=>{
    console.log(posts);
    return(
        posts.map((val)=>{
            if(val !== "")
            {
            return (<Bikecard imgurl={val.ImageURL} make = {val.make} capacity = {val.Displacement} hp={val.Power}/>)
            }
            else{
              return <h1>No record Found</h1>
            }
          })
    )

}

export default Posts;