import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
import SideBar from '../../../Components/Admin/SideBar/SideBar';
import Footer from '../../../Components/Admin/Footer/Footer';

const Admin = () => {
    return (
        <div className='text-default min-h-screen bg-white' >
            <Navbar />
            <div className='flex' >
                <SideBar />
                <div className='flex-1' >
                    {<Outlet />}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Admin;