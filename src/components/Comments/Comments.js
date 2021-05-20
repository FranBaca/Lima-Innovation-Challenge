import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../actions/index';


export default function Comments(props) {

    const dispatch=useDispatch()
    const comments= useSelector(state=> state.comments)
    console.log(comments)
    let allComments= comments?.data?.data

    useEffect(() => {
        dispatch(getComments(props.id))
    }, [dispatch,props.id])
    return (
        <div>
             {
                allComments?.length !== 0 ?
                    <>
                        {
                            allComments?.map(e => (
                                <div>
                                    <div >
                                        <img className="comments" src={e.owner.picture} alt="not found" />
                                        <h3>{e.owner.firstName}</h3>
                                        <p>{e.message}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </> :
                    <div>
                        No comments
                    </div>
            }

        </div>
    )
}
