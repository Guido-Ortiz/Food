import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRecipe, getDiets, getRecipes } from '../../actions/actions';
import Title from '../Title/Title';
import s from './FormRecipe.module.css';
import validate from './utils/validate';


function FormRecipe() {

    const history = useHistory()

    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const [input, setInput] = useState({
        name: '',
        summary: '',
        score: '',
        healthScore: '',
        analyzedInstructions: [],
        diets: [],
        image: '',
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getDiets())
        dispatch(getRecipes())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleInstructions(e) {
        setInput({
            ...input,
            analyzedInstructions: [e.target.value]

        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleDiets(e) {
        if (!input.diets.includes(e.target.value)) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]

            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        }
        else {
            alert('Diet already selected!')
        }
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
            analyzedInstructions: [],
            diets: [],
            image: '',
        })
        history.push('/home')
    }

    const handleDeleteDiet = diet => {
        setInput({
            ...input,
            diets: input.diets.filter(d => d !== diet)
        })
    }

    return (
        <div>
            <Title />
            <div className={s.overlay}>
                <div className={s.textTitle}>
                    <div className={s.formTitle}>Recipe Form</div>
                </div>
            </div>

            <form onSubmit={e => handleSubmit(e)} className={s.grid}>
                <div className={s.flex}>
                    <input type='text' value={input.name} name='name' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe name...' />
                    {
                        errors.name && <div className={s.errors}>{errors.name}</div>
                    }
                </div>

                <div className={s.flex}>
                    <input type='text' value={input.summary} name='summary' className={s.textarea} onChange={e => handleChange(e)} placeholder='Insert your recipe summary...' />
                    {
                        errors.summary && <div className={s.errors}>{errors.summary}</div>
                    }
                </div>

                <div className={s.flex}>
                    <input type='number' value={input.score} name='score' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe punctuation...' />
                    {
                        errors.score && <div className={s.errors}>{errors.score}</div>
                    }
                </div>
                
                <div className={s.flex}>
                    <input type='number' value={input.healthScore} name='healthScore' onChange={e => handleChange(e)} className={s.input} placeholder='Insert your recipe health score...' />
                    {
                        errors.healthScore && <div className={s.errors}>{errors.healthScore}</div>
                    }
                </div>

                <div className={s.flex}>
                    <input type='text' value={input.analyzedInstructions} name='analyzedInstructions' className={s.textarea} onChange={e => handleInstructions(e)} placeholder='Insert your recipe steps...' />
                    {
                        errors.steps && <div className={s.errors}>{errors.steps}</div>
                    }
                </div>

                <div className={s.flex}>
                    <select className={s.select} onChange={e => handleDiets(e)}>
                        {
                            diets.map(p => {
                                return (
                                    <option key={p.id} value={p.name}>{p.name}</option>
                                )
                            })
                        }
                    </select>
                    {
                        errors.diets && <div className={s.errors}>{errors.diets}</div>
                    }
                    {
                        input.diets.map(d => (
                            <li className={s.listDiets}>
                                {d} <button onClick={() => handleDeleteDiet(d)}>x</button>
                            </li>
                        ))
                    }
                </div>

                <div className={s.flex}>
                    <input type='text' value={input.image} name='image' onChange={e => handleChange(e)} className={s.input} placeholder='Insert image URL...' />
                    {
                        errors.image && <div className={s.errors}>{errors.image}</div>
                    }
                </div>

                {
                    (Object.keys(errors).length === 0 && input.name && input.image && input.summary && input.score && input.healthScore && input.analyzedInstructions && input.diets) && (<button type='submit' className={s.btn}>CREATE</button>)
                }

            </form>

        </div>
    );
}

export default FormRecipe;

