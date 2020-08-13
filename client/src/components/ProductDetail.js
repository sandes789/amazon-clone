import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cartQty } from '../Redux/actions/Product';


const ProductDetail = (props) => {
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch()

    const handleToCart = () => {
        dispatch(cartQty(qty))

        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty)
    }

    const product = useSelector(state => state.ProductList.ProductList)
    const detailProduct = product.filter(item => item.id === parseInt(props.match.params.id))

    const productObject = Object.assign({}, ...detailProduct);

    return (

        <div className='product-detail'>
            <div className="container-fluid">
                <div className="row pt-3">
                    <div className="col">
                        <NavLink to='/'>
                            <p> Back to result</p>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <img src={productObject.image} alt="img" className='img-fluid' />
                    </div>
                    <div className="col-lg-3">
                        <div className="card p-3">
                            <h4>{productObject.name}</h4>
                            <h6>Price: {productObject.price}</h6>
                            <h6>Brand: {productObject.brand}</h6>
                            <h6>({productObject.numReviews} customers reviews)</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card p-3">
                            <p>Price: {productObject.price}</p>
                            <div>Stock: {productObject.countInStock > 0 ? (<div>{productObject.countInStock}</div>) : (<p>Out of Stock</p>)}</div>
                            <div className="qty d-flex align-items-center mb-3">
                                <p className="m-0">Qty: </p>

                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(productObject.countInStock).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                            </div>
                            {productObject.countInStock > 0 ? (<button onClick={handleToCart} className='btn btn-warning'>Add to Cart</button>) : ('')}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
