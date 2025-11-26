import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {

	const navigate = useNavigate();

	return (
		<div className="footer">

			<div className="footer_title">
				<h4 className="">Tu familia...Tus metas... Tu Billetera Familiar!</h4>
			</div>

			<div className="footer_link">
				<Link to="/SobreNosotros" className="footer_link-descripcion btn">
					Sobre Nosotros
				</Link>
			</div>

			<div className="footer_copyright">
				<p>©2025. Billetera Familiar SA. Todos los derechos reservados.</p>
			</div>
		</div>
	)
};
