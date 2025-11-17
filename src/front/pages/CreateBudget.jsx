import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../js/auth";
import { AgregarIngreso } from "../components/AgregarIngreso";
import { AgregarGasto } from "../components/AgregarGasto";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Modal, Button } from "react-bootstrap";

export const CreateBudget = () => {

    const navigate = useNavigate();
    const [budgetName, setBudgetName] = useState("");
    const [showIngreso, setShowIngreso] = useState(false);
    const [showGasto, setShowGasto] = useState(false);
    const [gastos, setGastos] = useState([]);
    const [ingresos, setIngresos] = useState([]);
    const [editGasto, setEditGasto] = useState(null);
    const [editIngreso, setEditIngreso] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    {/* Valida el token*/ }
    useEffect(() => {
        const check = async () => {
            const valid = await validateToken();
            if (!valid) navigate("/login");
        };
        check();
        

    }, []);

    {/* Jala el usuario y datos*/ }
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSave = (data) => {
        console.log("Datos guardados:", data);
    };


    return (
        <div className="container mt-4">
            {/* Ingreso de datos */}
            <div className="d-flex justify-content-center gap-3 mb-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)}
                    className="form-control w-25 text-center"
                />
                <button
                    className="btn btn-outline-primary"
                    onClick={() => setShowIngreso(true)}
                >
                    Ingreso
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => setShowGasto(true)}
                >
                    Gasto
                </button>
            </div>

            {/* Visualizaciones */}
            <div className="border rounded p-4 shadow-sm">
                <h4 className="text-center mb-4">{budgetName || "Nombre"}</h4>
                <div className="row text-center">

                    {/* Visualizacion Gastos */}
                    <div className="col-md-4 mb-3">
                        <div className="p-4 border rounded shadow-sm">
                            <h5>Gastos</h5>
                            <p>$0</p>
                        </div>
                    </div>

                    {/* Visualizacion Ingresos */}
                    <div className="col-md-4 mb-3">
                        <div className="p-4 border rounded shadow-sm">
                            <h5>Ingresos</h5>
                            <p>$0</p>
                        </div>
                    </div>

                    {/* Visualizacion Balance */}
                    <div className="col-md-4 mb-3">
                        <div className="p-4 border rounded shadow-sm">
                            <h5>Balance</h5>
                            <p>$0</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modales */}
            <AgregarIngreso
                show={showIngreso}
                handleClose={() => setShowIngreso(false)}
                onSave={handleSave}
            />

            <AgregarGasto
                show={showGasto}
                handleClose={() => setShowGasto(false)}
                onSave={handleSave}
            />

        </div>
    );
};