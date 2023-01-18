import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function app() {

  let data =  {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          type: 'line',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [10, 180 , -10, 30, 40, 20, 30,],
          borderColor: 'red',
          borderWidth: 1,
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