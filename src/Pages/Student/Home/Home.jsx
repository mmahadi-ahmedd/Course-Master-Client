import React from 'react';
import Hero from '../../../Components/Student/Hero/Hero';
import Companies from '../../../Components/Student/Companies/Companies';
const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center space-y-7 text-center' >
                <Hero />
                <Companies/>
            </div>
        </div>
    );
};

export default Home;