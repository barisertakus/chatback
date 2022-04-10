import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    // dispatch(login({ payload: loginForm, history: history }));
    console.log(loginForm);
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginContainer>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={loginForm.username}
            onChange={handleChange}
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="signup">
                <a>Dont have an account? Sign Up</a>
              </Link>
            </Grid>
          </Grid>
        </Form>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const LoginContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 8px;
`;
