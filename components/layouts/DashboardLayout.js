import React from 'react'
import Navbar from '../molecules/Navbar'
import Sidebar from '../molecules/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className='clearfix relative bg-[#F7FAFC] w-screen h-screen overflow-auto'>
        <Sidebar />
        <div className='relative pl-[255px]'>
            <Navbar />
            <main className='py-[58px] pl-[18px] pr-[83px]'>
                {children}
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout