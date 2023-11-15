import React from 'react'
import ReactApexChart from "react-apexcharts";

const DashboardCardChart = ({
    value,
    color
}) => {
    const dashboardChartData = {
        series: [value],
        options: {
          chart: {
            height: 120,
            type: "radialBar",
          },
          colors:[color],
          plotOptions: {
            radialBar: {
              dataLabels:{
                value:{
                  offsetY:-10,
                  show: true,
                  fontSize:'12px',
                  fontWeight: 600,
                },
              },
              hollow: {
                size: "50%",
              }
            },
          },
          labels: [""],
          dataLabels: {
            show: true,
          },
        },
      };
  return (
    <div>
        <ReactApexChart
                options={dashboardChartData.options}
                series={dashboardChartData.series}
                type="radialBar"
                height={120}
              />
    </div>
  )
}

export default DashboardCardChart