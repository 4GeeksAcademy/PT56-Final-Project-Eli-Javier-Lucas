import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/img/Icon.jpeg"


export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container d-flex flex-column align-items-center text-center p-4" style={{ minHeight: "100vh" }}
        >
            {/* Imagen central */}
            <div className="mt-3 mb-4">
                <img
                    src={Icon}
                    alt="Logo Billetera Familiar"
                    className="rounded-4 border border-success border-4"
                    style={{ maxWidth: "300px", borderRadius: "20px" }}
                />
            </div>

            {/* Botones inferiores lado a lado */}
            <div className="mt-3 mb-3 d-flex justify-content-center gap-3">
                <button
                    className="btn btn-registro px-4 py-2"
                    style={{ minWidth: "140px" }}
                    onClick={() => navigate("/Signup")}
                >
                    Registrarse
                </button>

                <button
                    className="btn btn-iniciar_sesion px-4 py-2"
                    style={{ minWidth: "140px" }}
                    onClick={() => navigate("/Login")}
                >
                    Acceder
                </button>
            </div>
        </div>
    );
};
