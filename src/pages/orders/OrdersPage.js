import React from 'react'
import {
    OrderContainer,
    OrdersTableCard,
    OrdersTable
} from './OrderStyle.js'

const OrdersPage = () => {
    return (
        <OrderContainer>
            <OrdersTableCard>
                <div className='orders-card-header'>
                    <h2>Orders</h2>
                    <p>List of orders from the customers</p>
                </div>
                <OrdersTable>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Order No.</th>
                            <th>Items</th>
                            <th>Delivery Place</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
                                return (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        <td><span id='order-number'>#0000{item}</span></td>
                                        <td>
                                            <div>
                                                <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                                                <span id='item-name'>Product {item} Name</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <i className="ri-map-pin-user-fill"></i>
                                                <span>Gadhawa-7 Kanchhi Gaun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>2022-03-23</span>
                                        </td>
                                        <td>
                                            <span id='status'>Pending</span>
                                        </td>
                                        <td>
                                            <span>$20</span>
                                        </td>
                                        <td>
                                            <i className="ri-more-2-fill"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </OrdersTable>
            </OrdersTableCard>
        </OrderContainer>
    )
}

export default OrdersPage