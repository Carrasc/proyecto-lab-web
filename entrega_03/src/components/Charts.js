import React from 'react';

import {
  RadialChart,
} from 'react-vis';

import globalStyles from  '../styles/globalStyles'

export default function Charts(props) {
    const myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];
    const data = [];

    for (let i = 0; i < 20; i++) {
      const series = [];
      for (let j = 0; j < 100; j++) {
        series.push({x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)});
      }
      data.push({color: i, key: i, data: series, opacity: 0.8});
    }
  return (
    <div style = {globalStyles.mainContainer}>
        <div  style= {{textAlign:"center" ,margin:'3em 0 3em 0'}}>
            <h1 style = {globalStyles.bSecondaryTitleFont}>MEDU ESTADÍSTICAS</h1>
        </div>
        <div style={{width: props.width + 'px',  margin:' auto auto',display:'flex'}}>

        <RadialChart
            data={myData}
            width={props.width}
            height={props.width} />


      </div>
        

    </div>
  );
}