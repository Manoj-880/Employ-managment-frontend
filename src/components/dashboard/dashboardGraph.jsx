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
        name: "",
        data: [1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5],
      },
      {
        name: "Shortlisted",
        data: shortlisted,
      },
      {
        name: "",
        data: [1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5],
      },
      {
        name: "Rejected",
        data: rejected,
      },
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
            },
          },
        },
      ],
      dataLabels:{
        enabled: false
      },
      colors:['#38cb89','#fff', '#ffa600', '#fff', '#ff5630'],
      plotOptions: {
        bar: {
          columnWidth: '10%',
          horizontal: false,
          borderRadius: 3,
          dataLabels: {
            enabled:false,
          },
          barHeight:30,
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
        offsetY:-25,
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: "Statistics of active applicants",
        offsetY:10,
        offsetX: 10,
        align: "left",
        margin: 10,
        style: {
          fontSize: "16px",
          fontWeight: 600
        },
      },
    },
  };

  return <div className="col-12">
    <ReactApexChart options={graphData.options} series={graphData.series} colors={graphData.colors} type="bar" height={300} />
  </div>;
};

export default DashboardGraph;
