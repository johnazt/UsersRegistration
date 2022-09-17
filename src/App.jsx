import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function App() {
	const [users, setUsers] = useState([]);

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

	return (
		<div className="App">
			<UsersForm getUsers={getUsers}></UsersForm>
			<UsersList users={users} getUsers={getUsers}></UsersList>
		</div>
	);
}

export default App;
