import React from 'react'
import './Mainpage.css'
import { useState } from 'react'
import "rsuite/dist/rsuite.min.css";
import {Button} from 'rsuite';
import { Steps } from 'rsuite';
import Firstpage from './Firstpage.js';
function Mainpage() {
    const [step, setstep] = useState(0)
    const [firstpage,setfirstpage] = useState()
    const onFirstFun = (data)=>{
        setfirstpage(data)
    }
    const desc = step ? 'Finished' : 'In progress';
    const stepFun = () => {
        setstep(!step)
    }
    const onToggleFun = (data) => {
        setstep(data < 0 ? 0 : data > 3 ? 0 : data)

    }
    return (
        <div className='Maindiv'>
            <div className='neuro1'>
                <Steps current={step}>
                    <Steps.Item title='OFFICE USE'  />
                    <Steps.Item title='STUDENT PERSONAL INFORMATION'  />
                    <Steps.Item title='PARENT INFORMATION'  />
                    <Steps.Item title='UPLOAD DOCUMENTS' />
                </Steps>

            </div>
            <div className='neuro2' >
                <Firstpage onFirstFun = {onFirstFun} onToggleFun = {onToggleFun} step = {step} />
            </div>
        </div>
    )
}

export default Mainpage