import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, FormControl, FormHelperText, FormLabel, ImageList, Input, Stack, Typography } from "@mui/material";


function Login() {

  let cridential = JSON.parse(localStorage.getItem("cridentialData")) || [];

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    var flag = false;
    for (var i = 0; i < cridential.length; i++) {
      if (
        cridential[i].email === email &&
        cridential[i].password === password
      ) {
        flag = true;

        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
		alert("successful");
      navigate("/dashboard");
    } else {
      alert("Wrong credentials.");
    }
  };

  return (
    <div>
      <Typography variant="h2" style={{marginTop:"50px"}}>Login</Typography>
      <FormControl style={{ width: "40%", margin: "auto",marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"40px" }}>
        <Stack spacing={4} direction="column">
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input  style={{
              backgroundColor: "green",
              fontWeight: "bold",
			  fontSize:"20px",
              color: "white",
              marginTop: "30px",
            }} type="submit" onClick={handleClick} />
        </Stack>
        <FormHelperText style={{margin:"auto", fontSize:"16px", marginTop:"10px"}} >
        We'll never share your Credential.{" "}
          <Link
            to={"/signup"}
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Singup Here
          </Link>
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Login;