import React from 'react'
import './Sidenav.css';
import { useState } from 'react';
import { Table, Button } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
const { Column, HeaderCell, Cell } = Table;
function Sidenav() {
    const [toggle, setToggle] = useState(false)
    const wid1 = toggle ? 1000 : 0;
    const wid2 = toggle ? 0 : 50;
    const studentdata = [{
        name: 'Amy Weng',
        roll: 23,
        class: 12,
        gender: 'Female',
        dob: '8-9-2005',
        mail: 'aweng@gmail.com',
        password: 'Amen567@@',
        button: 'yes'
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    },
    {
        name: '',
        roll: null,
        class: null,
        gender: '',
        dob: '',
        mail: '',
        password: '',
    }]
    const Style = { borderBottom: '2px solid green', }
    function Togglesidenav() {
        setToggle(!toggle)
    }
    return (
        <div className=' Outer'>
            <div className='ch1' style={{ zIndex: wid1 }} >
                <div className='tog1'>
                    <i class="fa-solid fa-xmark cancelIcon"onClick={Togglesidenav}></i>
                    <i class="fa-regular fa-user userIcon"></i>
                </div>
                <div className='tog2'>

                </div>
                <div className='tog3'>
                    <div className='ctog'>
                        <button className='btn btn-danger P-2 '>LOGOUT</button>
                    </div>
                </div>
            </div>
            <div className='ch' style={{ zIndex: wid2 }}>
                <div className='upperdiv'>
                    <i class="fa-solid fa-bars barIcon" style={{ color: 'white' }} onClick={Togglesidenav}></i>
                    <p className='BarHome'>HOME</p>
                    <img className='Logo' src='https://www.schoolmykids.com/smk-media/2019/04/Satya-Narayan-Academy-School-Naarah-Bankura.png' alt='error image' />
                </div>
                <div className='lowerdiv'>
                    <div className='div1'>
                        <p>STUDENT REGISTRATION</p>
                    </div>
                    <div className='div2'>
                        <p>STUDENT ATTENDANCE</p>
                    </div>
                    <div className='div3'>
                        <p>STUDENT RESULT</p>
                    </div>
                    <div className='div4'>
                    <i class="fa-solid fa-magnifying-glass searchIcon"></i>
                        <input className='form-control' list='students' placeholder='Search by student name'/>
                        <datalist id='students'>
                            <option value='Amy Weng'/>
                            <option value='Heather Nicole stuter'/>
                            <option value='Radev David'/>
                            <option value='Kamaru Usman'/>
                            <option value='Sarah'/>
                            <option value='Alberto Ramirez'/>
                        </datalist>
                        
                    </div>
                    <div className='div5 dropdown'>
                        <button type='btn' className='btn btn-lite dropdown-toggle' data-bs-toggle='dropdown'>Filter by class</button>
                        <ul className='dropdown-menu'>
                            <li ><a className='dropdown-item'>7th</a></li>
                            <li ><a className='dropdown-item'>8th</a></li>
                            <li ><a className='dropdown-item'>9th</a></li>
                            <li ><a className='dropdown-item'>10th</a></li>
                            <li ><a className='dropdown-item'>11th</a></li>
                        </ul>
                    </div>
                    <div className='Biggerdiv'>
                        <Table className='Table'
                            height={'100%'}
                            width={'100%'}
                            virtualized
                            headerCell
                            fillHeight={true}
                            data={studentdata}
                            rowHeight={63}
                            headerHeight={63}
                            headerStyle
                            onRowClick={rowData => {
                                console.log(rowData);
                            }}
                        >
                            <Column width={270} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }} >Name</HeaderCell>
                                <Cell dataKey="name" className='one' />
                            </Column>
                            <Column width={270} align="center">
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>Roll</HeaderCell>
                                <Cell dataKey="roll" className='one' />
                            </Column>
                            <Column width={270} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>Class</HeaderCell>
                                <Cell dataKey="class" className='one' />
                            </Column>
                            <Column width={270} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>Gender</HeaderCell>
                                <Cell dataKey="gender" className='one' />
                            </Column>
                            <Column width={270} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>DOB</HeaderCell>
                                <Cell dataKey="dob" className='one' />
                            </Column>
                            <Column width={270} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>Mail</HeaderCell>
                                <Cell dataKey="mail" className='one' />
                            </Column>
                            <Column width={290} align="center" >
                                <HeaderCell style={{ fontSize: '25px', fontWeight: 'bolder', backgroundColor: 'rgb(111,78,55)', color: 'white' }}>Password</HeaderCell>
                                <Cell dataKey="password" className='one' />
                            </Column>
                            <Column width={350} >
                                <HeaderCell style={{ backgroundColor: 'rgb(111,78,55)' }}></HeaderCell>
                                <Cell className='one'>
                                    {rowData => (
                                        <>
                                            {rowData.button ? (
                                                <><Button appearance="primary" style={{ width: '120px', fontSize: '20px' }} onClick={() => alert(`id:${rowData.name}`)}>
                                                    Edit
                                                </Button>
                                                    <Button style={{ backgroundColor: 'red', marginLeft: '10px', width: '120px', fontSize: '20px', color: 'white' }} onClick={() => alert(`id:${rowData.mail}`)}>
                                                        Delete
                                                    </Button>
                                                </>) : ''}
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

export default Sidenav