import React from "react";
import css from "../styles/Header.module.css";
const Header = () => {
    return (
        <>
            <div className={css.container} style={{ color: "black" }}>
                <div>
                    Home
                </div>

                <div>
                    Menu
                </div>

                <div>
                    About us
                </div>
            </div>
      </>
  );
};

export default Header;
