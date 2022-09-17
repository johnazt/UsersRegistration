import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({getUsers}) => {
	const [close, setClose] = useState(false);
	const { register, handleSubmit } = useForm();

	function submit(data) {
		axios
            .post("https://users-crud1.herokuapp.com/users/", data)
            .then(() => getUsers())
			.catch(error => console.log(error.response));
	}

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
							placeholder="first name"
							{...register("first_name")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="last-name">Last Name</label>
						<input
							type="text"
							id="last-name"
							placeholder="last name"
							{...register("last_name")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="email"
							{...register("email")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="password"
							{...register("password")}
						/>
					</div>
					<div className="container-input">
						<label htmlFor="birthday">Birthday</label>
						<input type="date" id="birthday" {...register("birthday")} />
					</div>
					<button className="btn-form">Add new user</button>
				</form>
			</div>
		</>
	);
};

export default UsersForm;
