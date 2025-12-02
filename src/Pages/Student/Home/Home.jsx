import React from 'react';
import Hero from '../../../Components/Student/Hero/Hero';
import Companies from '../../../Components/Student/Companies/Companies';
import CoursesSection from '../../../Components/Student/CoursesSection/CoursesSection';
import TestimonialsSection from '../../../Components/Student/TestimonialsSection/TestimonialsSection';
import CallToAction from '../../../Components/Student/CallToAction/CallToAction';
import Footer from '../../../Components/Student/Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center space-y-7 text-center' >
                <Hero />
                <Companies/>
                <CoursesSection/>
                <TestimonialsSection/>
                <CallToAction/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;