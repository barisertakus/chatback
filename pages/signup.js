import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Signup() {
  const [signForm, setSignForm] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    console.log(signForm);
  };

  const handleChange = (e) => {
    setSignForm({ ...signForm, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <SignupContainer>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                onChange={handleChange}
                name="name"
                value={signForm.name}
                required
                fullWidth
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="username"
                value={signForm.username}
                fullWidth
                label="Username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="email"
                value={signForm.email}
                fullWidth
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={handleChange}
                name="password"
                value={signForm.password}
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Form>
      </SignupContainer>
    </Container>
  );
}

export default Signup;

const SignupContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 24px;
`;
