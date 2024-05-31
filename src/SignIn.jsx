import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
function SignIn(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return <div>
    
            <div style={{paddingTop:150,marginBottom:10,
            display:"flex",justifyContent:"center"}}>
                <Typography variant='h6'>
                Welcome to Coursea, Sign In below
                </Typography>
                
            </div>
        
        <div style={{display:"flex",justifyContent:"center"}}>
            <Card variant="outlined" style={{width:400,padding:20}}>
                <TextField fullWidth={true} 
                onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                label="Email" variant="outlined" />

                <br /><br/>
                <TextField fullWidth={true} 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                label="Password" variant="outlined"
                type={"password"} />

                <br/><br/>
                <Button size={"large"} variant="contained"
                 onClick={()=>{
                // async()=>{
                //     const response = await axios.post("http://localhost:3000/admin/login",{
                //         headers:{
                //             'Content-type':'application/json',
                //             username:email,
                //             password:password
                //         }
                //     })
                //         let data = response.data;
                //         localStorage.setItem("token",data.token);
                //         window.location = "/";
                //         //console.log(response.data);
                    fetch("http://localhost:3000/admin/login",{
                        method:"POST",
                        headers:{
                            username : email,
                            password : password
                        }
                    }).then((res)=>{
                        res.json().then((data)=>{
                            localStorage.setItem("token",data.token);
                            window.location = "/";
                        })
                    })
                    
                
                 }}>SignIn</Button>
            </Card>
        </div>
    </div>
}

export default SignIn;