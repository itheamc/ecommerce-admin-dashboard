import React from 'react'
import {
    OrderContainer,
    OrdersTableCard
} from './OrderStyle.js'
import { Table } from '../../components/styles/Styles.js'

const OrdersPage = () => {
    return (
        <OrderContainer>
            <OrdersTableCard>
                <Table>
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
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                                return (
                                    <tr key={item}>
                                        <td>{ item }</td>
                                        <td><span className='order-number'>#0000{ item }</span></td>
                                        <td>
                                            <div>
                                                <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                                                <div>
                                                    <p>Product { item } Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <i className="ri-map-pin-user-fill"></i>
                                                <div>
                                                    <p>Gadhawa-7 Kanchhi Gaun</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>2022-03-23</p>
                                        </td>
                                        <td>
                                            <p className='status'>Pending</p>
                                        </td>
                                        <td>
                                            <p>$20</p>
                                        </td>
                                        <td><i className="ri-more-2-fill"></i></td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </Table>
            </OrdersTableCard>
        </OrderContainer>
    )
}

export default OrdersPage