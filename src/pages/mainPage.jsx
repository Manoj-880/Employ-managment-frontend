import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SideNav from '../components/sideNav'
import Dashboard from '../components/mainpage components/dashboard'
import Message from '../components/mainpage components/message'
import Calender from '../components/mainpage components/calender'
import Jobs from  '../components/mainpage components/jobs'
import Candidates from '../components/mainpage components/candidates'
import Refer from '../components/mainpage components/refer'
import Career from '../components/mainpage components/career'
import Employee from '../components/mainpage components/employee'
import Structure from '../components/mainpage components/structure'
import Report from '../components/mainpage components/report'
import Settings from '../components/mainpage components/settings'

const MainPage = () => {
  const [navActive, setnavActive] = useState(1);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname){
      case '/':
        setnavActive(1);
        break;
      case '/message':
        setnavActive(2);
        break;
      case '/calender':
        setnavActive(3);
        break;
      case '/jobs':
        setnavActive(4);
        break;
      case '/candidates':
        setnavActive(5);
        break;
      case '/refer':
        setnavActive(6);
        break;
      case '/careers':
        setnavActive(7);
        break;
      case '/employee':
        setnavActive(8);
        break;
      case '/structure':
        setnavActive(9);
        break;
      case '/report':
        setnavActive(10);
        break;
      case '/settings':
        setnavActive(11);
        break;
      default:
        setnavActive(1);
    }
  }, [location.pathname]);

  return (
    <div className='mainpage col-12'>
        <div className='col-2'>
            <SideNav navActive={navActive} setnavActive={setnavActive}/>  
          </div>
          <div className='main-component col-10'>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/message' element={<Message/>}/>
              <Route path='/calender' element={<Calender/>}/>
              <Route path='/jobs' element={<Jobs/>}/>
              <Route path='/candidates' element={<Candidates/>}/>
              <Route path='/refer' element={<Refer/>}/>
              <Route path='/careers' element={<Career/>}/>
              <Route path='/employee' element={<Employee/>}/>
              <Route path='/structure' element={<Structure/>}/>
              <Route path='/report' element={<Report/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>        
    </div>
  )
}

export default MainPage