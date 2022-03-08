import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRecipe, getDiets, getRecipes } from '../../actions/actions';
import Title from '../Title/Title';
import s from './FormRecipe.module.css';
import image from './assets/image.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

function FormRecipe() {

    const history = useHistory()
    
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)
    
    const [input, setInput] = useState({
        name: '',
        summary: '',
        score: '',
        healthScore: '',
        steps: '',
        diets: [],
        image: ''
    })

    console.log(diets)

    useEffect(() => {
        dispatch(getDiets())
        dispatch(getRecipes())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // setErrors(validate({
        //     ...form,
        //     [e.target.name]: e.target.value
        // }))
    }

    function handleDiets(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]

        })
        // setErrors(validate({
        //     ...form,
        //     [e.target.name]: e.target.value
        // }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRecipe(input))
        alert('Recipe created !!')
        setInput({
            name: '',
            summary: '',
            score: '',
            healthScore: '',
            steps: '',
            diets: [] 
        })
        history.push('/home')
    }

    return (
        <div>
            <Title />
            <div className={s.flex}>
                <div className={s.form}>
                    <p>Complete this form and create your own recipe!!</p>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className={s.inputs}>
                            <label className={s.label}>Name:</label>
                            <input type='text' value={input.name} name='name' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe name...'/>
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Summary:</label>
                            <textarea type='text' value={input.summary} name='summary' className={s.textarea} onChange={e => handleChange(e)} placeholder='Insert your recipe summary...'/>
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Score:</label>
                            <input type='number' value={input.score} name='score' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe punctuation...'/>
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Health score:</label>
                            <input type='number' value={input.healthScore} name='healthScore' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe health score...'/>
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Steps:</label>
                            <textarea type='text' value={input.steps} name='steps' className={s.textarea} onChange={e => handleChange(e)} placeholder='Insert your recipe steps...'/>
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Diets:</label>
                            <select onChange={e => handleDiets(e)}>
                                {
                                    diets.map(p => {
                                        return (
                                            <option key={p.id} value={p.name}>{p.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {
                                input.diets.map(d => (
                                    <li>{d}</li>
                                ))
                            }
                        </div>
                        <div className={s.inputs}>
                            <label className={s.label}>Image:</label>
                            <input type='text' value={input.image} name='image' onChange={e => handleChange(e)} className={s.input} placeholder='Insert image URL...'/>
                        </div>
                        <button type='submit' className={s.btn}>CREATE</button>
                    </form>
                </div>
                
                <div className={s.mosaico}>
                    <img src={image} className={s.img} alt='img not found' />
                    <img src={image2} className={s.img} alt='img not found' />
                    <img src={image3} className={s.img} alt='img not found' />
                    <img src={image4} className={s.img} alt='img not found' />
                    <img src={image5} className={s.img} alt='img not found' />
                    <img src={image6} className={s.img} alt='img not found' />
                </div>
                
            </div>
            
            
        </div>
    );
}

export default FormRecipe;