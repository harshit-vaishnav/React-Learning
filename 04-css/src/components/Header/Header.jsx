import React from 'react'
import style from "./Header.module.css";

const Header = () => {
  return (
    <div>
        <h2 className= {style.h2}>Instagram</h2>
         <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header;