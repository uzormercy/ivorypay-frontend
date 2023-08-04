import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';


const LineChart = () => {

    useEffect(() => {
        const data = {
            labels: [
                '01',
                '05',
                '10',
                '15',
                '20',
                '25',
                '30'
            ],
            datasets: [{
                label: 'Orders Delivered',
                data: [50, 80, 0, 200, 50, 100, 50, 200, 50, 100],
                fill: false,
                borderColor: '#1EF75B',
                tension: .0,
                pointStyle: false,
                pointBackgroundColor: '',
            }]
        };
        // 
        const ctx = document.getElementById('myLineChart');

        var chartExist = Chart.getChart("myLineChart"); // <canvas> id
        if (chartExist != undefined)  {
            chartExist.destroy(); 
        }

        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, ticks) {
                                return value + 'K';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }
        });
        
    }, []);


    return (
        <div className='h-full w-full relative'>
            <canvas id="myLineChart" className='h-full w-full'></canvas>
        </div>
    )
}

export default LineChart


