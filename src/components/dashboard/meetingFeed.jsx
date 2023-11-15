import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MeetingFeed = () => {
  const meetingData = [
    {
      id: 1,
      week: 'Mon',
      date: 22,
      content: 'Interview',
      time: '9:00 am to 11:30 am',
    },
    {
      id: 2,
      week: 'Wed',
      date: 24,
      content: 'Meeting with Manager',
      time: '9:00 am to 11:30 am',
    },{
      id: 3,
      week: 'Fri',
      date: 25,
      content: 'Client Meeting',
      time: '9:00 am to 11:30 am',
    },
  ]
  return (
    <div>
      <div className="meeting-header col-12">
        <h4 className="card-head">Meetings</h4>
        <button className="icon">
        {React.cloneElement(<AddCircleIcon/>, {
                style: { fontSize: "2rem" },
              })}
        </button>
      </div>
      {meetingData.map((meetingData) => (
        <div key={meetingData.id} className="meeting">
          <div className="meeting-calender col-2">
            <h4 className="week">{meetingData.week}</h4>
            <p className="date">{meetingData.date}</p>
          </div>
          <div className="content col-8">
            <p className="content-head">{meetingData.content}</p>
            <p className="content-time">{meetingData.time}</p>
          </div>
          <div className="meeting-menu">
            {React.cloneElement(<MoreVertIcon/>,{
              style: {fontSize: "1.5rem"}
            })}
          </div>
      </div>
      ))}
      
    </div>
  )
}

export default MeetingFeed