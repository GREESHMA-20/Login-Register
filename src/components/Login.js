
import React from "react";
import {  Button, Grid, Paper, TextField } from "@material-ui/core";
import {Link} from 'react-router-dom'
const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
};

function Login() {
    return (
        <Grid>
            <Paper style={paperStyle} elevation={10}>
                <Grid style={{alignItems:"center"}}>
                   <center><h3>Login</h3></center>
                </Grid>
                
                
                <TextField
                    label='Username / E-mail'
                    placeholder='Enter your name'
                    fullWidth
                    required
                />

                
                <TextField
                    label='Password'
                    placeholder='Enter your Password'
                    fullWidth
                    required
                    type='password'
                    style={{
                        marginTop:20,
                    }}
                />

                <Button
                    fullWidth
                    type='submit'
                    color='primary'
                    
                    variant='contained'
                    style={{
                    marginTop:20,
                }}
                >
                     Login
                </Button>

                <p>
              {" "}
              Not a User? <Link to={"/Register"}>Register</Link>{" "}
            </p>
            </Paper>
        </Grid>
    );
}

export default Login;
