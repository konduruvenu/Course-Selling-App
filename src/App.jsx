import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import SignUp from "./SignUp.jsx";
import AppBar from "./Appbar.jsx";
import SignIn from './SignIn.jsx';
import AddCourse from './AddCourse.jsx';
import Courses from './Courses.jsx';
import Course from './Course.jsx';
import {
  RecoilRoot
} from 'recoil';

function App() {
  

  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#eeeeee"}}>
      <RecoilRoot>
      <Router>
        <AppBar></AppBar>
        <Routes>
          <Route path="/addCourse" element={<AddCourse/>}></Route>    
          <Route path="/course/:courseId" element={<Course/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
      </RecoilRoot>
    </div>
  )
}


export default App
