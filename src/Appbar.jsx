import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppBar(){
    const navigate = useNavigate();
    const [userEmail, setUserEmail]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/me",{
            method:"GET",
            headers:{
                "Authorization" : "Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                if(data.username){
                    setUserEmail(data.username)
                }
            })
        })
    },[]);

    if(userEmail){
        return <div style={{display:"flex",
                    justifyContent:"space-between",
                    padding:4}}>
                    <div>
                        <Typography>Courses</Typography>
                    </div>

                    <div style={{display:"flex"}}>
                        <div>
                            {userEmail}
                        </div>
                        <div style={{marginRight:10}}>
                            <Button variant={"contained"}
                            onClick={()=>{
                                navigate("/courses")
                            }}>Courses</Button>
                        </div>
                        <div style={{marginRight:10}}>
                            <Button variant={"contained"}
                            onClick={()=>{
                                navigate("/addcourse") 
                            }}>AddCourse</Button>
                        </div>
                        <div style={{marginRight:10}}>
                            <Button variant={"contained"}
                            onClick={()=>{
                                //window.location="/signup"
                                localStorage.setItem("token",null);
                                window.location = "/";
                            }}>Logout</Button>
                        </div>
                    
                    </div>
                </div>
    }
    return <div style={{display:"flex",
                        justifyContent:"space-between",
                        padding:4}}>
        <div>
            <Typography>Courses</Typography>
        </div>
        
        <div style={{display:"flex"}}>
            <div style={{marginRight:10}}>
                <Button variant={"contained"}
                onClick={()=>{
                    //window.location="/signup"
                    navigate("/signup")
                }}>SignUp</Button>
            </div>
            <div>
                <Button variant={"contained"}
                onClick={()=>{
                    //window.location="/signin"
                    navigate("/signin")
                }}>SignIn</Button>
            </div>
        </div>
    </div>
}

export default AppBar;