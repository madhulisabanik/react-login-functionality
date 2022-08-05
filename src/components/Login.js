import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Login({setToken}) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        console.log('token', token)
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-input">
                        <p>Username</p>
                        <input type="text" className="form-control" onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <label className="text-input">
                        <p>Password</p>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className="form-group text-input">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }