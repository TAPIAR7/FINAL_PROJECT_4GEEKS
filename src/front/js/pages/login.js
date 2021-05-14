import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/login.scss";
import Img from "../../img/engranaje.png";
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
		<div className="container">
			<div className="container-fluid bg-ColorClaro">
				<h1 className="text-left pl-0"> Mauricio APP</h1>
				<div className="row">
					<a
						href="/register"
						className="btn btn-ColorAzulOscuro ml-2 col-4"
						role="button"
						aria-pressed="true">
						Are new? Please Login Here!!
					</a>
					{/* <Link to="/register">

						<button type="button" className="btn btn-ColorAzulOscuro ml-2 col-4">
							Are new? Please Login Here!!
						</button>
					</Link> */}
				</div>
			</div>

			<div className="row">
				<div className="bg-ColorClaro col-6">
					<img
						src="engranaje.png"
						className="img-thumbnail pt-5 pl-5 bg-ColorClaro border-0"
						alt="..."
						width="400"
						height="400"
					/>
				</div>
				<form />
				<div className="d-flex justify-content-end bg-ColorClaro pr-5 col-6">
					<div className="text-right row bg-ColorClaro">
						<div className="form-group widthForm col-lg-12 ">
							<label className="d-flex justify-content-center">
								<strong>Email address </strong>{" "}
							</label>
							<input
								type="mail"
								className="form-control "
								id="exampleFormControlInput1"
								placeholder="name@example.com"
								value={email}
								onChange={e => {
									handleEmail(e);
								}}
							/>
							<label className="d-flex justify-content-center pt-5">
								<strong> Password </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="exampleFormControlInput1"
								placeholder="Password"
								value={password}
								onChange={e => {
									handlePassword(e);
								}}
							/>
							<span className="text-danger d-flex justify-content-center pt-3">
								{store.loginResponse.msg}
							</span>
						</div>
						<div className="mr-5 col-lg-12 bg-ColorClaro ">
							<button
								type="button"
								className="btn btn-ColorAzulOscuro mr-3"
								onClick={() => accessLogin()}>
								Sign In
							</button>
							<Link to="/reset">
								<button type="button" className="btn btn-ColorCeleste" onClick={() => resetRequest()}>
									Forgot Password
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
