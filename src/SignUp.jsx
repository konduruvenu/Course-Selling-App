import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';
import axios from "axios";

function SignUp(){
    //state management concept
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    return <div>
    
            <div style={{paddingTop:150,marginBottom:10,
            display:"flex",justifyContent:"center"}}>
                <Typography variant='h6'>
                Welcome to Coursea, Sign up below
                </Typography>
                
            </div>
        
        <div style={{display:"flex",justifyContent:"center"}}>
            <Card variant="outlined" style={{width:400,padding:20}}>
                <TextField 
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                fullWidth={true} 
                label="Email" variant="outlined" />

                <br /><br/>
                <TextField  
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                fullWidth={true} 
                label="Password" variant="outlined"
                type={"password"} />

                <br/><br/>
                <Button size={"large"}
                variant="contained"
                onClick={async()=>{
                    // let username=document.getElementById("username").value;
                    // let password=document.getElementById("password").value;
                    // fetch("http://localhost:3000/admin/signup",{
                    //     method:"POST",
                    //     body: JSON.stringify({
                    //         username:email,
                    //         password:password
                    //     }),
                    //     headers:{
                    //         "Content-type":"application/json"
                    //     }
                    // }).then((res)=>{
                    //     res.json().then((data)=>{
                    //         localStorage.setItem("token",data.token);
                    //         window.location="/"
                    //     })
                    // })
                    const response = await axios.post("http://localhost:3000/admin/signup",{
                        username : email,
                        password : password
                    })

                    let data = response.data;
                    localStorage.setItem("token",data.token);
                    window.location="/"
                    
                    // .then((response)=>{
                    //     let data = response.data;
                    //     localStorage.setItem("token",data.token);
                    //     window.location="/"
                    // });
                    
                }}>SignUp</Button>
            </Card>
        </div>
    </div>
}

export default SignUp;