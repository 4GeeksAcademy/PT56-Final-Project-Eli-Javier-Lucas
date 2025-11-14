import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { validateToken } from "../js/auth";

export const Budget = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const check = async () => {

            const valid = await validateToken();

            if (!valid) {
                navigate("/login");
            }
        };

        check();
    }, []);

    return (
        <div className="container mt-5 d-flex flex-column">
            <div>
                Bienvenido (tal), haz tu presupuesto familiar aquí.
            </div>
        </div>
    )
}