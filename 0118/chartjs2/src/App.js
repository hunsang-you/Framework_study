// npm install chart.js
// npm install react-chartjs-2 chart.js
// npm install styled-components

import './App.css';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js';
import months from './utils.js';
Chart.register(...registerables);

function App() {

  return (
    <div className="App">

      <Charts></Charts>
    </div>
  );
}



const labels = months({count: 60});

const data = {
  labels: labels,
  datasets: [{
    label : '',
    data: [65, 59, 80, 81, 56 , 20,30,40,50,60,32,50,43,15,32,54,76,89,39,94,50,19,39,69,79,39,29,38,68,48,69,79,39,65, 59, 80, 81, 56 , 20,30,40,50,60,32,50,43,15,32,54,76,89,39,94,50,19,39,69,79,39,29,38,68,48,69,79,39,65, 59, 80, 81, 56 , 20,30,40,50,60,32,50,43,15,32,54,76,89,39,94,50,19,39,69,79,39,29,38,68,48,69,79,39,65, 59, 80, 81, 56 , 20,54,40,50,60,32,50,43,15,32,54,76,89,39,94,50,19,39,69,79,39,29,38,68,48,69,79,  ],
    fill: true,
    borderColor: 'rgb(255, 0, 0)',
    backgroundColor: 'rgba(255, 0, 0,0.3)',
    tension: 0.1,
    borderWidth: 1,
    pointHoverBackgroundColor: 'blue',
    pointBorderColor : 'red',
  }]
};

const config = {
  type: 'line',
  data: data,
};

const options = {
    plugins :  {legend : {display : false},},
    spanGaps: true,
    hitRadius : 50,
    pointRadius : 2,
    scales: {
        y: {
          // y축 스케일링
            afterDataLimits: (scale) => {
              scale.max = scale.max * 1.2;
            },
            grid : {
              display : true,
            },
        },
        x: {
          // 표 그리드  없애기
          grid : {
            display : false,
          },
          //x축 라벨없애기
          ticks : {
            display : true,

          }
        },

        }
    
}


const Charts = () => {
  return (
    <Container>
      <Line type="line" data={data} config = {config} options = {options} />
    </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

// function Btn () {

//   const data = [12, 24, 36, 48 ,60]

//   return (
//     <div className='Btn'>
//       { data.map((a, i) => {
//         return <Btn data={data[i]} i={i}></Btn>
//       })}
//     </div>
//   )
// }


export default App;