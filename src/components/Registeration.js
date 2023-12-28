import React, { useEffect, useState } from 'react'
import './Registeration.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Steps, Panel, Placeholder, ButtonGroup, Button } from 'rsuite';
import { useParams } from 'react-router-dom';
function Registeration() {
    const { studentMail } = useParams();
    const { register, watch,setFocus, reset, formState: { errors }, handleSubmit } = useForm();
    const [step, setStep] = React.useState(0);
    const navigate = useNavigate();
    const [fir, setfir] = useState(true)
    const [sec, setsec] = useState(false)
    const [thi, setthi] = useState(false)
    // const [tih,settih] = useState(false)
    function First() {
        const onSubFun = (data) => {
            console.log(data)
            if (data) {
                setsec(!sec);
                setfir(!fir);
            }
            onChangeFun(step + 1)
        }
        const onReset = () => {
            reset();
            navigate(`/Student/${studentMail}`)
        }
        return (
            <div className='Personal-Details shadow'>
                <form onSubmit={handleSubmit(onSubFun)}>
                    <div className='field-con'>
                        <p className='inputName'>Name</p>
                        <input onChange={()=>setFocus('name')} {...register('name', {
                            required: 'Name is required',
                            pattern: {
                                value: /^[A-Za-z ]{2,}$/,
                                message: 'Enter a valid name'

                            }
                        })} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Email</p>
                        <input {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Enter a valid mail'

                            }
                        })} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Age</p>
                        <input {...register('age', {
                            required: 'Age is required',
                            pattern: {
                                value: /^(1[89]|20|21|22|23)$/,
                                message: 'Enter a valid age'

                            }
                        })} />
                        {errors.age && <span>{errors.age.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Father name</p>
                        <input {...register('fname', {
                            required: 'Father Name is required', pattern: {
                                value: /^[A-Za-z ]{2,}$/,
                                message: 'Enter a valid name'

                            }
                        })} />
                        {errors.fname && <span>{errors.fname.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Mother name</p>
                        <input {...register('mname', {
                            required: 'Mother Name is required', pattern: {
                                value: /^[A-Za-z ]{2,}$/,
                                message: 'Enter a valid name'

                            }
                        })} />
                        {errors.mname && <span>{errors.mname.message}</span>}
                    </div>
                    <div>
                        <button style={{backgroundColor:'rgb(255,139,148)'}} className='btn' onClick={() => onReset()}>
                            Reset & Home
                        </button>
                        <button style={{backgroundColor:'rgb(168,230,207)'}} className='btn mx-2' type='submit'>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    function Second() {
        const onSubFun = (data) => {
            console.log(data)
            if (data) {
                setsec(!sec)
                setthi(!thi)
                onChangeFun(step + 1)
            }
        }
        const Previous = () => {
            onChangeFun(step - 1);
            setsec(!sec)
            setfir(!fir)
        }
        return (
            <div className='Academic-Details shadow'>
                <form onSubmit={handleSubmit(onSubFun)}>
                    <div className='field-con'>
                        <p className='inputName'>Recent Graduation</p>
                        <input onChange={()=>setFocus('g')} list='studies' {...register('g', {
                            required: 'Graduation is mandatory',

                        })} />
                        <datalist id='studies'>
                            <option value="Intermediate" />
                            <option value="Diploma" />
                        </datalist>
                        {errors.g && <span>{errors.g.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Graduation date</p>
                        <input type='date' {...register('date', {
                            required: 'Graduation date is required'
                        })} />
                        {errors.date && <span>{errors.date.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>GPA OR Percentage</p>
                        <input {...register('score', {
                            required: 'GPA is required'
                        })} />
                        {errors.score && <span>{errors.score.message}</span>}
                    </div>
                    <div className='field-con'>
                        <p className='inputName'>Branch of Study</p>
                        <input list='study' {...register('study', {
                            required: 'Branch of study is required'
                        }
                        )} />
                        <datalist id='study'>
                            <option value="Information Technology" />
                            <option value="Electrical and Electronic Engineering" />
                            <option value="Computer Science Engineering" />
                            <option value="Mechanical Engineering" />
                            <option value="Others/Not Listed" />
                        </datalist>
                        {errors.study && <span>{errors.study.message}</span>}
                    </div>
                    <div>
                        <button className='btn btn-secondary' onClick={() => Previous()}>
                            Previous
                        </button>
                        <button className='btn btn-primary mx-2' type='submit'>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    function Third() {
        const onSubFun = (data) => {
            console.log(data)
            if (data) {
                navigate(`/Student/${studentMail}`)
            }
        }
        const Previous = () => {
            onChangeFun(step - 1);
            setthi(!thi)
            setsec(!sec)
        }
        return (
            <div className='Legal-Acknowledgments shadow'>
                <form onSubmit={handleSubmit(onSubFun)}>
                    <div className='Check_Div'>
                        <p className='inputName'>1.Agreement to abide by the college's code of conduct</p>
                        <input onChange={()=>setFocus('codeconduct')} type='checkbox' {...register('codeconduct', {
                            required: 'Must agree to code of conduct',

                        })} />
                        {errors.codeconduct && <span>{errors.codeconduct.message}</span>}
                    </div>
                    <div className='Check_Div'>
                        <p className='inputName'>2.Consent to the college's privacy policy and data handling practices,Explanation of how personal information will be used and protected</p>
                        <input type='checkbox' {...register('privacypolicy', {
                            required: 'Must agree to privacy policy'
                        })} />
                        {errors.privacypolicy && <span>{errors.privacypolicy.message}</span>}
                    </div>
                    <div className='Check_Div'>
                        <p className='inputName'>3.Acceptance of the terms and conditions of enrollment, understanding of the academic and financial obligations</p>
                        <input type='checkbox' {...register('terms', {
                            required: 'Must agree to terms and conditons'
                        })} />
                        {errors.terms && <span>{errors.terms.message}</span>}
                    </div>
                    <div className='Check_Div'>
                        <p className='inputName'>4.Agreement not to engage in discriminatory behavior based on race, gender, religion, etc.</p>
                        <input type='checkbox' {...register('ipr', {
                            required: 'Must agree to intellectual property rights'
                        }
                        )} />
                        {errors.ipr && <span>{errors.ipr.message}</span>}
                    </div>
                    <div>
                        <button className='btn btn-secondary' onClick={() => Previous()}>
                            Previous
                        </button>
                        <button className='btn btn-primary mx-2' type='submit'>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    const onChangeFun = (param) => {
        setStep(param < 0 ? 0 : param > 3 ? 3 : param)
    }
    useEffect(()=>{
        setFocus('name')
        setFocus('g')
        setFocus('codeconduct')
    },[])
    return (
        <div className='Register-Parent'>
            <div className='Child1 '>
                <div className='mt-5'>
                    <Steps current={step} className='Stepstyle'>
                        <Steps.Item title="Personal Information" />
                        <Steps.Item title="Academic Information" />
                        <Steps.Item title="Legal Acknowledgments" />
                    </Steps>
                </div>
                <div className='d-flex flex-row justify-content-center mt-5'>
                    {fir ? <h2>Personal Information</h2> : ''}
                    {sec ? <h2>Academic Information</h2> : ''}
                    {thi ? <h2>Legal Acknowledgments</h2> : ''}
                </div>

            </div>
            <div className='Child2'>
                {fir ? <First /> : ''}
                {sec ? <Second /> : ''}
                {thi ? <Third /> : ''}
            </div>
        </div>
    )
}

export default Registeration