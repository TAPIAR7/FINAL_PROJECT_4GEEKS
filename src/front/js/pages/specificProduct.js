import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
import { Specific_view } from "../component/specific_product";

export const Specific_product = () => {
	const { store, actions } = useContext(Context);
	return (
		<Specific_view name={name} description={description}>
			{" "}
		</Specific_view>
	);
};
