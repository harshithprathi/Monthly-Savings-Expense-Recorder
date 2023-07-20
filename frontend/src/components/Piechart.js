import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { Pie } from 'react-chartjs-2';
import '../../src/styles.css';
import { CategoryScale } from "chart.js";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



Chart.register(CategoryScale);

const PieChart = () => {
  const [chartData, setChartData] = useState('');
  const user_data=JSON.parse(localStorage.getItem('user'));
  const [month,setmonth]=useState('');
  const [opt, setopt]=useState([]);
  const [selectedoptions,handleselectedoptions] = useState('');
  const [finalshow,setfinalshow]=useState('');
  const navigate=useNavigate();
  const handleOptionChange = (event) => {
    // setmonth(event.target.value);
    const ind=month.indexOf(event.target.value);
    setChartData({...chartData, datasets:[{...chartData.datasets[0],data:selectedoptions[ind]}]});
    setfinalshow(selectedoptions[ind]);
    
    console.log('month', month,event.target.value, finalshow[ind], chartData,selectedoptions, ind);
  };

  useEffect(() => {
    fetchData();
   },[]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Process the form data or perform any desired action
//     console.log('Selected option:', month);
//   };

  
//   const [chartData, setChartData] = useState({
//     labels: ['Red', 'Orange', 'Blue'],
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: [1, 23, 96],
//         backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//         ],
//         borderColor: "black",
//         borderWidth: 2
//       }
//     ]
//   });
const fetchData = async () => {
    try {
      
      await axios.get(`http://127.0.0.1:4000/api/data1/dashboard/${user_data}/1`)
      .then((response) => {
        console.log('response',response.data.vals[0]);
        const datavals = response.data.vals[0];
        if(!datavals){
          alert('You are logged out, please login again.');
          navigate('/login');
        }
        console.log("datas",datavals);
        console.log('data piechart',datavals.columnS);
        let labels=[];
        if(datavals?.columnS?.length!==0)
        {
            // console.log("if condition",data)
            datavals?.columnS?.map((label,index)=>{
                if(index!==0){
                    labels.push(label.heading);
                }
            });
          console.log('labels',labels)
            let values1 = [];
            datavals?.rowS?.map((row)=>{
                values1.push(row);
            });
            console.log('values1',values1)
            let vals1=[];
            values1 && values1?.map((value)=>{
                vals1.push(value.cells);
            });

          //   let vals2=[];
            let period=[];
          //   let periodvals=[];
            const vals2=vals1&&vals1!=undefined && vals1?.map(val=>val.map(value=>value.value));
            const vals3=vals2&&vals2!=undefined && vals2?.map(val=>val[0]);
            const vals4=vals2&&vals2!=undefined && vals2?.map(val=>val.slice(1));
            const vals5=vals4&&vals4!=undefined && vals4?.map(val=>parseFloat(val[0]));
            setopt(vals3);
            labels[0]="Monthly Savings";
            const x=0;
            const periodvals=vals4&&vals4!=undefined && vals4?.map(val=>val.slice(1).map(value=>value));
          //   const expsum=periodvals.map((num)=>{
          //     num.reduce((accumulator,currentValue)=>{
          //         return accumulator + currentValue;
          //     },0);
          //   });
          const expsum = periodvals.map(subArray => {
              const sum = subArray.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue), 0);
              return sum;
            });
          for (let i=0; i<vals4.length; i++) {
              vals4[i][0]=vals5[i]-expsum[i];
          }
          setmonth(vals3);
          setfinalshow(vals4[0]);
          handleselectedoptions(vals4);
          //   vals2 && vals2!=undefined && vals2?.map((vlue)=>{
          //     period.push(...vlue.slice(0,1));
          //     periodvals.push(...vlue.slice(1));
          //   });
            console.log('vals2',vals2);
            console.log('vals3',vals3);
            console.log('vals4',vals4);
            console.log('vals5',vals5);
            console.log('periodvals',periodvals);
            console.log('x',x);
            console.log('expsum',expsum);
            const ind=opt.indexOf(month);
            console.log('ind',ind);
            console.log('vals4[ind]',vals4[ind]);
          //  console.log('vals2[0].map(vals2=>vals2.value),',vals2[0].map(vals2=>vals2.value))   ;
      //   const datavalue=vals2&&vals2[0].map(vals2=>vals2.value);
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Category wise expense',
              data: finalshow,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                
              ],
            },
            
          ],
        };

        setChartData(chartData);
        console.log('char data',chartData)
      }


      })
      .catch((error) =>{
        alert('You are logged out, please login again.');
        navigate('/login');
        console.log(error);
      });
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
 };


  console.log('chartData',chartData)
  return (
    <div className="pie-chart">
            <div>
                <label htmlFor="dropdown">Select an option:</label>
                <select id="dropdown" value={month} onChange={handleOptionChange}>
                <option value="">Select</option>
                {opt.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </div>
        {/* <h1>hello</h1>{console.log("fetched char data",chartData)} */}
        {chartData &&
        <Pie
        data={chartData}
        options={{
            plugins: {
              title: {
                display: true,
                text: "Expense distribution charts"
              }
            }
          }}
      
        /> }
    </div>
  );
};

export default PieChart;
