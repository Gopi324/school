import React from 'react'
import { useState } from 'react'
import './Test.css';
function Test() {
    const [sizer,setsizer] = useState(false)
    const width1 = sizer ? 1000 : 0 ;
    const width2 = sizer ? 0 : 10 ;
    function myFun(){
        setsizer(!sizer)
    }
  return (
    <div className='ori'>
        <div className='fis' style={{zIndex:width1}}>
            one
        </div>
        <div className='sec' onClick={myFun} style={{zIndex:width2}}>
            two
        </div>
    </div>
  )
}

export default Test
    // < tr >
    //                                 <td>
    //                                     {attend.attendanceData && attend.attendanceData.map((item, index) => <td key={index}>{item.month}</td>)}
    //                                 </td>
    //                                 <td>
    //                                     {attend.attendanceData && attend.attendanceData.map((item, index) => <td key={index}>{item.totalDays}</td>)}
    //                                 </td>
    //                                 <td>
    //                                     {attend.attendanceData && attend.attendanceData.map((item, index) => <td key={index}>{item.daysPresent}</td>)}
    //                                 </td>
    //                                 <td>
    //                                     {attend.attendanceData && attend.attendanceData.map((item, index) => <td key={index}>{item.attendancePercentage}</td>)}
    //                                 </td>
    //                             </tr >