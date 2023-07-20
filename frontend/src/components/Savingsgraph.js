import React, { useEffect, useState } from 'react';
import '../../src/styles.css';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

const SavingsGraph = () => {
  const [data, setData] = useState([]);
  const user_data=JSON.parse(localStorage.getItem('user'));
  const [labels,setlabels]=useState('');
  const [chartdata,setchartdata]=useState('');
  const navigate=useNavigate();
  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Savings Bar Chart",
      },
    },
  };

  useEffect(() => {
    // Simulating data retrieval from the database
    const fetchData = async () => {
      try {
        await axios.get(`http://127.0.0.1:4000/api/data1/dashboard/${user_data}/1`)
          .then((response) => {
            console.log('response',response.data.vals[0]);
            const datavals = response.data.vals[0];
            let graphdata=[];
            let finaldata=[];
            if(datavals.email===user_data){
              console.log("datas",datavals);
              let values=[];
              if(datavals?.columnS?.length!==0){
                  datavals&& datavals?.rowS.map((val,index)=>{
                      values.push(val.cells);
                  });
                  console.log("values",values);
  
                  
                  const arr1 = values&& values?.map(obj=>obj.map(vals=>vals.value));
                  const arr2= arr1&& arr1?.map(obj=>obj.slice(1));
                  const arr3= arr1&& arr1?.map(obj=>obj.slice(0,1)[0]);
                  setlabels(arr3);
                  const periodvals=arr2&&arr2!=undefined && arr2?.map(val=>val.slice(1).map(value=>value));
                  const vals5=arr2&&arr2!=undefined && arr2?.map(val=>parseFloat(val[0]));
                  const expsum = periodvals.map(subArray => {
                      const sum = subArray.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue), 0);
                      return sum;
                  });
                  for (let i=0; i<arr2.length; i++) {
                      graphdata.push(vals5[i]-expsum[i]);
                  }
                  setchartdata(graphdata);
                  console.log("arr1",arr1);
                  console.log("arr2",arr2);
                  console.log("arr3",arr3);
                  console.log("periodvals",periodvals);
                  console.log("graphdata",graphdata);
  
            }
              setData(graphdata);
                }
                else{
                  alert('You are logged out, please login again.');
                  navigate('/login');
                }
            
          })
          .catch((error) =>{
            alert('You are logged out, please login again.');
            navigate('/login');
            console.log(error);
          });
          
        
        // Replace this with your backend API call to fetch the data
        // const response = await fetch('http://127.0.0.1:4000/api/data1/dashboard');
        // const data = await response.json()|| {};
        // let datavals='';
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const bardata = {
    labels: labels,
    datasets: [
      {
        label: "Savings",
        data: chartdata,
        backgroundColor: "green",
      },
  
    ],
  
  };

  return (
    <div className="bar-chart">
      <h2>Bar Chart</h2>
      <div className="chart-container">
      <Bar options={option} data={bardata} />
        {/* <p>{data}</p> */}
        {/* {data.map((item, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${item}px` }}
            title={`${item}: ${item}`}
          ></div>
        ))} */}
      </div>
    </div>
  );
};

export default SavingsGraph;
