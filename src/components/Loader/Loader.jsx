import React from "react";
import logo from '../../assets/img/lucas-logo.webp';
import "./Loader.scss";

function Loader() {
        setTimeout(() => {
            const contenedor = document.getElementById('loader');
            contenedor.style.visibility = "hidden";
        }, 370);

    return (
        <div id="loader">
            <img className="loader__logo" src={logo} alt="Lucas Zorzin" width='50px' height='44.5px'/>
            <h1 className="loader__name">ZORZIN</h1>
        </div>
    );
}

export default Loader;