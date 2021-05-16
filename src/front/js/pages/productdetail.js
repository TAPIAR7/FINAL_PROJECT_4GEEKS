import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/productdetail.scss";

export const ProductDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    
	const [count, setCount] = useState(0);
	const [amount, setAmount] = useState(0);

	return (
		<div className="myProductDetail mt-5 ">
			<div className="container h-100">
				<div className="jumbotron p-3 mt-5 myJumbo">
					<div className="row d-flex">
						<div className="col">
							<img
								style={{ maxHeight: "400px", maxWidth: "520px" }}
								src={store.product[params.theIndx].enlace}
								alt="..."
							/>
						</div>
						<div className="col">
							<div className="d-flex justify-content-between">
								<h1 className="display-4">{store.product[params.theIndx].nombre}</h1>
							</div>
							<hr className="my-3" />
							<div className="row d-flex mt-2 mb-3">
								<div className="col d-flex">
									<h3>Precio:&nbsp; </h3>
									<h3 className="display-6 text-danger">{store.product[params.theIndx].precio}</h3>
								</div>
								<div className="col d-flex justify-content-center align-self-center">
									<h3>Cantidad:&nbsp; </h3>
									<button
										className="buttonCount"
										onClick={() => (count > 0 ? setCount(count - 1) : null)}>
										-
									</button>
									<button
										type="button"
										className="buttonCount"
										onChange={() => setAmount(price * count)}>
										&nbsp;
										{count} &nbsp;
									</button>
									<button className="buttonCount" onClick={() => setCount(count + 1)}>
										+
									</button>
								</div>
							</div>
							<div className="row d-flex mt-2 mb-3">
								<div className="col d-flex align-self-center">
									<h3>Total: &nbsp; </h3>
									<h3 className="display-6 text-danger">{amount}</h3>
								</div>
								<div className="col">
									<button className="btn btn-danger btn-lg btn-block" href="#" type="button">
										Comprar &nbsp; <i className="fas fa-shopping-basket" />
									</button>
								</div>
							</div>
							<table className="table">
								<tbody>
									<tr>
										<td>
											<strong>Marca:</strong>
										</td>
										<td>{store.product[params.theIndx].marca}</td>
									</tr>
									<tr>
										<td>
											<strong>Item:</strong>
										</td>
										<td>{store.product[params.theIndx].item}</td>
									</tr>
									<tr>
										<td>
											<strong>Código de parte:</strong>
										</td>
										<td>{store.product[params.theIndx].id}</td>
									</tr>
									<tr>
										<td>
											<strong>Vehículos compatibles:</strong>
										</td>
										<td>Toyota tercer 2013, Nissan centra 2011</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
