import React from "react";

export const Specific_view = () => {
	return (
		<div className="container pt-4">
			<div className="card text-center">
				<div className="card-header">Easy Parts CR</div>
				<div className="card-body">
					<h5 className="card-title">Nombre del repuesto</h5>
					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<div className="container col-6">
						<img
							src="https://rock95.com/wp-content/uploads/2017/01/14137284401_4f06e9f8c6_z-400x200.jpg"
							className="card-img-top "
							alt="..."
							width="50"
							height="200"
						/>
					</div>
					<a href="#" className="btn btn-success mt-4">
						Add to list
					</a>
				</div>
				<div className="card-footer text-muted">2 days ago</div>
			</div>
		</div>
	);
};
