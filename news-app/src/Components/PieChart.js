import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashSidebar from './DashSidebar';
import "./DashSidebar.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [artc, setartc] = useState([])
    const [srcbbclenght, setsrcbbclenght] = useState(0)
    const [srcndtv, setsrcndtv] = useState(0)
    const [srcwp, setsrcwp] = useState(0)

    useEffect(() => {
        document.title = 'News App Dashboard'
        fetchPieChartData();
    }, [])

    // const fetchPieChartData = async () => {
    //     const chartsrcbbc = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=22efedcbac3a4054a419155c014ec57b')
    //     const chartsrcndtv = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=22efedcbac3a4054a419155c014ec57b')
    //     const chartsrcwp = await fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=22efedcbac3a4054a419155c014ec57b')
    //     let parsedchartsrcbbc = await chartsrcbbc.json();
    //     let parsedchartsrcndtv = await chartsrcndtv.json();
    //     let parsedchartsrcwp = await chartsrcwp.json();
    //     setsrcbbc(parsedchartctryin.totalResults)
    //     setsrcndtv(parsedchartctryus.totalResults)
    //     setsrcwp(parsedchartctryde.totalResults)
    // }

    const fetchPieChartData = async () => {
        const chartsrc = await fetch('https://newsapi.org/v2/top-headlines?category=general&apiKey=22efedcbac3a4054a419155c014ec57b')
        let parsedchartsrc = await chartsrc.json();
        setartc(parsedchartsrc.articles)
        setsrcbbclenght(artc.filter(element => element.source.id === 'bbc-news').length)
            //  .map( (indelement) => { return indelement.length} )

        // setsrcbbc(parsedchartctryin.totalResults)
        // setsrcndtv(parsedchartctryus.totalResults)
        // setsrcwp(parsedchartctryde.totalResults)
    }

    const piechartdata = {
        labels: ['BBC', 'NDTV', 'Washington Post', 'MoneyControl', 'Times Of India', 'The Gaurdian'],
        datasets: [
          {
            label: 'News Source',
            data: [srcbbclenght, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

    return (
        <>
            <div className='dashbrd' id="outer-container">
                {/* Router package to redirect to pages  */}
                <DashSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <div style={{ marginLeft: '260px', marginTop: '60px' }}>
                <Pie data={piechartdata}
                     width={1200}
                     height={1200}
                     options = { {
                        responsive: true, }
                      } />
            </div>
            
        </>
    )
}

export default PieChart

