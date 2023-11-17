import React from 'react';
import random from '../../assets/clients/random.png';
import food from '../../assets/clients/food.png';
import halftone from '../../assets/clients/halftone.png';
import hotpot from '../../assets/clients/hotpot.png';

const RecentJobs = () => {
  const jobsFeed = [
    {
      id: 1,
      logo: random,
      role: 'Product designer',
      location: 'San Fransisco, USA',
      time: '1 hour ago',
    },
    {
      id: 2,
      logo: halftone,
      role: 'Cloud Engineer',
      location: 'Mumbai, IND',
      time: '2 days ago',
    },
    {
      id: 3,
      logo: food,
      role: 'Software Developer',
      location: 'London, UK',
      time: '20 days ago',
    },
    {
      id: 4,
      logo: hotpot,
      role: 'Store Manager',
      location: 'Hyderabad, IND',
      time: '1 Month ago',
    },
  ]
  return (
    <div className='recent-jobs col-12'>
      <h4 className="card-head mb-2">Recent Jobs</h4>
      {jobsFeed.map((jobsFeed) => (
        <div key={jobsFeed.id} className="jobs col-12">
          <div className="jobs-brand col-2">
            <img src={jobsFeed.logo} alt="client logo" width={40}/>
          </div>
          <div className="job-details col-9">
            <p className="role-name">
              {jobsFeed.role}
            </p>
            <div className="job-loc-time">
              <p>{jobsFeed.location}</p>
              <p>-</p>
              <p>{jobsFeed.time}</p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default RecentJobs