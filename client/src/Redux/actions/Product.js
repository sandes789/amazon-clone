import {
    ECOM_API,
    QTY
} from './type'
import axios from 'axios'

export const getAPI = () => async dispatch => {

    const res = await axios.get('/productlist');

    // console.log(...res.data)

    dispatch({
        type: ECOM_API,
        payload: res.data
    })
}

export const cartQty = (num) => async dispatch => {
    console.log({ num })
    dispatch({
        type: QTY,
        payload: num
    })
}

