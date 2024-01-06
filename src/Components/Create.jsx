import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const postData = async (event) => {
    event.preventDefault();
  

    try {
      await axios.post("https://659908a6a20d3dc41cef2cb9.mockapi.io/users", {
        firstname,
        lastName,
        email,
      });

      navigate("/read");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div>Create Operation</div>
      <form
        className="shadow-lg p-3 mb-5 bg-white rounded"
        onSubmit={(event) => postData(event)}
      >
        <div className="form-group mt-3 ">
          <label htmlFor="name1">Name</label>
          <input
            onChange={(event) => setFirstname(event.target.value)}
            value={firstname}
            type="text"
            className="form-control"
            id="name1"
            placeholder="FirstName"
            required
          />
          <br />
          <label htmlFor="name2">Name</label>
          <input
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            type="text"
            className="form-control"
            id="name2"
            placeholder="LastName"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
