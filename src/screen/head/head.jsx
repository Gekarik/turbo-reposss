import React from "react";
import st from "./head.module.css";
import Logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <head className={st.head}>
      <div className={st.head_wrap}>
        <div className={st.logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={st.logo_img} />
          </Link>
        </div>
        <div className={st.navbar}>
          <ul>
            <li>
              <Link to="/app">Мои заметки</Link>
            </li>
          </ul>
        </div>
      </div>
    </head>
  );
};

export default Head;
