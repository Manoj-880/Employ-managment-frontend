import React from 'react';
import f1 from '../../assets/avatars/f1.png';
import m1 from '../../assets/avatars/m1.png';
import f2 from '../../assets/avatars/f2.png';

const ProfileMessages = () => {
  const messageFeed = [
    {
      id: 1,
      avatar: f1,
      name: 'Cameron Williamson',
      message: 'Have you planned any deadline for UI/UX position ?',
    },
    {
      id: 2,
      avatar: m1,
      name: 'Jhone doe',
      message: 'Can i get an update about my interview?',
    },
    {
      id:3,
      avatar: f2,
      name: 'Clara',
      message: 'Can you please provide me the joining letter?'
    }
  ]
  return (
    <div className='messages col-12'>
      <h4 className="card-head mb-2">Messages</h4>
      {
        messageFeed.map((messageFeed) => (
        <div key={messageFeed.id} className="messageCard col-12">
          <div className="message-avatar col-2">
            <img src={messageFeed.avatar} alt="avatar" width={50}/>
          </div>
          <div className="message-details col-9">
            <p className="message-name">
              {messageFeed.name}
            </p>
            <p className="message-text">
              {messageFeed.message}
            </p>
          </div>
        </div>  
        ))
      }
      
    </div>
  )
}

export default ProfileMessages