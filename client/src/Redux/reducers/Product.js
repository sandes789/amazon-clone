import {
    ECOM_API,
    QTY

} from '../actions/type'

const initialState = {
    ProductList:[],
    cartQunty:''
}

export default function ( state = initialState, action ){
    switch(action.type){
        case ECOM_API:
            return{
                ...state,
                ProductList:[...state.ProductList, ...action.payload]
            }
        case QTY :
            return{
                ...state,
                cartQunty:action.payload
            }
            
        default:
            return state
    }
}