import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Student/Home/Home';
import CoursesList from './Pages/Student/CoursesList/CoursesList';
import CourseDetailsPage from './Pages/Student/CourseDetailsPage/CourseDetailsPage';
import MyEnrollments from './Pages/Student/MyEnrollments/MyEnrollments';
import Player from './Pages/Student/Player/Player';
import Loading from './Components/Student/Loading/Loading';
import Admin from './Pages/Admin/Admin/Admin';
import DashBoard from './Pages/Admin/DashBoard/DashBoard';
import AddCourse from './Pages/Admin/AddCourse/AddCourse';
import MyCourses from './Pages/Admin/MyCourses/MyCourses';
import StudentsEnrolled from './Pages/Admin/StudentsEnrolled/StudentsEnrolled';

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route  path='/courseList' element={<CoursesList/>} />
        <Route  path='/courseList/:input' element={<CoursesList/>} />
        <Route  path='/course/:id' element={<CourseDetailsPage/>} />
        <Route  path='/myEnrollments' element={<MyEnrollments/>} />
        <Route  path='/player/:courseId' element={<Player/>} />
        <Route  path='/loading/:path' element={<Loading/>} />
        

        <Route path='/admin' element={<Admin/>} >

          <Route path='admin' element={<DashBoard/>} />
          <Route path='addCourse' element={<AddCourse/>} />
          <Route path='myCourses' element={<MyCourses/>} />
          <Route path='studentsEnrolled' element={<StudentsEnrolled/>} />


        </Route>


        </Routes>
    </div>
  );
};

export default App;