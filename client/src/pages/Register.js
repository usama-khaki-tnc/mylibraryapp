import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import api from '../api/index';

export default function Register() {
  const [ formState, setFormState ] = useState({email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.register({
        email: formState.email, password: formState.password
      });
      const token = response.data.token;
      Auth.login(token);
      setFormState({email: '', password: '' });
    } catch (e) {
      console.error(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return (
    <div className="body-container d-flex flex-column justify-content-center">
      <h1 className="text-center">Sign up</h1>
      <div className="auth-container">
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger' className="alert-button">
          Missing or incorrect information! Please try again.
        </Alert>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={handleChange} name="email" className="form-control" type="email" id="email" aria-describedby="emailHelp" value={formState.email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={handleChange} name="password" className="form-control" id="password" value={formState.password} type="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Sign up for free offers</label>
          </div>
          <button type="submit" className="btn btn-theme">Signup</button>
          <div className="mt-2">
            <a href="/login">Login instead</a>
          </div>
        </form>
      </div>
    </div>
  )
}