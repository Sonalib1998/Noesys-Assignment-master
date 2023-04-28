import React, { useState, useRef } from 'react';
import './App.css';
import ReactECharts from 'echarts-for-react';
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';
import 'react-resizable/css/styles.css';

function App() {
  const chartRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleDrag = (event, { x, y }) => {
    setPosition({ x, y });
  };

  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        smooth: true,
      },
    ],
  };

  return (
    <div className="App">
      <Draggable handle=".drag-handle" position={position} onDrag={handleDrag}>
        <div
          className="chart-container"
          style={{ width: width, height: height }}
          ref={chartRef}
        >
          <Resizable
            className="resize-handle"
            width={width}
            height={height}
            onResize={handleResize}
          >
            <div className="drag-handle">
              <ReactECharts option={options} style={{ width: '100%', height: '100%' }} />
            </div>
          </Resizable>
        </div>
      </Draggable>
    </div>
  );
}

export default App;

