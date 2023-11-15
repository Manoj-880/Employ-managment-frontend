import React from 'react';
import m1 from "../../assets/avatars/m1.png";
import m2 from '../../assets/avatars/m2.png';
import f3 from '../../assets/avatars/f3.png'

const ActivityFeed = () => {
    const activity = [
        {
          id:1,
          avatar: m1,
          description:'Micky has applied for job UI/UX Designer',
          btnclass:'apply',
          time: '10 min ago',
          btncontent: 'Applying',
        },
        {
          id:2,
          avatar: f3,
          description:'Cassey created account as jobhunt',
          btnclass:'signup',
          time: '15 min ago',
          btncontent: 'Sign Up',
        },
        {
          id:3,
          avatar: m2,
          description:'Jhon has applied for job UI/UX Designer',
          btnclass:'apply',
          time: '1 day ago',
          btncontent: 'Applying',
        },
      ]
  return (
    <div>
        <h4 className="card-head">Activity Feed</h4>
            {activity.map((activity) => (
              <div key={activity.id} className="meeting col-12">
              <div className="avatar col-1">
                <img src={activity.avatar} alt="avatar" width={32} />
              </div>
              <div className="feed col-8">
                <p className="description">
                  {activity.description}
                </p>
                <p className="time">{activity.time}</p>
              </div>
              <div className={`feedstat ${activity.btnclass}`}>{activity.btncontent}</div>
            </div>
            ))}
    </div>
  )
}

export default ActivityFeed