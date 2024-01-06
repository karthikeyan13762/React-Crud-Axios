import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Update() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const updateUser = async () => {
    await axios.put(`https://659908a6a20d3dc41cef2cb9.mockapi.io/users/${id}`, {
      firstname,
      lastName,
      email,
    });
    setFirstname("");
    setLastName("");
    setEmail("");
    navigate("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstname(localStorage.getItem("firstname"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser();
  };

  return (
    <div>
      <div className="text-center">Update Operation</div>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <div className="form-group mt-3">
          <label htmlFor="name1">Name</label>
          <input
            required
            onChange={(event) => setFirstname(event.target.value)}
            value={firstname}
            type="text"
            className="form-control"
            id="name1"
            placeholder="FirstName"
          />
          <br />
          <label htmlFor="name2">Name</label>
          <input
            required
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            type="text"
            className="form-control"
            id="name2"
            placeholder="LastName"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
