import React from 'react'
import './Firstpage.css';
import { useForm } from 'react-hook-form';
import "rsuite/dist/rsuite.min.css"; 
import {onFirstFun,onToggleFun,step} from './Mainpage.js'
import { useNavigate } from 'react-router-dom';

function Firstpage({onFirstFun,onToggleFun,step}) {
    const navigate = useNavigate()
    const { register, watch, reset, formState: { errors }, handleSubmit } = useForm()
    const onSubFun =(data)=>{
        onFirstFun(data)
        if (data){
            onToggleFun(step +1)
            console.log(data)
        }
    }

    return (
        <div className='row parent'>
            <div className=' col level1'>
                <p className='Read'>FATHER'S DETAILS</p>
                <div className='gran'>
                    <p className='label'>Name</p>
                    <input type='text' {...register('fname', { required: 'Father name is required' })} />
                    {errors.fname && <span className='text-black font-weight-bold'>{errors.fname.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Age</p>
                    <input type='text' {...register('fage', { required: 'Father age is required' })} />
                    {errors.fage && <span className='text-black font-weight-bold'>{errors.fage.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Occupation</p>
                    <input type='text' {...register('foccupation', { required: 'Occupation is required' })} />
                    {errors.foccupation && <span className='text-black font-weight-bold'>{errors.foccupation.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Mother Tongue</p>
                    <input type='text' {...register('fmothertongue', { required: 'Mother tongue is required' })} />
                    {errors.fmothertongue && <span className='text-black font-weight-bold'>{errors.fmothertongue.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Income</p>
                    <input type='text' {...register('fincome', { required: 'Father income is required' })} />
                    {errors.fincome && <span className='text-black font-weight-bold'>{errors.fincome.message}</span>}
                </div>
            </div>
            <div className='col level2'>
                <p className='Read'>MOTHER'S DETAILS</p>
                
                <div className='gran'>
                    <p className='label'>Name</p>
                    <input type='text' {...register('mname', { required: 'Mother name is required' })} />
                    {errors.mname && <span className='text-black font-weight-bold'>{errors.mname.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Age</p>
                    <input type='text' {...register('mage', { required: 'Mother age is required' })} />
                    {errors.mage && <span className='text-black font-weight-bold'>{errors.mage.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Occupation</p>
                    <input type='text' {...register('moccupation', { required: 'Mother occupation is required' })} />
                    {errors.moccupation && <span className='text-black font-weight-bold'>{errors.moccupation.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Mother Tongue</p>
                    <input type='text' {...register('mmothertongue', { required: 'Mother tongue is required' })} />
                    {errors.mmothertongue && <span className='text-black font-weight-bold'>{errors.mmothertongue.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Income</p>
                    <input type='text' {...register('mincome', { required: 'Mother income is required' })} />
                    {errors.mincome && <span className='text-black font-weight-bold'>{errors.mincome.message}</span>}
                </div>
                <div className='ButCon'>
                    <button className='btn btn-ite' onClick={()=>navigate('/Initial')}>
                        Home
                    </button>
                    <button className='btn btn-ite' type='submit' onClick={handleSubmit(onSubFun)}>
                        Next
                    </button>
                </div>
                
            </div>
            <div className='col level3 '>
                <p className='Read'>GAURDIAN'S DETAIL</p>
                <div className='gran'>
                    <p className='label'>Name</p>
                    <input type='text' {...register('gname', { required: ' Gaurdian name is required' })} />
                    {errors.gname && <span className='text-black font-weight-bold'>{errors.gname.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Age</p>
                    <input type='text' {...register('gage', { required: 'Gaurdian age is required' })} />
                    {errors.gage && <span className='text-black font-weight-bold'>{errors.gage.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Occupation</p>
                    <input type='text' {...register('goccupation', { required: ' Gaurdian occupation is required' })} />
                    {errors.goccupation && <span className='text-black font-weight-bold'>{errors.goccupation.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Mother Tongue</p>
                    <input type='text' {...register('gmothertongue', { required: ' Gaurdian mother tongue is required' })} />
                    {errors.gmothertongue && <span className='text-black font-weight-bold'>{errors.gmothertongue.message}</span>}
                </div>
                <div className='gran'>
                    <p className='label'>Income</p>
                    <input type='text' {...register('gincome', { required: ' Gaurdian income is required' })} />
                    {errors.gincome && <span className='text-black font-weight-bold'>{errors.gincome.message}</span>}
                </div>
            </div>
        </div>
    )
}

export default Firstpage