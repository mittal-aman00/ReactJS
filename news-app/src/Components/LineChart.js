import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashSidebar from './DashSidebar';
import "./DashSidebar.css";
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = () => {
    const [chartData, setChartData] = useState({})
    const [countryin, setcountryin] = useState(0)
    const [countryus, setcountryus] = useState(0)
    const [countryde, setcountryde] = useState(0)
    const [countryau, setcountryau] = useState(0)

    useEffect(() => {
        document.title = 'News App Dashboard'
        fetchChartData();
    }, [])

    const fetchChartData = async () => {
        const chartctryin = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartctryus = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartctryde = await fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartctryau = await fetch('https://newsapi.org/v2/top-headlines?country=au&apiKey=22efedcbac3a4054a419155c014ec57b')
        let parsedchartctryin = await chartctryin.json();
        let parsedchartctryus = await chartctryus.json();
        let parsedchartctryde = await chartctryde.json();
        let parsedchartctryau = await chartctryau.json();
        setcountryin(parsedchartctryin.totalResults)
        setcountryus(parsedchartctryus.totalResults)
        setcountryde(parsedchartctryde.totalResults)
        setcountryau(parsedchartctryau.totalResults)
        console.log(setcountryin)
        console.log(setcountryus)
    }

    const linechartdata = {
        labels: ['India', 'US', 'Germany', 'Australia', 'Canada', 'UK', 'Japan'],
        datasets: [{
          label: 'No. of Articles',
          data: [countryin,
            countryus,
            countryde,
            countryau,
            28, 15, 6],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };



    return (
        <>
            <div className='dashbrd' id="outer-container">
                {/* Router package to redirect to pages  */}
                <DashSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ marginLeft: '260px', marginTop: '60px' }}>
                <Line 
                    data={linechartdata}
                    width={1000}
                    height={500}
                    options = {{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: "News API Analytics - Country Wise "
                            },
                            legend: {
                                display: false,
                                position: "bottom"
                            }
                        },                
                    }
                }
                
                /> 
            </div>
        </>
    )
}

export default LineChart
