import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] =useState("");
    const [image, setImage] =useState("");
    const [price, setPrice] =useState(0);
    return <div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Card variant="outlined" style={{width:400,padding:20,marginTop:80}}>
            <TextField 
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                fullWidth={true} 
                label="Title" variant="outlined"
            />
            <br/><br/>
            <TextField  
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}
                fullWidth={true} 
                label="Description" variant="outlined"
            />
            <br/><br/>
            <TextField  
                onChange={(e)=>{
                    setImage(e.target.value);
                }}
                fullWidth={true} 
                label="ImageLink" variant="outlined"
            />
            <br/><br/>
            <TextField  
                onChange={(e)=>{
                    setPrice(e.target.value);
                }}
                fullWidth={true} 
                label="Price" variant="outlined"
            />
            <br/><br/>
            <Button size={"large"}
                    variant="contained"
                    onClick={async()=>{
                        // let username=document.getElementById("username").value;
                        // let password=document.getElementById("password").value;
                        // fetch("http://localhost:3000/admin/courses",{
                        //     method:"POST",
                        //     body: JSON.stringify({
                        //         title: title,
                        //         description:description,   //if key & value same write as single
                        //         imageLink: image,
                        //         published:true
                        //     }),
                        //     headers:{
                        //         "Content-type":"application/json",
                        //         "Authorization" : "Bearer " + localStorage.getItem("token")
                        //     }
                        // }).then((res)=>{
                        //     res.json().then((data)=>{
                        //         //localStorage.setItem("token",data.token);
                        //         alert("course added!");
                        //     })
                        // })
                        await axios.post("http://localhost:3000/admin/courses",{
                            title: title,
                            description:description,  
                            imageLink: image,
                            published:true,
                            price: price
                        },{
                            headers:{
                                "Authorization" : "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Added course!");
                        navigate('/addCourse');
                    }}>Add Course</Button>
        </Card>
    </div>
    </div>
}

export default AddCourse;