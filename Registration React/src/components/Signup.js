import React from 'react'
import { Paper, Avatar, TextField,Button,Typography, Link } from '@material-ui/core'
import pics from './1.png'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRight'
import './Login.css'

export default function Signup() {
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
                        <div className = 'one'>
                        <TextField id="outlined-basic" label="FirstName" variant="outlined" required  className ='same'/>
                       <TextField id="outlined-basic" label="LastName" type='text' variant="outlined" className ='same'  required/>
                        </div>
                       <div className = 'two'>
                       <TextField id="outlined-basic" label="Email" type='email' variant="outlined" className ='same'  required/>
                       <TextField id="outlined-basic" label="Password" type='password' variant="outlined" className ='same'  required/>
                       </div>
                       <div className = 'three'>
                       <TextField id="outlined-basic" label="Country" type='text' variant="outlined" className ='same'  required/>
                       <TextField id="outlined-basic" label="Address" type='text' variant="outlined" className ='same'  required/>
                       </div>
                      <Button className = "ButtonStyle" variant="contained" size = "large" color = "primary" className ='same'  >
                          Signup
                          <ArrowRightAltIcon/>
                        </Button>
                    </div>
              </div>
          </Paper>
        </div>
    )
}
