import { Card, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "./atoms/courseState";
function Courses(){
    const [courses,setCourses] = useState([]);
    
    const setCourse = useSetRecoilState(courseState);
    setCourse({isLoading:true,course:null});
    useEffect(()=>{
        // fetch("http://localhost:3000/admin/courses",{
        //     method:"GET",
        //     headers:{
        //         "Authorization":"Bearer "+localStorage.getItem("token")
        //     }
        // }).then((res)=>{
        //     res.json().then((data)=>{
        //         setCourses(data.courses);
        //     })
        // })
        axios.get("http://localhost:3000/admin/courses",{
            headers : {
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(res =>{
            setCourses(res.data.courses)
        });
        // let data = response.data;
        // console.log(response.data);
        // setCourses(data.courses);
        
    },[]);
    return <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        
       {/* {JSON.stringify(courses)} // since courses is object  */}

        {courses.map(course =>{
            return <Course course={course}/>
        })}
    </div>
}

export function Course({course}){
    const navigate = useNavigate();
    return <Card style={{minHeight:200,
                        margin:10,
                        width:300,
                        padding:20}}>
        <Typography textAlign={'center'} variant="h5">{course.title}</Typography>
        <Typography textAlign={'center'} variant="subtitle1">{course.description}</Typography>
        <img src ={course.imageLink} style={{width:300,height:200}}/>
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
            <Button variant ="contained" size="large" 
                onClick={()=>{
                    navigate("/course/" + course._id)
                }}>Edit</Button>
        </div>
    </Card>
}
export default Courses;