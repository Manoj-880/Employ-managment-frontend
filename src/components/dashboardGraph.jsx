import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardGraph = (
  {
    applications, shortlisted, rejected
  }
) => {
  const graphData = {
    series: [
      {
        name: "Applications",
        data: applications,
      },
      {
        name: "Shortlisted",
        data: shortlisted,
      },
      {
        name: "Rejected",
        data: rejected,
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      dataLabels:{
        enabled: false
      },
      colors:['#38cb89', '#ffa600', '#ff5630'],
      plotOptions: {
        bar: {
          columnWidth: '10%',
          horizontal: false,
          borderRadius: 3,
          dataLabels: {
            enabled:false,
          },
        },
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        labels:{
          format:"MMM",
        }
      },
      grid:{
        show:false,
      },
      legend: {
        position: "top",
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return <div className="col-12">
    <ReactApexChart options={graphData.options} series={graphData.series} colors={graphData.colors} type="bar" height={300} />
  </div>;
};

export default DashboardGraph;
