import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState();

  return (
    <div>
      <div>
          Login
        <input
        value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};
export default Login;
