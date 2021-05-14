import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const ConfirmCode = () => {
	return (
		<div className="myLogin mt-5">
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-keyboard"></i>
				</div>
				<form className="needs-validation">
					<div className="form-group">
						<label className="exampleInputEmail1">Ingresar el código enviado al correo electrónico</label>
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							id="validationCustom01"
							required
						/>
					</div>
					<Link to="/changepassword">
						<button type="submit" className="btn btn-danger btn-block">
							Verificar
						</button>
					</Link>
					<hr className="my-3" />
					<Link to="/" className="d-flex justify-content-center">
						<p>Cancelar</p>
					</Link>
				</form>
			</div>
		</div>
	);
};
