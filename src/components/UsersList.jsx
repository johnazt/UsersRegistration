import CakeIcon from '@mui/icons-material/Cake';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";


const UsersList = ({ users, getUsers , selectUser}) => {
    
    
    const deleteUser = id => {
		axios
			.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
			.then(() => getUsers());
    };

	return (
        <div>
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
							<div className='birthday' ><CakeIcon/>{user.birthday}</div>
						</div>
						<div className="user-btn">
							<DeleteIcon onClick={() => deleteUser(user.id)}
								sx={{ color: "#D93F3F", cursor: "pointer" }}
								fontSize="large"
							></DeleteIcon>
							<EditIcon onClick={() => selectUser(user)}
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
