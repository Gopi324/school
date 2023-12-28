import React, { useEffect } from 'react'
import './Student.css'
import { useState } from 'react'
import { Table, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
const { Column, HeaderCell, Cell } = Table;
function Student() {
    const Ref = useRef()
    const { studentMail } = useParams();
    const navigate = useNavigate()
    const { register, watch, reset, formState: { errors }, handleSubmit } = useForm()
    const [toggle, settoggle] = useState(false)
    const [drop, setdrop] = useState(false)
    const [attend, setattend] = useState([])
    const [table,settable] = useState([])
    const Index1 = toggle ? 1000 : 0;
    const Index2 = toggle ? 0 : 50;
    const Width1 = toggle ? '20%' : '0%';
    const Width2 = toggle ? '100%' : '100%';
    const [StuAtten, setIT] = useState(true)
    const Atten = StuAtten ? -1 : 2000;
    const data = [{
        name: 'Amy Weng',
        roll: 23,
        class: 12,
        gender: 'FEMALE',
        dob: '8-9-2005',
        mail: 'Aweng@getMaxListeners.com',
        pwd: 'Amyweng667',
        btn: true
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: null
    }, {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: null,
        mail: '',
        pwd: '',
        btn: ''
    }
    ]
    useEffect(() => {
        Fetching()
        Fetching_all()
    }, [])
    async function Fetching() {
        const first = await axios.get(`http://localhost:5000/attendance?email=${studentMail}`);
        setattend(first.data[0])
       
    }
    async function Fetching_all() {
        const first = await axios.get('http://localhost:5000/attendance');
        settable(first.data)
        console.log(table)

    }

    return (
        <div className='Teacher'>
            <div className='toggle' style={{ zIndex: Index1, width: Width1 }}>
                <div className='slate1'>
                    <i class="fa-regular fa-user userIcon "></i>
                    <i class="fa-solid fa-xmark cancelIcon" onClick={() => settoggle(!toggle)}></i>

                </div>
                <div className='slate2'>

                </div>
                <div className='slate3'>
                    <div className='LineDiv'>
                        <button className='btn' onClick={() => navigate('/Initial')}>
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
            <div className='static' style={{ zIndex: Index2, width: Width2 }}>
                <div className='upper' >
                    <i class="fa-solid fa-bars BarIcon" onClick={() => settoggle(!toggle)}></i>
                    <p className='HomeText'>HOME</p>
                    <img className='CollegeLog' src='https://www.schoolmykids.com/smk-media/2019/04/Satya-Narayan-Academy-School-Naarah-Bankura.png' />
                </div>
                <div className='Lower'>
                    <div className='gc1' onClick={() => navigate(`/Registeration/${studentMail}`)}>
                        STUDENT REGISTERATION
                    </div>
                    <div className='gc2' onClick={() => setIT(!StuAtten)}>
                        STUDENT ATTENDANCE
                    </div>
                    <div className='gc3'>
                        STUDENT RESULT
                    </div>
                    <div className='gc4'>
                        <input className='form-control' list='student' placeholder='Search by student name' />
                        <datalist id='student'>
                            <option value='Amy Weng' />
                            <option value='Sarah Jane' />
                            <option value='Marco melendez' />
                            <option value='Nathan Good' />
                            <option value='Leily' />
                            <option value='John David Good' />
                        </datalist>
                        <i class="fa-solid fa-magnifying-glass searchIcon"></i>
                    </div>
                    <div className='gc5 dropdown' onClick={() => setdrop(!drop)}>
                        Filter by class
                        <i class="fa-solid fa-caret-down Caret"></i>
                    </div>
                    {drop ? (<div className='gc6 shadow'>
                        <p>7th Class</p>
                        <p>8th Class</p>
                        <p>9th Class</p>
                        <p>10th Class</p>
                    </div>) : ''}
                    <div className='gc7 shadow ' style={{ zIndex: Atten }}>
                        <table className='table table-hover'>
                            <thead >
                                {attend.name && <p className='Name'>{attend.name}Annual Attendance</p>}
                                <tr>
                                    <th >
                                        Month
                                    </th>
                                    <th>
                                        Total Days
                                    </th>
                                    <th>
                                        Days Present
                                    </th>
                                    <th >
                                        Attendance Percentage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {attend.attendanceData && attend.attendanceData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.month}
                                        </td>
                                        <td>
                                            {item.totalDays}
                                        </td>
                                        <td>
                                            {item.daysPresent}
                                        </td>
                                        <td>
                                            {item.attendancePercentage}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='TableDiv'>
                        <Table className='Table'
                            height={'100%'}
                            width={'100%'}
                            data={table}
                            virtualized
                            headerCell
                            fillHeight={true}
                            rowHeight={49.95}
                            headerHeight={50}
                            headerStyle
                            onRowClick={rowData => {
                                console.log(rowData);
                            }}
                        >
                            <Column width={185} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Name</HeaderCell>
                                <Cell className={'ButtonCell'} dataKey='name' style={{ fontSize: '15px', fontWeight: 'bolder'}} />
                            </Column>
                            <Column width={150} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Roll</HeaderCell>
                                <Cell className='ButtonCell' dataKey="roll" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={150} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Class</HeaderCell>
                                <Cell className='ButtonCell' dataKey="class" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={185} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Gender</HeaderCell>
                                <Cell className='ButtonCell' dataKey="gender" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={185} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>DOB</HeaderCell>
                                <Cell className='ButtonCell' dataKey="dob" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={215} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Mail</HeaderCell>
                                <Cell className='ButtonCell' dataKey="email" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={185} align="center" >
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}>Password</HeaderCell>
                                <Cell className='ButtonCell' dataKey="pwd" style={{ fontSize: '15px', fontWeight: 'bolder' }} />
                            </Column>
                            <Column width={250} fixed="right">
                                <HeaderCell style={{ fontSize: '15px', backgroundColor: 'rgb(206,181,183)', color: 'black', fontWeight: 'bold' }}></HeaderCell>

                                <Cell className='ButtonCell' >
                                    {rowData => (
                                        <>
                                            <button className='Btn1 btn btn-primary ' onClick={() => alert(`id:${rowData.name}`)}>
                                                Edit
                                            </button>
                                            <button className='Btn2 btn btn-danger' onClick={() => alert(`id:${rowData.mail}`)}>
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </Cell>
                            </Column>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student