import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, resetDetail } from '../../actions/actions';
import Loading from '../Loading/Loading';

function Detail() {

    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
        return () => dispatch(resetDetail())
    }, [dispatch])

    return(
        <div>
            {
                detail ? (
                    <div>
                        <h2>receta</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam nobis aperiam quos temporibus unde quae, officiis rerum dolorem facere labore reiciendis debitis ipsam? Similique quas error veritatis voluptatem sequi.</p>
                    </div>
                ) : <div>
                        <Loading />
                    </div>
            }
        </div>
        
    )

}

export default Detail;