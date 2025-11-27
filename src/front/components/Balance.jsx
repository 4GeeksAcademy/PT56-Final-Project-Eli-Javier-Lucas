import React from "react";
import { formatMoney } from "../js/utils"

export const Balance = ({ ingresos, gastos, moneda }) => {
    const totalIngresos = ingresos.reduce((sum, i) => sum + i.amount, 0);
    const totalGastos = gastos.reduce((sum, g) => sum + g.amount, 0);
    const disponible = totalIngresos - totalGastos;

    return (
        <div className="p-3 border rounded h-100">
            <h5 className="mb-3 text-center">Balance</h5>

            <div className="d-flex justify-content-between border-bottom py-2">
                <strong>Ingresos:</strong>
                <span className="fw-bold">
                    {formatMoney(totalIngresos, moneda)}
                </span>
            </div>

            <div className="d-flex justify-content-between border-bottom py-2">
                <strong>Egresos:</strong>
                <span className="fw-bold">
                    {formatMoney(totalGastos, moneda)}
                </span>
            </div>

            <div className="d-flex justify-content-between py-2">
                <strong>Disponible:</strong>
                <span className={`fw-bold ${disponible >= 0 ? 'text-primary' : 'text-danger'}`}>
                    {formatMoney(disponible, moneda)}
                </span>
            </div>
        </div>
    );
};