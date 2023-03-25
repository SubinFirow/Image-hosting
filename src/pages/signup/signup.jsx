import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase";
import { useEffect } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const register = (name, email, password) => {
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h4">Sign Up</Typography>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            register(values.name, values.email, values.password);
            navigate("/");
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default SignUp;
