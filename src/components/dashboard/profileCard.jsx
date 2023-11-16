import React from 'react'
import m3 from '../../assets/avatars/m3.png'

const ProfileCard = () => {
  return (
    <div className="profilecard col-12">
        <img src={m3} alt="avatar" width={150}/>
        <h3>Thomas Flecture</h3>
        <p>Director of Recruiting</p>
    </div>
  )
}

export default ProfileCard