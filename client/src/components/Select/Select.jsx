import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterDiet, filterOrigin, orderName, orderScore } from '../../actions/actions';
import s from './Select.module.css';

function Select({ setCurrentPage }) { 

    const dispatch = useDispatch()

    const diets = useSelector(state => state.diets)

    const handleOrigin = (e) => {
        e.preventDefault()
        dispatch(filterOrigin(e.target.value))
        setCurrentPage(1)
    }

    const handleScore = (e) => {
        e.preventDefault()
        dispatch(orderScore(e.target.value))
        setCurrentPage(1)
    }

    const handleName = (e) => {
        e.preventDefault()
        dispatch(orderName(e.target.value))
        setCurrentPage(1)
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
                    <select onChange={e => handleOrigin(e)}>
                        <option value='all'>All</option>
                        <option value='api'>API</option>
                        <option value='db'>DB</option>
                    </select>
                </div>

                <div className={s.singleSelect}>
                    <label className={s.label}>Diets: </label>
                    <select onChange={e => handleDiets(e)}>
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
                    <select onChange={e => handleScore(e)}>
                        <option value='none'>None</option>
                        <option value='score_des'>++</option>
                        <option value='score_asc'>--</option>
                    </select>
                </div>

                <div className={s.singleSelect}>
                    <label className={s.label}>Name: </label>
                    <select onChange={e => handleName(e)}>
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