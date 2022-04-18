import UploadRoundedIcon from "@mui/icons-material/AddAPhoto";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { useSignupUserMutation } from "../services/usersApi";

function Signup() {
  const [signForm, setSignForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signupUser, { isLoading, error }] = useSignupUserMutation();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const handleOpen = (message) => {
    setSnackbar({ open: true, message: message });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "nzupcol6");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/barisertakus/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const dataFromUrl = await res.json();
      handleOpen("Image uploaded successfully.")
      return dataFromUrl.url;
    } catch (error) {
      console.log(error);
      handleOpen("An error occurred while uploading the image.");
    }
  };

  const handleSubmit = async (event) => {
    //console.log(signForm);

    if (!image) return handleOpen("Please upload your profile picture!");
    setLoading(true);
    const url = await uploadImage(image);
    signupUser({ ...signForm, picture: url })
      .then((response) => {
        console.log(response);
        if (response.error) {
          handleOpen(response.error.data);
        } else {
          Router.push("/chat");
        }
      })
      .catch((error) => {
        console.log(error);
        handleOpen("Registration has failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSignForm({ ...signForm, [e.target.name]: e.target.value });
  };

  const validateUpload = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    if(!file){
      return;
    }
    else if (file.size > 1048576) {
      return alert("Max file size is 1Mb !");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <SignupContainer>
        <UserAvatar>
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", width: 100, height: 100 }}
            src={imagePreview || "/assets/robot.png"}
          />
          <input
            type="file"
            id="image-upload"
            hidden
            accept="image/png, image/jpg"
            onChange={validateUpload}
          />
          <label htmlFor="image-upload">
            <UploadIcon>
              <IconButton color="primary" component="span">
                <UploadRoundedIcon />
              </IconButton>
            </UploadIcon>
          </label>
        </UserAvatar>
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

          {loading ? (
            <Stack alignItems="center" margin={2}>
              <CircularProgress />
            </Stack>
          ) : (
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login">
                <a>Already have an account? Sign in</a>
              </Link>
            </Grid>
          </Grid>
        </Form>
      </SignupContainer>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Signup;

const UserAvatar = styled.div`
  position: relative;
  border: 2px dashed black;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UploadIcon = styled.div`
  position: absolute;
  bottom: -6px;
  right: -25px;
`;

const SignupContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 24px;
`;
