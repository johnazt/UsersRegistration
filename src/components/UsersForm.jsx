import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
	const [close, setClose] = useState(false);
	const { register, handleSubmit, reset } = useForm();

	function submit(data) {
		axios
			.post("https://users-crud1.herokuapp.com/users/", data)
			.then(() => getUsers())
			.catch(error => console.log(error.response));
		clear();
		setClose(false);
	}

	useEffect(() => {
		if (userSelected) {
			reset(userSelected);
			setClose(true);
		}
	}, [userSelected]);

	const clear = () => {
		reset({
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			birthday: "",
		});
		deselectUser();
	};

	return (
		<>
			<div className="container-add-btn">
				<h1 className="users__title">Users</h1>
				<button onClick={() => setClose(true)}>Add new User</button>
			</div>
			<div className={close ? "container-form" : "container-form close"}>
				<form className="form" onSubmit={handleSubmit(submit)}>
					<span onClick={() => setClose(false)} className="close-form">
						X
					</span>
					<h2 className="form__title">New User</h2>
					<div className="container-input">
						<label htmlFor="first-name">First Name</label>
						<input
							type="text"
							id="first-name"
							required
							placeholder="first name"
							{...register("first_name")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="last-name">Last Name</label>
						<input
							type="text"
							id="last-name"
							required
							placeholder="last name"
							{...register("last_name")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							required
							placeholder="email"
							{...register("email")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							required
							placeholder="password"
							{...register("password")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="birthday">Birthday</label>
						<input
							type="date"
							id="birthday"
							required
							{...register("birthday")}
						/>
					</div>
					<button className="btn-form">Add new user</button>
				</form>
			</div>
		</>
	);
};

export default UsersForm;
