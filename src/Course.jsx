import { Card, Typography, TextField, Button} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "./atoms/courseState";
import { courseDescription, courseImage, courseLoading, coursePrice, courseTitle } from "./selectors/allSelectors";


function Course(){
    let {courseId} = useParams();
    console.log(courseId);
    const setCourse = useSetRecoilState(courseState);
    //const course = useRecoilValue(courseState);
    const isCourseLoading = useRecoilValue(courseLoading);
    console.log(isCourseLoading);
    useEffect(()=>{
        axios.get(`http://localhost:3000/admin/course/${courseId}`,{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log("inside useEffect")
            setCourse({isLoading: false,course : res.data.course});
        
        }).catch((e)=>{
            console.log("inside useEffect catch")
            setCourse({isLoading:false,course:null});
        })
    },[]);

    //  Error at this point
    
    if(isCourseLoading){
        console.log("course render");
        return <div>Loading...</div>
        
    }
    else{
        return <div style={{display:"flex",flexWrap:"wrap"}}>
            <CourseCard />
            <UpdateCard />
        </div>
    }
}

function UpdateCard(){
    //console.log("hi from update card");
    const setCourse = useSetRecoilState(courseState);
    const courseDetails = useRecoilValue(courseState);
    console.log(courseDetails);
    
    
    // const title = useRecoilValue(courseTitle);
    // const description =useRecoilValue(courseDescription);
    // const image =useRecoilValue(courseImage);
    // const price =useRecoilValue(coursePrice);
    const [useTitle,setTitle] = useState(courseDetails.course.title);
    const [useDescription,setDescription] =useState(courseDetails.course.description);
    const [useImage,setImage] =useState(courseDetails.course.imageLink);
    const [usePrice,setPrice] =useState(courseDetails.course.price);
    console.log("updatecard render");
        
    return <div>
        <div style={{display:"flex",justifyContent:"center"}}>
           <Card variant="outlined" style={{width:400,padding:20}}>
                <Typography>Update Course Details</Typography>
                <TextField value={useTitle}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    style={{marginBottom: 10}}
                    fullWidth={true} 
                    label="Title" variant="outlined"
                />
                <br/><br/>
                <TextField  value={useDescription}
                    style={{marginBottom: 10}}
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                    fullWidth={true} 
                    label="Description" variant="outlined"
                />
                <br/><br/>
                <TextField value={useImage}
                    onChange={(e)=>{
                        setImage(e.target.value);
                    }}
                    style={{marginBottom: 10}}
                    fullWidth={true} 
                    label="ImageLink" variant="outlined"
                />
                <br/><br/>
                <TextField value={usePrice}
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }}
                    fullWidth={true}
                    style={{marginBottom: 10}} 
                    label="Price" variant="outlined"
                />
                <br/><br/>
                <Button size={"large"}
                        variant="contained"
                        onClick={()=>{
                            fetch("http://localhost:3000/admin/courses/"+courseDetails.course._id,{
                                method:"PUT",
                                body: JSON.stringify({
                                    title: useTitle,
                                    description:useDescription,   //if key & value same write as single
                                    imageLink: useImage,
                                    published:true,
                                    price : usePrice
                                }),
                                headers:{
                                    "Content-type":"application/json",
                                    "Authorization" : "Bearer " + localStorage.getItem("token")
                                }
                            });
                                    
                            let updatedCourse = {
                                _id:courseDetails.course._id,
                                title:useTitle,
                                description:useDescription,
                                imageLink:useImage,
                                price:usePrice
                            };
                            
                            console.log(updatedCourse);
                            setCourse({isLoading:false,course:updatedCourse});
                                
                            
                        }}>Update Course</Button>
            </Card>
        </div>
    </div>   
}

function CourseCard(){

    const title = useRecoilValue(courseTitle);
    const description = useRecoilValue(courseDescription);
    const price = useRecoilValue(coursePrice);
    const imageLink = useRecoilValue(courseImage);
    console.log("coursecard re-render");
    console.log(title);
    return <Card style={{minHeight:200,
        margin:10,
        width:300}}>
        <Typography textAlign={'center'} variant="h5">{title}</Typography>
        <Typography textAlign={'center'} variant="subtitle1">{description}</Typography>
        <Typography textAlign={'center'} variant="subtitle1">{price}</Typography>
        <img src ={imageLink} style={{width:300}}/>
    </Card>
    
}


export default Course;

