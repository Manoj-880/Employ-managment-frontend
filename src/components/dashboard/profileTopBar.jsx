import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import m3 from '../../assets/avatars/m3.png'

const ProfileTopBar = () => {
  return (
    <div className='profile-top-bar col-12'>
        <HelpIcon/>
        <NotificationsIcon/>
        <img className='profile-avatar' src={m3} alt="Avatar" width={24} />
    </div>
  )
}

export default ProfileTopBar