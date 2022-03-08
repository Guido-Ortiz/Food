import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail, resetDetail } from '../../actions/actions';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';
import s from './Detail.module.css';

function Detail() {

    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
        return () => dispatch(resetDetail())
    }, [dispatch])

    
    // let stripped = str.replace(/(<([^>]+)>)/ig, '')

    return(
        <div>
            <Title />
            {
                detail ? (
                    <div>
                        <h2>{detail.name}</h2>
                        <p>{detail.summary.replace(/(<([^>]+)>)/ig, '')}</p> 
                        <img src={detail.image} alt='img not found'/>
                        <div>{detail.score}</div>
                        <div>{detail.healthScore}</div>
                        {
                            detail.diets.map(d => {
                                return(
                                    <div>{d.name}</div>
                                )
                            })
                            
                        }
                        {
                            detail.analyzedInstructions && detail.analyzedInstructions.map(i => {
                                return(
                                    <div>{i}</div>
                                )
                            })
                        }

                        <Link to='/home'>
                            <button className={s.btn}>HOME</button>
                        </Link>
                        
                    </div>
                ) : <div>
                        <Loading />
                    </div>
            }
        </div>
        
    )

}

export default Detail;