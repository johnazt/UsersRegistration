import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const UserDelete = ({ user, stateDelete, setStateDelete }) => {
	return (
		<>
			<div>
				<div
					className={stateDelete ? "container-form" : "container-form close"}
				>
					<div className="deleteMessage">
						<span onClick={() => setStateDelete(false)} className="close-form">
							<CloseIcon></CloseIcon>
						</span>
						<h2>User Deleted</h2>
						<p>
							The user{" "}
							<b>
								{user.first_name} {user.last_name}{" "}
							</b>
							has been deleted
						</p>
						<button
							className="btn-form margin-top"
							onClick={() => setStateDelete(false)}
						>
							Accept
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDelete;
