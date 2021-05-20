import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../../actions';



export default function User(props) {
    console.log(props)
   
    const dispatch=useDispatch()
    const details= useSelector(state=> state.detail)
    console.log(details)

    useEffect(() => {
        dispatch(getUserDetail(props.id))
    }, [dispatch,props.id])
    return (
        <div>
            
                   
                      <img src={details?.data?.picture} alt="not found"></img>
                    <p>{details?.data?.firstName} {details.data?.lastName}</p>
                    <p>{details?.data?.gender}</p>
                    <p>{details?.data?.email}</p>
                    <p>{details?.data?.location.country}</p>
                    <p>{details?.data?.phone}</p>  
        </div>
    )
}
