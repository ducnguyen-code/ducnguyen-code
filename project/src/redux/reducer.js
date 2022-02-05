import * as actionTypes from './constant'

const getvotesBynameInitialState = {
    allvote:[]
}
export const getvotesByname = (state = getvotesBynameInitialState, action) => {
    switch (action.type) {
        case actionTypes.getvotesbyname:
            return {
                ...state,
                allvote:action.payload,

            }
      
        default:
            return state
    }
}
const getdetailsvoteInitialState = {
    votedetail:{}
}
export const getdetailsvote = (state = getdetailsvoteInitialState, action) => {
    switch (action.type) {
       
        case actionTypes.getvotesdetails:
            return {
                ...state,
                votedetail:action.payload
            }
        default:
            return state
    }
}