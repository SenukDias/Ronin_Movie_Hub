import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// API
import API from "../API";

// Components
import ButtonMore from "./ButtonMore";

// Styles
import { Wrapper } from "./Login.styles";

// Context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
        const requestToken = await API.getRequestToken();
        const sessionId = await API.authenticate(
            requestToken,
            username,
            password
        );
        
        console.log(sessionId);
        setUser({ sessionId: sessionId.session_id, username });

        navigate('/');

    } catch (error) {
        setError(true);
    }

  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
        {error && <div className='error'>There was an Errror !</div>}
      <label> Username :</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <ButtonMore text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
