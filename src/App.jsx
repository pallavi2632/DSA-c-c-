import React from 'react';
import MentorshipProgram from './pages/mentorshipProgram/MentorshipProgram';
import Courses from './pages/courses/Courses';
import Footer from './pages/footer/Footer'
import Hire from './pages/hire/components/Hire'
import HireFromUs from './pages/hireFromUs/HireFromUs';
import Skilled from './pages/Skilled/Skilled'

const App = () => {
  return (
    <div>
      <h1>Heading</h1>
      <Courses></Courses>
      {/* <MentorshipProgram></MentorshipProgram>
      <Footer></Footer>
      <Hire></Hire>
      <HireFromUs></HireFromUs>
      <Skilled></Skilled> */}
    </div>
  );
};

export default App;