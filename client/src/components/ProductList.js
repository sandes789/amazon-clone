import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';


const ProductList = () => {
    // Redux
    const dispatch = useDispatch()

  


    const ProductList = useSelector(state => state.ProductList.ProductList)
    const ListOfProduct = ProductList.length ? (
        <ul className='list-items'>
            {ProductList.map((list, index) => {
                return (
                    <NavLink to={'/ProductDetail/' + list.id} key={index}>
                        <li>
                            <img src={list.image} alt="img" />
                            <h6 className='product-brand'>{list.brand}</h6>
                            <p className="product-name">{list.name}</p>
                            <p className='product-brand'>Rs. {list.price}</p>
                        </li>
                    </NavLink>
                )
            })}
        </ul>
    ) :
        (
            <p>Loading...</p>
        )

    return (
        <div className='product-list pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    {ListOfProduct}
                </div>
            </div>
        </div>
    )
}

export default ProductList
