import { useState } from "react";
import FormInput from "./FormInput";
import { Button, Grid, Paper, TextField } from "@material-ui/core";

import { Link } from "react-router-dom";
const paperStyle = {
  padding: 20,

  width: 280,
  margin: "20px auto",
};
const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      errorMessage:
        "Firstname should be 3-16 characters and shouldn't include any special character!",
      label: "Firstname",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage:
        "Lastname should be 3-15 characters and shouldn't include any special character!",
      label: "Lastname",
      pattern: "^[A-Za-z]{3,15}$",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-10 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "phonenumber",
      type: "tel",
      placeholder: "Phonenumber",
      errorMessage: "It should be a valid phonenumber!",
      label: "Phonenumber",

      required: true,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-10 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <Grid>
        <Paper style={paperStyle} elevation={10}>
          <Grid style={{ alignItems: "center" }}>
          <center><h3>Register</h3></center>
          </Grid>

          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Button
              component={Link}
              to="#"
              color="primary"
              variant="contained"
              style={{ marginTop: 10 }}
            >
             Register
            </Button>
            <p>
              {" "}
              Already a User? <Link to={"/"}>Login</Link>{" "}
            </p>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
