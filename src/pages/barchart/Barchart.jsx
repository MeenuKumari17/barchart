import React, { useState, useEffect } from 'react';

import Chart from '../../component/chart/Chart';
import './barchart.scss';

function Barchart() {

    
  const [values, setValues] = useState([]);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // const yvals = [5,6,2,7,9,1,3,4,8,3,6,7];
    var arr = [5,6,2,7,9,1,3,4,8,3,6,7];

    const generate = () => {
      for(var i=0; i<12; i++) {
        arr[i] = Math.floor(Math.random() * 6) + 1;
      }
      setValues(arr);
      
      console.log(arr);
      
    }

    useEffect((e) => {
      
      generate();
      console.log("calling useEffect");
     
    }, [])

    const clickHandler = () => {
      window.location.reload();
    }
    

    
  return (
    <div className='barchart'>
      <div className="barchart-body">
        <Chart 
          xdim = {750}
          ydim = {500}
          margin= {{
            top: 80,
            bottom: 80,
            left: 120,
            right: 120
          }}

          xdata = {months}
          ydata = {values}
         

        />
        
      </div>
    <div>
      <button type='button' className='btn' onClick={clickHandler}>Generate</button>
    </div>
    </div>
  )
}

export default Barchart