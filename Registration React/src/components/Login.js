import './Login.css'
import React from 'react'
import { Paper, Avatar, TextField,Button,Typography, Link } from '@material-ui/core'
import pics from './1.png'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRight'
import Signup from './Signup';

export default function Login() {

    const signup = () => {
        return(
            <div> <Signup /></div>
        )
    }


    return (
        <div className = 'main grid'>
          <Paper elevation = {10} className = 'paper' >
              <div className ='secondary ui grid'>
                    <div className = 'div1'>
                        <img src ={pics} />
                        <hr />
                        <h1>Owners</h1>
                       <h2>Questionair</h2>
                    </div>
                    <div className = 'div2'>
                       <span><h3>Please enter your username</h3></span>
                       <span><h3>and password to login</h3></span>
                       <br />
                    <TextField id="outlined-basic" label="Username" variant="outlined" required  className ='same'/>
                       <br/><br/>
                       <TextField id="outlined-basic" label="Password" type='password' variant="outlined" className ='same'  required/>
                      <FormGroup>
                         <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                      </FormGroup>
                      <Button className = "ButtonStyle" variant="contained" size = "large" color = "primary" className ='same'  >
                          SignIn 
                          <ArrowRightAltIcon/>
                        </Button>
                        <br />
                        <Typography>
                            <Link href='#'> 
                            Forget Password?
                            </Link>
                        </Typography>
                        <Typography> <span>Do you have an account </span>
                            <Link href='#' onClick = {signup}> 
                               Signup
                            </Link>
                        </Typography>
                    </div>
              </div>
          </Paper>
        </div>
    )
}
