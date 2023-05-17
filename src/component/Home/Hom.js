import React from "react";
import "./Home.css";
import { Link} from 'react-router-dom'
import Letter from "../../assets/images/my_letter-removebg-preview.png";
function Hom() {
  return (
    <div className="home_parent">
      <div className="left_side">
        <div className="info">
          <h1>
      Hi
      <br></br>
      I'm <img src={Letter} alt="" />
      ustafa Eisa
      <br></br>
      Wep Developer

          </h1>
        </div>
      
        <button className="btn_div">
        <Link to="/contact">contact</Link>

        </button>
      </div>
    </div>
  );
}

export default Hom;
