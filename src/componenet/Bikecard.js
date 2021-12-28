
import "./Bikecard.css";


const Bikecard = (prop) => {
  return(
    <div className="bikeComponent">
          <div id="image">
            <img src={prop.imgurl} alt="" />
          </div>
        <div id="bikeDesc">
            <div id="logoContainer">
                <img src="https://moto-trips.pl/wp-content/uploads/elementor/thumbs/logo-honda-ojxxoyjmo6r7cwioln7tkgw1tpps2g6nd1d4mxyjxw.png" alt="" />
            </div>
            <h3>{prop.make}</h3>
            <div className="descContainer">
                <div className="descElement">
                    <label for="">Capacity</label>
                    <p>{prop.capacity}</p>
                </div>
                <div className="descElement">
                    <label for="">Power</label>
                    <p>{prop.hp}</p>
                </div>
            </div>
        </div>  
    </div>
  );
};

export default Bikecard;
