import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [notification, setNotification] = useState("");

	// // This is for redirect to a view
	// if (store.loginResponse.msg == undefined) {
	// } else if (store.loginResponse.msg == "Incorrect credentials. Please Try Again") {
	// 	// 	location.replace("/");
	// }

	const handleEmail = e => {
		setEmail(e.target.value);
	};
	const handleNotification = e => {
		setNotification("Incorrect credentials.");
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const resetRequest = () => {
		let temp = {
			email: email
		};
		actions.postReset(temp);
	};

	const accessLogin = () => {
		let temp = {
			email: email,
			password: password
		};
		actions.postLogin(temp);
	};
	return (
		<div className="myLogin mt-5">
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-user-circle fa-1x " />
				</div>
				<form className="needs-validation">
					<div className="form-group">
						<label className="exampleInputEmail1">Correo electrónico</label>
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							id="validationCustom01"
							required
						/>
					</div>
					<div className="form-group">
						<label className="exampleInputPassword1">Contraseña</label>
						<input type="password" className="form-control" id="validationCustom01" required />
					</div>
					<button type="submit" className="btn btn-danger btn-block">
						Ingresar
					</button>
					<div className="d-flex justify-content-center pt-2">
						<Link to="/recovery">Olvidaste tu contraseña?</Link>
					</div>
					<hr className="my-3" />
					<Link to="/register">
						<button type="submit" className="btn btn-dark btn-block">
							Crear cuenta
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
