import React, { useState } from 'react'
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
  const rendercomponent = () => {
    switch(navActive) {
      case 1: return <Dashboard/>;
      case 2: return <Message/>;
      case 3: return <Calender/>;
      case 4: return <Jobs/>;
      case 5: return <Candidates/>;
      case 6: return <Refer/>;
      case 7: return <Career/>;
      case 8: return <Employee/>;
      case 9: return <Structure/>;
      case 10: return <Report/>;
      case 11: return <Settings/>;
      default: return <Dashboard/>;
    }
  }
  return (
    <div className='mainpage col-12'>
        <div className='col-2'>
          <SideNav navActive={navActive} setnavActive={setnavActive}/>  
        </div>
        <div className='main-component col-10'>
          {rendercomponent()}
        </div>
    </div>
  )
}

export default MainPage