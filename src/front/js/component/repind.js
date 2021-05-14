import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Repind = props => {
	const { store, actions } = useContext(Context);
	const { id1 } = useParams();
	console.log(store.provision[0]);

	//return provision.quantity == undefined ? () : (

	return (
		<>
			{/* {store.provision.map((item, index) => {
				if (id1 == index) {
					console.log("entro al if ....");
					return <li key={index}>{item.name} </li>;
				}
			})} */}

			<div className="bg-light p-5 rounded-lg m-3">
				<h1 className="display-4"></h1>

				<p className="lead"> {store.provision[id1].name}</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>

				<Link to="/repuesto">
					<button className="btn btn-primary">Go to character</button>
				</Link>
			</div>
		</>
	);
};
