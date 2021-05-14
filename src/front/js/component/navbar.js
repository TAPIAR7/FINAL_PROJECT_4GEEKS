import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const navFavorites = [
		{
			PartName: "Frenos",
			ImageUrl: "https://www.endado.com/blog/wp-content/uploads/2014/08/pastillas-de-freno.jpg"
		},
		{
			PartName: "Suspensión",
			ImageUrl:
				"https://talleractual.com/images/contenido/tecnica-al-dia/suspension-y-direccion/2018/09/2018-09-13-la-suspension-y-la-amortiguacion-01.jpg"
		},
		{
			PartName: "Aceite",
			ImageUrl: "https://www.autonocion.com/wp-content/uploads/2018/06/Aceite-motor-2.jpg"
		}
	];

	const getFavorites = navFavorites.map((item, index) => {
		return (
			<a key={index} className="dropdown-item" href="#">
				<div className="d-flex flex-row justify-content-between bd-highlight align-items-center">
					<img style={{ height: "30px" }} src={item.ImageUrl} alt="..." />
					<div className="p-2 bd-highlight">{item.PartName}</div>
					<button type="button" className="btn btn-light">
						<i className="fas fa-trash-alt" />
					</button>
				</div>
			</a>
		);
	});

	return (
		<nav className="navbar navbar-dark fixed-top mb-5 bg-dark justify-content-center mb-0">
			<div className="container">
				{/*Sección de marca*/}
				<div className="col d-flex justify-content-start">
					<Link to="/">
						<span className="navbar-brand mb-0 ">
							<i className="fas fa-cogs" /> &nbsp;EasyPartsCR
						</span>
					</Link>
				</div>

				{/*Accesos directos en centro*/}
				<div className="col d-flex justify-content-center">
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Productos</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/register">
						<span className="navbar-brand mb-0 ">Registro</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/">
						<span className="navbar-brand mb-0 ">Vender</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Soporte</span>
					</Link>
				</div>

				<div className="col d-flex justify-content-end">
					{/*Botón de inicio de sesión*/}
					<Link to="/login">
						<span className="navbar-brand mb-0 ">
							<i className="fas fa-user-circle fa-1x" />
							&nbsp; Iniciar sesión
						</span>
					</Link>

					{/*Menú de favoritos*/}
					<span className="dropdown d-flex align-items-center">
						<i
							className="fas fa-shopping-cart fa-2x dropdown-toggle align-middle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="badge badge-pill badge-light">{navFavorites.length}</span>
						</i>
						<div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
							{getFavorites}
							<div className="dropdown-divider" />
							<button type="button" className="btn btn-danger justify-content-center btn-block mb-0">
								Comprar &nbsp; <i className="fas fa-shopping-basket" />
							</button>
						</div>
					</span>
				</div>
			</div>
		</nav>
	);
};
