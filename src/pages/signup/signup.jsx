import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

function SignUp() {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone: yup.string().required("Phone is required"),
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h4">SignUp</Typography>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            phone: "",
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
              <Field
                name="phone"
                as={TextField}
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
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
