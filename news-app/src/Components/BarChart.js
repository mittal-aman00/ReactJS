import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = (props) => {
    return (
        <>
            <div>
                <Bar
                    data={props.chartData1}
                    width={1000}
                    height={500}
                    options = {{
                        plugins: {
                            title: {
                                display: true,
                                text: "News API Analytics - Category Wise "
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

export default BarChart
