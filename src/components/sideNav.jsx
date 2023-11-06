import React from 'react'
import navImage from '../assets/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideNav = () => {
  return (
    <div className='col-12 sideNav'>
        <div className="navBrand col-12">
            <div className="navimg col-2">
                <img src={navImage} alt="logo" width={50}/>
            </div>
            <div className="col-8">
                <h2 className='navName'>SM Services</h2>
            </div>
        </div>
        <div className="navlist">
            <h3 className='navlisthead'>Menu</h3>
            <div className="navitem col-12">
                <DashboardIcon/>
                <p>Dashboard</p>
            </div>
        </div>
    </div>
  )
}

export default SideNav