import React, { useState } from 'react'
import {Timeline } from 'antd';
import './academic.css'
const Slc= () => {

    const [mode, setMode] = useState('left');
  const [toggle, setToggle] = useState(false)

  return (
    

    <>
      <div
            onClick={() => setToggle(!toggle)} 
            class="btn-academic">
          SLC
      </div>
      {toggle && ( <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
       
      )}
       
    </>
    

  
  )
}
export default Slc