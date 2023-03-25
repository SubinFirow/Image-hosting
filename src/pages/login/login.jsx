import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

function Login() {
  const validationSchema = yup.object().shape({
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
      <Grid item sx={{ mb: 3 }}>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
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
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#1976d2" }}>
            Create an account
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
