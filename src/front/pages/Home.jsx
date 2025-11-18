import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/img/Icon.jpeg"


export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container d-flex flex-column align-items-center text-center">
            <div className="z-1 inicio card">
                <h1>Gestor de gastos</h1>
                {/* Imagen central */}
                <div className="">
                    <img
                        src={Icon}
                        alt="Logo Billetera Familiar"
                        className=""
                        style={{ maxWidth: "300px" }}
                    />
                </div>

                {/* Botones inferiores lado a lado */}
                <div className="my-2 d-flex justify-content-center gap-3 z-1">
                    <button
                        className="btn btn-registro"
                        style={{ minWidth: "140px" }}
                        onClick={() => navigate("/Signup")}
                    >
                        Registrarse
                    </button>

                    <button
                        className="btn btn-iniciar_sesion"
                        style={{ minWidth: "140px" }}
                        onClick={() => navigate("/Login")}
                    >
                        Acceder
                    </button>
                </div>
            </div>
        </div>
    );
};
