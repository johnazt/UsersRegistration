import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UserDelete from "./components/UserDelete";
function App() {
	const [users, setUsers] = useState([]);
	const [userSelected, setUserSelected] = useState(null);

	const deselectUser = () => setUserSelected(null);

	useEffect(() => {
		axios
			.get("https://users-crud1.herokuapp.com/users/")
			.then(res => setUsers(res.data));
	}, []);

	const getUsers = () => {
		axios
			.get("https://users-crud1.herokuapp.com/users/")
			.then(res => setUsers(res.data));
	};

	const selectUser = user => {
		setUserSelected(user);
	};


	return (
    <div className="App">
			<UsersForm
				getUsers={getUsers}
				userSelected={userSelected}
				deselectUser={deselectUser}
			></UsersForm>
			<UsersList
				users={users}
				getUsers={getUsers}
				selectUser={selectUser}
			></UsersList>
		</div>
	);
}

export default App;
