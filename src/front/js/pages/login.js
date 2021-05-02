import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Img from "../../img/engranaje.png";

export const Login = () => {
	return (
		<div>
			<div className="container-fluid bg-ColorClaro">
				<h1 className="text-left pl-0"> Mauricio APP</h1>
				<div className="row">
					<button type="button" className="btn btn-ColorAzulOscuro ml-2 col-2">
						Are new? Please Login Here!!
					</button>
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
							/>
							<label className="d-flex justify-content-center pt-5">
								<strong> Password </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="exampleFormControlInput1"
								placeholder="Password"
							/>
						</div>
						<div className="mr-5 col-lg-12 bg-ColorClaro ">
							<button type="button" className="btn btn-ColorAzulOscuro mr-3">
								Sign In
							</button>
							<button type="button" className="btn btn-ColorCeleste">
								Forgot Password
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
