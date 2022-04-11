import UploadRoundedIcon from "@mui/icons-material/AddAPhoto";
import { Button, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

function Signup() {
  const [signForm, setSignForm] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "nzupcol6");
    try {
      setUploading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/barisertakus/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const dataFromUrl = await res.json();
      return dataFromUrl.url;
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (event) => {
    console.log(signForm);
    if (!image) return alert("Please upload your profile picture!");
    const url = await uploadImage(image);
    console.log(url)
  };

  const handleChange = (e) => {
    setSignForm({ ...signForm, [e.target.name]: e.target.value });
  };

  const validateUpload = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    if (file.size > 1048576) {
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
              <Link href="/login">
                <a>Already have an account? Sign in</a>
              </Link>
            </Grid>
          </Grid>
        </Form>
      </SignupContainer>
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
