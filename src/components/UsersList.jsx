import CakeIcon from "@mui/icons-material/Cake";
import DeleteIcon from "@mui/icons-material/Delete";
import UserDelete from "./UserDelete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useState } from "react";

const UsersList = ({ users, getUsers, selectUser }) => {
	const [stateDelete, setStateDelete] = useState(false);
	const [user, setUser] = useState(null);

	const deleteUser = user => {
		setStateDelete(true);
		setUser(user);
		axios
			.delete(`http://144.126.218.162:9000/users/${user.id}/`)
			.then(() => getUsers());
	};

	return (
		<div>
			{stateDelete && (
				<UserDelete
					user={user}
					stateDelete={stateDelete}
					setStateDelete={setStateDelete}
				/>
			)}

			<ul className="container-users">
				{users.map(user => (
					<div key={user.id} className="container-user">
						<div className="user-name">
							{user.first_name} {user.last_name}
						</div>
						<div className="user-info">
							<span>EMAIL</span>
							<div className="email">{user.email}</div>
							<span>BIRTHDAY</span>
							<div className="birthday">
								<CakeIcon />
								{user.birthday}
							</div>
						</div>
						<div className="user-btn">
							<DeleteIcon
								onClick={() => deleteUser(user)}
								sx={{ color: "#D93F3F", cursor: "pointer" }}
								fontSize="large"
							></DeleteIcon>
							<EditIcon
								onClick={() => selectUser(user)}
								sx={{ color: "#ccc", cursor: "pointer" }}
								fontSize="large"
							></EditIcon>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default UsersList;
