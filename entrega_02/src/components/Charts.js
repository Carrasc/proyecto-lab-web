import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart
} from 'react-vis';

import global from '../styles/global'

export default function Charts(props) {
    const myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];

  return (
    <div style = {global.mainContainer}>
        <div  style= {{textAlign:"center" ,margin:'3em 0 3em 0'}}>
            <h1 style = {global.bSecondaryTitleFont}>MEDU ESTADÍSTICAS</h1>
        </div>
        <div style={{  width: props.width + 'px',margin:' 0 auto'}}>
        <XYPlot margin={{bottom: 70}} xType="ordinal" width={props.width} height={props.width}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
           
            <VerticalBarSeries
                data={[
                {x: 'Pediatría', y: 10},
                {x: 'Ginecología', y: 5},
                {x: 'Neurología', y: 16}
                ]}
            />
            <VerticalBarSeries
                data={[
                {x: 'Pediatría', y: 12},
                {x: 'Ginecología', y: 2},
                {x: 'Neurología', y: 11}
                ]}
            />
           
        </XYPlot>

        <RadialChart
            data={myData}
            width={props.width}
            height={props.width} />
      </div>
        

    </div>
  );
}