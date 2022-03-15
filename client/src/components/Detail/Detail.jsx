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

    return (
        <div>
            <Title />
            {
                detail ? (
                    <div className={s.grid}>
                        <div className={s.flex}>
                            <h2 className={s.name}>{detail.name}</h2>
                            <div className={s.summary}>
                                <div className={s.description}>Summary</div>
                                <div className={s.text}>{detail.summary.replace(/(<([^>]+)>)/ig, '')}</div>
                            </div>

                            <div className={s.steps}>
                                <div className={s.description}>Steps</div>
                                {
                                    detail.analyzedInstructions && detail.analyzedInstructions.map((e, i) => {
                                        return (
                                            <div className={s.text}><span className={s.number}>0{i + 1}. </span>{e}</div>
                                        )
                                    })
                                }
                            </div>

                            <Link to='/home'>
                                <button className={s.btn}>HOME</button>
                            </Link>

                        </div>

                        <div className={s.rightInfo}>
                            <img src={detail.image} alt='img not found' className={s.img} />

                            <div className={s.items}>
                                <div className={s.scores}>
                                    <span className={s.number}>Score: </span>
                                    {detail.score}
                                </div>
                                <div className={s.scores}>
                                    <span className={s.number}>Health Score: </span>
                                    {detail.healthScore}
                                </div>
                                <div className={`${s.diets} ${s.scores}`}>
                                <span className={s.number}>Diets: </span>
                                    {
                                        detail.diets.map(d => {
                                            return (
                                                <div className={`${s.list}`}> {d.name} - </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                ) : <div>
                    <Loading />
                </div>
            }
        </div>

    )

}

export default Detail;