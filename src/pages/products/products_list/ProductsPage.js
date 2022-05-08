import React from 'react'
import {
    ProductsContainer,
    ProductsCard,
    ProductsTable
} from './ProductsStyle'

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
                                        <td>
                                            <span>#{product}</span>
                                        </td>
                                        <td>
                                            <span id='product-id'>0102030{product}</span>
                                        </td>
                                        <td>
                                            <div>
                                                <img src="assets/images/nike2.png" alt="nike shoe" />
                                                <span id='product-name'>Running Nike Shoe</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>E001010{product}</span>
                                        </td>
                                        <td>
                                            <span>Sports Shoe</span>
                                        </td>
                                        <td>
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