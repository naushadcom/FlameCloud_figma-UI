import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  ImageList,
  Input,
  Stack,
  Typography,
} from "@mui/material";

// import "./signup.css";
function Signup() {
  let cridential = JSON.parse(localStorage.getItem("cridentialData")) || [];
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    cridential.push(data);
    localStorage.setItem("cridentialData", JSON.stringify(cridential));
    navigate("/login");
    alert("successful");
  };

  return (
    <Box>
      <Typography variant="h2" style={{ marginTop: "50px" }}>
        Sign up
      </Typography>
      <FormControl
        style={{
          width: "40%",
          margin: "auto",
          marginTop: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "40px",
        }}
      >
        <Stack spacing={4} direction="column">
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />

          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Input
            style={{
              backgroundColor: "green",
			  fontSize:"20px",
              fontWeight: "bold",
              color: "white",
              marginTop: "30px",
            }}
            type="submit"
            onClick={handleClick}
          />
        </Stack>
        <FormHelperText style={{margin:"auto", fontSize:"16px", marginTop:"10px"}} >
          Already have an account ?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "underline",
              color: "blue",

            }}
          >
            Login Here
          </Link>
        </FormHelperText>
      </FormControl>
    </Box>
  );
}

export default Signup;
