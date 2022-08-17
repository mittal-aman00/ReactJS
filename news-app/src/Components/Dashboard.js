import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashSidebar from './DashSidebar';
import BarChart from './BarChart';
import "./DashSidebar.css";
import { Bar } from 'react-chartjs-2'

const Dashboard = (props) => {
    const [chartData, setChartData] = useState({})
    const [catsciencerecords, setcatsciencerecords] = useState(0)
    const [catbusinessrecords, setcatbusinessrecords] = useState(0)
    const [cattechnologyrecords, setcattechnologyrecords] = useState(0)
    const [catsportsrecords, setcatsportsrecords] = useState(0)

    useEffect(() => {
        document.title = 'News App Dashboard'
        fetchChartData();
        console.log(props.charttype)
    }, [])

    const fetchChartData = async () => {
        const chartcatscience = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartcatbusiness = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartcattechnology = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=22efedcbac3a4054a419155c014ec57b')
        const chartcatsports = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=22efedcbac3a4054a419155c014ec57b')
        let parsedchartcatscience = await chartcatscience.json();
        let parsedchartcatbusiness = await chartcatbusiness.json();
        let parsedchartcattechnology = await chartcattechnology.json();
        let parsedchartcatsports = await chartcatsports.json();
        setcatsciencerecords(parsedchartcatscience.totalResults)
        setcatbusinessrecords(parsedchartcatbusiness.totalResults)
        setcattechnologyrecords(parsedchartcattechnology.totalResults)
        setcatsportsrecords(parsedchartcatsports.totalResults)
    }

    const data1 = {
        labels: ['Science', 'Business', 'Technology', 'Sports', 'Health', 'Entertainment', 'Global'],
        datasets: [
            {
                label: 'No. of Articles',
                data: [catsciencerecords,
                    catbusinessrecords,
                    cattechnologyrecords,
                    catsportsrecords,
                    28, 40, 63],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1,
            }]
    }

    return (
        <>
            <div className='dashbrd' id="outer-container">
                {/* Router package to redirect to pages  */}
                <DashSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ marginLeft: '260px', marginTop: '60px' }}>
                {props.charttype === 'chart-category' &&
                    <BarChart chartData1={data1} />
                }
            </div>

        </>
    )
}

export default Dashboard
