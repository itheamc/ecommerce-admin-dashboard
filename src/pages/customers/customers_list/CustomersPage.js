import React from 'react'
import { Link } from 'react-router-dom'
import {
    CustomersContainer,
    CustomersTableCard,
    CustomersTable
} from './CustomersStyle'

const CustomersPage = () => {
    return (
        <CustomersContainer>
            <CustomersTableCard>
                <div className='customers-card-header'>
                    <h2>Customers</h2>
                    <p>List of registered customers</p>
                </div>
                <CustomersTable>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Customer Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Joined On</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => {
                                return (
                                    <tr key={item}>
                                        <td>
                                            <span>#{item}</span>
                                        </td>
                                        <td>
                                            <Link to={`/customers/01201${item}`}>
                                                <span id='customer-id'>01201{item}</span>
                                            </Link>
                                        </td>
                                        <td>
                                            <div>
                                                <img src="assets/images/users/ana.jpg" alt="user-icon" />
                                                <span id='customer-name'>Customer {item} Name</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>+977-9876543210</span>
                                        </td>
                                        <td>
                                            <span>customer{item}@email.com</span>
                                        </td>
                                        <td>
                                            <span>Gadhawa-7 Kanchhi Gaun</span>
                                        </td>
                                        <td>
                                            <span>2022-03-23</span>
                                        </td>
                                        <td>
                                            <span id='status'>Active</span>
                                        </td>
                                        <td>
                                            <i className="ri-more-2-fill"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </CustomersTable>
            </CustomersTableCard>
        </CustomersContainer>
    )
}

export default CustomersPage