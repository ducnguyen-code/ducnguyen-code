
import axios from 'axios'
import * as actionTypes from './constant'

const url="https://frontend-jokes.herokuapp.com"
export const getvotebyname=()=>async(dispatch)=>{
    try {
     
        const {data}=await axios.get(`/api/v1/votes`);
         console.log(data.data);
        dispatch({
            type:actionTypes.getvotesbyname,
            payload:data.data
        })
      

    } catch (error) {
        
    }
}



