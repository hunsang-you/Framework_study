import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function app() {

  let data =  {
      labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20' ],
      datasets: [
        {
          type: 'line',
          label: '탑승인원',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [10, 20, 30, 40, 20, 30,],
          borderColor: 'red',
          borderWidth: 2,
        },
      ],
    };
    
	return (
    	<div>
        	<Line type="line" data={data} />
        </div>
    );
    
}

export default app;