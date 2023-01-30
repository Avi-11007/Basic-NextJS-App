import React from "react";
import css from "../styles/Hero.module.css";
const Hero = () => {
    return (
        <>
            <div className={css.container} style={{color:"black"}}>
                <div>
                    <h1>This is the main page of the Website</h1>
                </div> 
            </div>    
        </>
  );
};

export default Hero;
