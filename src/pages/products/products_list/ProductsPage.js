import React from 'react'
import { Link } from 'react-router-dom'
import {
    ProductsContainer,
    ProductsCard,
    ProductsTable,
} from './ProductsStyle'
import { ActionLink } from '../../../components/styles/Styles'

const ProductsPage = () => {
    return (
        <ProductsContainer>
            <ProductsCard>
                <div className='products-card-header'>
                    <h2>Products</h2>
                    <p>List of products from all stores</p>
                </div>
                <ProductsTable>
                    <thead>
                        <tr>
                            <th className='serial-number'>S.N.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>SKU</th>
                            <th className='category'>Category</th>
                            <th className='price'>Price</th>
                            <th>Store</th>
                            <th>Status</th>
                            <th>Added On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(product => {
                                return (
                                    <tr key={product}>
                                        <td className='serial-number'>
                                            <span>#{product}</span>
                                        </td>
                                        <td>
                                            <Link to={`/products/0102030${product}`}>
                                                <span id='product-id'>0102030{product}</span>
                                            </Link>
                                        </td>
                                        <td>
                                            <div>
                                                <img src="/assets/images/nike1.png" alt="nike shoe" />
                                                <span id='product-name'>Running Nike Shoe</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>E001010{product}</span>
                                        </td>
                                        <td className='category'>
                                            <span>Sports Shoe</span>
                                        </td>
                                        <td className='price'>
                                            <span>$100</span>
                                        </td>
                                        <td>
                                            <span>Store {product}</span>
                                        </td>
                                        <td>
                                            <span id='status'>Active</span>
                                        </td>
                                        <td><span></span>2022-03-23</td>
                                        <td>
                                            <div className='action-btn'>
                                                <ActionLink to={`/product/0102030${product}/edit`}><i className="ri-edit-2-line"></i></ActionLink> 
                                                <ActionLink to={`/product/0102030${product}/delete`}><i className="ri-delete-bin-line"></i></ActionLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </ProductsTable>
            </ProductsCard>
        </ProductsContainer>
    )
}

export default ProductsPage