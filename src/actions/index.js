import axios from "axios";
export const detail ="GET_USER_DETAIL";
export const comments ="GET_COMMENTS";
export const tag = "GET_TAGS"
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a6523a9f1c3c90368211b4';

export const getUserDetail=(id)=>{
    
    return async (dispatch)=>{
        let user = await axios.get(`${BASE_URL}/user/${id}`, { headers: { 'app-id': APP_ID } })
        dispatch(userDetail(user))
    }
}

const userDetail=(payload)=>{
    return{
        type: detail,
        payload
    }
}


export const getComments=(postId)=>{
    console.log(postId)
    return async (dispatch)=>{
        let comments = await axios.get(`${BASE_URL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
        dispatch(postComments(comments))
    }
}

const postComments=(payload)=>{
    return{
        type: comments,
        payload
    }
}

export const filterTags=(payload) =>{
    return {
    type: tag,
    payload
}
}