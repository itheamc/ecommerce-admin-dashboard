import React from 'react'
import {
    ProductsContainer,
    ProductsCard,
    ProductsTable
} from './ProductStyle'

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
                                        <td>
                                            <span id='product-id'>#0000{product}</span>
                                        </td>
                                        <td>
                                            <div>
                                                <img src="assets/images/R.jpg" alt="Wireless headphone" />
                                                <span id='product-name'>Wireless HeadPhone</span>
                                            </div>
                                        </td>
                                        <td>E001010{product}</td>
                                        <td>Electronics</td>
                                        <td>$100</td>
                                        <td>Store {product}</td>
                                        <td>
                                            <span id='status'>Active</span>
                                        </td>
                                        <td>2022-03-23</td>
                                        <td>
                                            <i className="ri-more-2-fill"></i>
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