import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Graph({ progressData }) {
  
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (progressData && progressData.length > 0) {
            const ctx = chartRef.current.getContext('2d');
            const dates = progressData.map(entry => entry.date);
            const percentages = progressData.map(entry => entry.percentage);

            if (chartInstance.current) {
                chartInstance.current.destroy(); // Destroy previous chart instance
            }

            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Progress Percentage',
                        data: percentages,
                        fill: false,
                        borderColor: '#5A92CB',
                        backgroundColor: '#5A92CB',
                        tension: 0.1,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Percentage'
                            },
                            min: 0,
                            max: 100,
                            stepSize: 20, // Ensure ticks at intervals of 20
                            ticks: {
                                callback: function(value) {
                                    if (value === 0 || value === 20 || value === 40 || value === 60 || value === 80 || value === 100) {
                                        return value;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }, [progressData]);

    return (
        <div className='min-w-[312px] h-[213px] w-full mb-20 rounded-[12px] bg-[#282828] flex items-center justify-center'>
          <canvas ref={chartRef} />   
        </div>
    );
}

export default Graph;
