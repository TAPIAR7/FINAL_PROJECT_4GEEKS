import React, { useContext } from "react";
import { Context } from "../store/appContext";
import icBuscar from "../../img/buscar.png";
import icTienda from "../../img/tienda.png";
import icSoporte from "../../img/consultante.png";
import icMan from "../../img/man.png";
import "../../styles/home.scss";

export const Homed = () => {
	// se crea un array de objetos que contiene las opciones del menú
	const Menu = [
		{
			imagen: icBuscar,
			descripcion: "En esta sección podrás encontrar tu repuesto aplicando criterios de búsqueda de tu vehículo"
		},
		{
			imagen: icTienda,
			descripcion: "En esta sección podrás inscribirte como anunciante"
		},
		{
			imagen: icMan,
			descripcion: "Registrate y obtén la posibilidad de realizar compras en línea y gestionar tus artículos"
		},
		{
			imagen: icSoporte,
			descripcion: "Si necesitas ayuda de un profesional para saber cuál repuesto necesitas puedes consultar aquí"
		}
	];

	// en el siguiente bloque se generan las tarjetas
	const getCards = Menu.map((item, index) => {
		return (
			<div
				key={index}
				className="card bg-ColorAzulClaro border border-dark pb-0"
				style={{ width: "16rem", height: "25rem" }}>
				<div className="container-fluid">
					<img src={item.imagen} className="card-img-top img-fluid pt-4 pb-3 rounded-top" alt="..." />
				</div>

				<div className="card-body  bg-light" style={{ "min-height": "8rem" }}>
					<p className="card-text text-center">{item.descripcion}</p>
				</div>
			</div>
		);
	});

	// retorna la vista home
	return (
		<div className="myHome">
			{/*Sección de Jumbotron*/}
			<div className="container">
				<div className="transbox">
					<h1 className="text-primary text-center">¿Necesitas un repuesto para tu vehículo?</h1>
					<h4 className="text-ColorAzulOscuro text-center">
						En este sitio podrás encontrar los repuestos disponibles de los distribuidores del país
					</h4>
				</div>
				{/*Sección de Cards*/}
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="card-deck card-columns">{getCards}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
