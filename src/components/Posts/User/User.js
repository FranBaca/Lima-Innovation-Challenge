import React,{useEffect, useState} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../../actions';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a6523a9f1c3c90368211b4';

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
