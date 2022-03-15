import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterDiet, filterOrigin, orderName, orderScore } from '../../actions/actions';
import s from './Select.module.css';

function Select({ setCurrentPage }) { 

    const dispatch = useDispatch()

    const diets = useSelector(state => state.diets)

    const [order, setOrder] = useState(''); //para setear los estados en los filtros

    const handleOrigin = (e) => {
        e.preventDefault()
        dispatch(filterOrigin(e.target.value))
        setCurrentPage(1)
    }

    const handleScore = (e) => {
        e.preventDefault()
        dispatch(orderScore(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value);
    }

    const handleName = (e) => {
        e.preventDefault()
        dispatch(orderName(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value);
    }

    const handleDiets = (e) => {
        e.preventDefault()
        dispatch(filterDiet(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div className={s.selects}>
            <div className={s.filters}>
                <div className={s.singleSelect}>
                    <label className={s.label}>Origin: </label>
                    <select className={s.selectOption} onChange={e => handleOrigin(e)}>
                        <option className={s.option} value='all'>All</option>
                        <option value='api'>API</option>
                        <option value='db'>DB</option>
                    </select>
                </div>

                <div className={s.singleSelect}>
                    <label className={s.label}>Diets: </label>
                    <select className={s.selectOption} onChange={e => handleDiets(e)}>
                        <option value='all'>All</option>
                        {   
                            diets.map(d => (
                                <option value={d.name}>{d.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            
            <div className={s.filters}>
                <div className={s.singleSelect}>
                    <label className={s.label}>Score: </label>
                    <select className={s.selectOption} onChange={e => handleScore(e)}>
                        <option value='none'>None</option>
                        <option value='score_des'>++</option>
                        <option value='score_asc'>--</option>
                    </select>
                </div>

                <div className={s.singleSelect}>
                    <label className={s.label}>Name: </label>
                    <select className={s.selectOption} onChange={e => handleName(e)}>
                        <option value='none'>None</option>
                        <option value='az'>A-Z</option>
                        <option value='za'>Z-A</option>
                    </select>
                </div>
            </div>
            
        </div>
    );
}

export default Select;