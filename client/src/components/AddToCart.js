import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartQty } from '../Redux/actions/Product'

const AddToCart = (props) => {
    // const productID = props.match.params.id
    const paramQty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    console.log(paramQty)

    const cartQunty = useSelector(state => state.cartQunty.cartQunty)

    const [qqty, ssetQty] = useState(0)

    const dispatch = useDispatch();




    const changeValue = (e) => {
        ssetQty(e.target.value);
        dispatch(cartQty(e.target.value))
    }

    const ProductList = useSelector(state => state.ProductList.ProductList)
    const addDetail = ProductList.filter(item => item.id === parseInt(props.match.params.id))

    const productObject = Object.assign({}, ...addDetail);
    const totalPrice = (cartQunty * productObject.price)

    return (
        <div className='add-cart pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="d-flex align-items-baseline justify-content-between">
                            <h2>Shopping Cart</h2>
                            <h6>Price</h6>
                        </div>
                        <div className="add-item-content">
                            <img src={productObject.image} alt='img' />
                            <div className="item-carts">
                                <h5>{productObject.name}</h5>
                                <select value={cartQunty} onChange={changeValue}>
                                    {[...Array(productObject.countInStock).keys()].map(x =>
                                        <option key={x + 1} vlaue={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                                <button className='btn btn-danger btn-sm ml-3'>Delete</button>
                            </div>
                            <h5 className='text-right'>Rs : {productObject.price}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card p-3">
                            <h4>Subtotal ( {cartQunty} items): Rs {totalPrice} </h4>
                            <button className='btn btn-sm btn-warning'>Proceed to Buy</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddToCart
