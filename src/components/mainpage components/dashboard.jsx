import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "apexcharts/dist/apexcharts.css";
import DashboardCardChart from "../dashboard_card_chart";

const Dashboard = () => {
  
  const target = 1000;
  const total_applications = [20,10,5,30,10,80,20,10,0,12,2,5];
  const shortlisted = [2,5,6,1,10,5,3,10,12,8,6,3];
  const rejected = [1,3,0,20,3,10,50,3,0,20,5,4];

  var totalCount = 0;
  total_applications.forEach((e)=>totalCount+=e);
  const totalPercentage = Math.round((totalCount / target)*100);
  const totalIncrement = Math.round((total_applications[1] / target)*100);

  var totalShortlisted = 0;
  shortlisted.forEach((e) => totalShortlisted+=e);
  const shortlistedPecentage = Math.round((totalShortlisted / totalCount)*100);
  const shortlistedIncrement = Math.round((shortlisted[1] / totalCount)*100);

  var totalRejected = 0;
  rejected.forEach((e) => totalRejected+=e);
  const rejectedPercentage = Math.round((totalRejected / totalCount)*100);
  const rejecteedIncrement = Math.round((rejected[1] / totalCount)*100);

  const dashboardCard = [
    {
      id:1,
      name: "Total Applications",
      count:totalCount,
      percentage: totalPercentage,
      increment: totalIncrement,
      color:"#38cb89",
      iconBg:'#EBF7F5',
    },
    {
      id:2,
      name: "Shortlisted Candidates",
      count:totalShortlisted,
      percentage: shortlistedPecentage,
      increment: shortlistedIncrement,
      color:"#FFA600",
      iconBg:'#FFF8EE',
    },
    {
      id:3,
      name: "Rejected Candidates",
      count:totalRejected,
      percentage: rejectedPercentage,
      increment: rejecteedIncrement,
      color:"#FF5630",
      iconBg:'#FFF3EF',
    }
  ]

  return (
    <div className="dashboard col-12">
      <div className="dashboard-main col-9">
        <div className="dash-greet">
          <h4>Dashboard</h4>
          <p>Hello, Thomas. Good Morning!</p>
        </div>
        <div className="dashboard-cards col-12">
          {dashboardCard.map((dashboardCard) => (
            <div key={dashboardCard.id} className="dashboard-card-item col-xl-4 col-lg-3 col-md-6">
              <div className="dashboard-card-content col-7">
                <p className="dashboard-card-title">{dashboardCard.name}</p>
                <p className="dashboard-card-value">{dashboardCard.count}</p>
                <div className="dashboard-card-content-increment">
                  <div className="dashboard-card-icon" style={{backgroundColor:dashboardCard.iconBg, color:dashboardCard.color}}>
                    {React.cloneElement(<TrendingUpIcon />, {
                      style: { fontSize: "0.7rem" },
                    })}
                  </div>
                  <p className="dashboard-card-increment-value">{`+${dashboardCard.increment}% inc`}</p>
                </div>
              </div>
              <div className="dashboard-card-chart col-5">
                <DashboardCardChart value={dashboardCard.percentage} color={`${dashboardCard.color}`}/>
              </div>
            </div> 
          ))}
          
        </div>
      </div>
      <div className="dashboard-profile col-3">profile</div>
    </div>
  );
};

export default Dashboard;
