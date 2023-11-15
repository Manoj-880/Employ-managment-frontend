import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MeetingFeed = () => {
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
      <div className="meeting">
        <div className="meeting-calender col-2">
          <h4 className="week">Mon</h4>
          <p className="date">10</p>
        </div>
        <div className="content col-9">
          <p className="content-head">Interview</p>
          <p className="content-time">9:00 am to 11:30 am</p>
        </div>
        <div className="meeting-menu">
          {React.cloneElement(<MoreVertIcon/>,{
            style: {fontSize: "1.5rem"}
          })}
        </div>
      </div>
    </div>
  )
}

export default MeetingFeed