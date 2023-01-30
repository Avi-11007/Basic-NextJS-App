import React from "react";
import css from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={css.container} style={{ color: "black" }}>
                <div>
                    Contact us
                </div>
                <div>
                    Our Address:
                    <span>Gorakhpur UP India</span>
                </div>
                <div>
                    Call us:
                    <span>8707019496</span>
                </div>
            </div>
      </>
  );
};

export default Footer;
