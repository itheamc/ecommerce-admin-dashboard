import React from 'react'
import {
    ProductsContainer,
    ProductsCard,
} from './ProductStyle'
import { Table } from '../../components/styles/Styles.js'

const ProductsPage = () => {
    return (
        <ProductsContainer>
            <ProductsCard>
                <div className='products-card-header'>
                    <h2>Products</h2>
                    <p>List of products from all stores</p>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>SKU</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Store</th>
                            <th>Status</th>
                            <th>Added On</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(product => {
                                return (
                                    <tr key={product}>
                                        <td>{product}</td>
                                        <td>#0000{product}</td>
                                        <td>
                                            <div>
                                                <img src="assets/images/R.jpg" alt="Wireless headphone" />
                                                <div>
                                                    <p>Wireless HeadPhone</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>#000{product}</td>
                                        <td>Electronics</td>
                                        <td>$100</td>
                                        <td>Store {product}</td>
                                        <td><p className='active'>Active</p></td>
                                        <td>2022-03-23</td>
                                        <td><i className="ri-more-2-fill"></i></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </ProductsCard>
        </ProductsContainer>
    )
}

export default ProductsPage