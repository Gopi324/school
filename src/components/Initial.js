import React, { useState } from 'react'
import './Initial.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import axios from 'axios';

function Initial() {
    const navigate = useNavigate();
    const { register, watch, reset, setFocus,formState: { errors }, handleSubmit } = useForm()
    const [studentdata, setdata] = useState([])
    const [passvisible, setpass] = useState(false)
    const [tumble, setTumble] = useState(false)
    const Email = watch('email');
    const Pwd = watch('pwd')
    const [OTPdata, setOTP] = useState({ first: '', second: '', third: '', fourth: '' })
    const onChangeFun = (e) => {
        const { name, value } = e.target;
        setOTP(prevState => ({ ...OTPdata, [name]: value }));
    }
    const onOTPfun = () => {
        const EntireOTP = OTPdata.first + OTPdata.second + OTPdata.third + OTPdata.fourth;
        const convertedOTP = parseInt(EntireOTP, 10)
        if (Ref.current == convertedOTP) {
            navigate(`/Student/${Email}`)
            toast.success('right otp is entered', { autoClose: 5000 })
        }
        else {
            toast.error('wrong otp is entered', { autoClose: 5000 })
        }
    }
    const Ref = useRef()
    const RandomFun = () => {
        const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        Ref.current = randomNum;
        toast.success(`here is your OTP for forgot password, ${Ref.current}`, { autoClose: 1000 })
    }
    const Beforehand = () => {
        if (studentdata.some((item) => item.email === Email)) {
            setTumble(!tumble)
            RandomFun()
        }
        else if (Email.trim() === '') {
            return toast.error('no mail has been entered', { autoClose: 5000 })
        }
        else {
            return toast.error('mail seems to not exist', { autoClose: 5000 })
        }
    }
    const Forgot = tumble ? 1000 : 0;
    const Login = tumble ? 0 : 1000;

    const OnSubmitFun = (data) => {
        navigate(`/Student/${Email}`)
    }
    const Validation = (email) => {
        const validate = studentdata.some((item) => item.email === email)
        return validate ? true : 'wrong email address'
    }
    const PWDValidation = (PWD) => {
        const Student = studentdata.find((item) => item.email === Email);
        const validate = Student && Student.pwd == PWD;
        return validate ? true : 'wrong password'
    }
    useEffect(() => {
        async function FetchD() {
            const Res = await axios.get('http://localhost:4000/students')
            console.log(Res.data)
            setdata(Res.data)
            
        }
        FetchD()
        
    }, []);
    useEffect(()=>{
        setFocus('email');
        const Nest = studentdata.some((item)=>item.email == Email)
        if(Nest){
            setFocus('pwd');
        }
    },[Email])
    return ( 
        <div className='Bottle'>
            <ToastContainer></ToastContainer>
            <div className='cap1'>
                <img className='img' src='https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702857600&semt=ais' />
            </div>
            <div className='cap2'>
                <img className='img-c' src='https://img.freepik.com/free-photo/classmates-with-thumb-up-classroom_1098-1243.jpg' />
            </div>
            <div className='cap3'>
                <img className='img' src='https://img.freepik.com/free-photo/classmates-holding-folders_1098-1068.jpg' />
            </div>
            <div className='cap4 d-flex flex-column justify-content-center align-items-center' style={{ zIndex: Login }}>
                <form onSubmit={handleSubmit(OnSubmitFun)}>
                    <div className='fo1'>

                        <p>EMAIL</p>
                        <input className='form-control' placeholder='kevinholland@yahoo.com'{...register('email', {
                            required: 'Email is required'
                        })}/>
                        {errors.email && <span className='text-white'>{errors.email.message}</span>}
                    </div>
                    <div className='fo2'>

                        <p>PASSWORD</p>
                        <div className='Container'>
                            <input className='form-control' type={passvisible ? 'text' : 'password'} {...register('pwd', { required: 'Password is required', validate: (PWD) => PWDValidation(PWD) })} />
                            {errors.pwd && <span className='text-white'>{errors.pwd.message}</span>}
                            <div className='Icon'>
                                {passvisible ? <i class="fa-solid fa-eye" onClick={() => setpass(!passvisible)} ></i> : <i class="fa-solid fa-eye-slash" onClick={() => setpass(!passvisible)}></i>}
                            </div>
                        </div>

                    </div>
                    <a style={{ color: 'blue' }} onClick={() => { Beforehand() }}>Forgot password?</a>
                    <div className='fo3'>
                        <button className='btn' type='submit'>
                            SUBMIT
                        </button>
                    </div>
                    <div className='fo4'>
                        <button className='btn'>
                            sign in with google
                        </button>
                    </div>
                </form>
            </div>
            <div className='Forgot' style={{ zIndex: Forgot }}>
                <p>Enter the OTP here</p>
                <div className='OTP'>
                    <form className='OTP' onSubmit={(e) => { e.preventDefault() }}>
                        <input className='form-control' maxLength={1} name='first' onChange={onChangeFun} value={OTPdata.first} />
                        <input className='form-control' maxLength={1} name='second' onChange={onChangeFun} value={OTPdata.second} />
                        <input className='form-control' maxLength={1} name='third' onChange={onChangeFun} value={OTPdata.third} />
                        <input className='form-control' maxLength={1} name='fourth' onChange={onChangeFun} value={OTPdata.fourth} />
                        <button className='btn btn-primary' onClick={() => onOTPfun()}>submit</button>
                    </form>
                </div>
            </div>
            <div className='cap0'>
                SATYANARAYAN ACADEMY
            </div>
            <div className='Logo'>
                <img src='https://www.schoolmykids.com/smk-media/2019/04/Satya-Narayan-Academy-School-Naarah-Bankura.png' />
            </div>
            <div className='Quotes'>
                <p>~Empowering the future with education and values</p>
                <p>~Empowering the future with education and values</p>
                <p>~Empowering the future with education and values</p>
            </div>
        </div>
    )
}

export default Initial