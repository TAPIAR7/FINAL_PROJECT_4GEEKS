const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			register: [],
			registerStatus: [], // This the register request response
			resetStatus: [], // This the reset request response
			resetCode: [], // This is a code validation response
			passwordResponse: [],
			loginResponse: [],
			currentEmail: [],
			product: [],
			loginToken: [],
			loginName: [],
			loginLastName: [],
			logoutStatus: [],
			favs: [],
			cars: [] // Aquí se almacenan los modelos de los carros que genera la API
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadCars: async () => {
				const response = await fetch(
					"https://parseapi.back4app.com/classes/Car_Model_List?limit=20&excludeKeys=Category",
					{
						headers: {
							"X-Parse-Application-Id": "hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z", // This is the fake app's application id
							"X-Parse-Master-Key": "SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW" // This is the fake app's readonly master key
						}
					}
				);
				const data = await response.json(); // Here you have the data that you need
				const carsOb = data.results;
				console.log(JSON.stringify(carsOb, null, 2));
				setStore({ cars: carsOb });
			},

			loadProduct: async () => {
				const url = process.env.BACKEND_URL + "/api/product";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ product: data }); //variable global
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getUserbyID: position => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
						getActions().saveInSession("name", result[0].name);
						getActions().saveInSession("lastname", result[0].last_name);
						// setStore({ loginName: result.name });
						// setStore({ loginLastName: result.last_name });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			deleteUserbyID: position => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position, requestOptions)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("Error Deleting User", error));
			},
			postRegister: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/register", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ registerStatus: result }))
					.catch(error => console.log("Error registering user.", error));
			},
			postLogin: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
					.then(response => {
						if (response.ok) {
							setStore({ loginResponse: "Login Succesful!" });
							return response.json();
						} else {
							setStore({ loginResponse: "Invalid Credentials!" });
							return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						setStore({ loginToken: result });
						getActions().saveToken(result.token);
						getActions().saveInSession("id", result.idUser);
					})
					.catch(error => console.log("Error trying to login.", error));
			},
			postReset: email => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(email);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/reset", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ resetStatus: result }))
					.catch(error => console.log("Error trying to request a password change.", error));
			},
			registerStore: obj => {
				setStore({ register: obj });
			},
			saveEmail: emailIncoming => {
				sessionStorage.setItem("email", emailIncoming);
				setStore({ email: emailIncoming });
			},
			saveToken: tokenIncoming => {
				sessionStorage.setItem("token", tokenIncoming);
				setStore({ token: tokenIncoming });
			},
			saveInSession: (keyName, value) => {
				sessionStorage.setItem(keyName, value);
			},
			clearSession: () => {
				sessionStorage.removeItem("email");
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("id");
				sessionStorage.removeItem("name");
				sessionStorage.removeItem("lastname");
				setStore({ logoutStatus: "Logged out!" });
			},
			postValidation: data => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/reset/validation", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ resetCode: result }))
					.catch(error => console.log("Error validating code.", error));
			},

			putPassword: data => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/update", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ passwordResponse: result }))
					.catch(error => console.log("Error updating password.", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: fav => {
				setStore({ favs: getStore().favs.concat(fav) });
				console.log("favs", getStore().favs);
			},

			deleteFav: fav => {
				const deleteArray = getStore().favs.filter(erase => {
					return erase !== fav;
				});
				setStore({ favs: deleteArray });
			},
			getListbyID: position => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position + "/carlist")
					.then(response => response.json())
					.then(result => {
						console.log(result);
						getActions().saveInSessionArray("carrito", result);
					})
					.catch(error => console.log("Error loading list.", error));
			},
			// Este metodo lo que hace es agregar a la base de datos el producto al carrito por usuario
			postListbyID: (newData, position) => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/user/" + position + "/carlist", requestOptions)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							// setStore({ loginResponse: "Item added!" });
							// return response.json();
						} else {
							// setStore({ loginResponse: "It was not possible to add the item." });
							// return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						console.log("Item added!", result);
					})
					.catch(error => console.log("Error saving item.", error));
			},
			deleteListbyID: position => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/carlist/" + position, requestOptions)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("Error trying to delete from the list.", error));
			},
			saveInSessionArray: (keyName, value) => {
				let myJSONText = JSON.stringify(value); // Convierte de JSON a texto.
				sessionStorage.setItem(keyName, myJSONText);
			},
			getFromSessionArray: keyName => {
				let productText = sessionStorage.getItem(keyName);
				let productJSON = JSON.parse(productText); // Convierte de texto a JSON.
				return productJSON;
			},
			postProduct: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/product", requestOptions)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							// setStore({ loginResponse: "Item added!" });
							// return response.json();
						} else {
							// setStore({ loginResponse: "It was not possible to add the item." });
							// return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						console.log("Product added!", result);
					})
					.catch(error => console.log("Error saving product.", error));
			}
		}
	};
};

export default getState;
