import React from "react";

const Button = ({texto}) => {

    const handleClick = () => {
        if(texto === "Inicio"){
            window.location.pathname = "/";
        }else{
            window.location.pathname = "/" + texto;
        }
    }
    return (
        <>
            <p className="nav-but" type="button" onClick={()=>handleClick()}>{texto}</p>
        </>
    );
}

export default Button;