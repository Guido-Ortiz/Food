import React from 'react';
import { useDispatch } from 'react-redux';
import { filterOrigin, orderScore } from '../../actions/actions';

function Select() { 

    const dispatch = useDispatch()

    const handleOrigin = (e) => {
        e.preventDefault()
        dispatch(filterOrigin(e.target.value))
    }

    const handleScore = (e) => {
        e.preventDefault()
        dispatch(orderScore(e.target.value))
    }

    return (
        <div>
            <div>
                <label>Origin: </label>
                <select onChange={e => handleOrigin(e)}>
                    <option value='all'>All</option>
                    <option value='api'>API</option>
                    <option value='db'>DB</option>
                </select>
            </div>

            <div>
                <label>Score: </label>
                    <select onChange={e => handleScore(e)}>
                        <option value='none'>None</option>
                        <option value='score_des'>++</option>
                        <option value='score_asc'>--</option>
                    </select>
            </div>
        </div>
    );
}

export default Select;