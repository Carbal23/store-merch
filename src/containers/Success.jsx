import React, { useContext } from "react";
import "../styles/components/success.css"
import AppContext from "../context/AppContext";
import Map from "../components/Map/Map";
import useGoogleAdress from "../hooks/useGoogleAddress";

const Success = ()=>{
    const {state} = useContext(AppContext);
    const {buyer} = state;
    const location  = useGoogleAdress(buyer[0].address)
    return(
        <div className="success">
            <div className="succes-content">
                <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="succes-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
};

export default Success;