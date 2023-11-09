import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReactApexChart from "react-apexcharts";
import "apexcharts/dist/apexcharts.css";

const Dashboard = () => {
  const dashboardChartData = {
    series: [10],
    options: {
      chart: {
        height: 120,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels:{
            value:{
              show: false
            },
            labels:{
              style:{
                colors:['#333333'],
                fontSize: "0.5rem"
              }
            }
          },
          hollow: {
            size: "50%",
          }
        },
      },
      labels: ["+74"],
      dataLabels: {
        show: true,
      },
    },
  };

  return (
    <div className="dashboard col-12">
      <div className="dashboard-main col-9">
        <div className="dash-greet">
          <h4>Dashboard</h4>
          <p>Hello, Thomas. Good Morning!</p>
        </div>
        <div className="dashboard-cards col-12">
          <div className="dashboard-card-item col-4">
            <div className="dashboard-card-content col-7">
              <p className="dashboard-card-title">Total Applications</p>
              <p className="dashboard-card-value">5674</p>
              <div className="dashboard-card-content-increment">
                <div className="dashboard-card-icon">
                  {React.cloneElement(<TrendingUpIcon />, {
                    style: { fontSize: "0.7rem" },
                  })}
                </div>
                <p className="dashboard-card-increment-value">+14% Inc</p>
              </div>
            </div>
            <div className="dashboard-card-chart col-5">
              <ReactApexChart
                options={dashboardChartData.options}
                series={dashboardChartData.series}
                type="radialBar"
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-profile col-3">profile</div>
    </div>
  );
};

export default Dashboard;
