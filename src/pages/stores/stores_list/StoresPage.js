import React from 'react'
import { Link } from 'react-router-dom'
import {
    StoresContainer,
    StoresTableCard,
    StoresTable
} from './StoresStyle.js'

const StoresPage = () => {
    return (
        <StoresContainer>
            <StoresTableCard>
                <div className='stores-card-header'>
                    <h2>Stores</h2>
                    <p>List of registered stores</p>
                </div>
                <StoresTable>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Store Id</th>
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
                                            <Link to={`/stores/01201${item}`}>
                                                <span id='store-id'>01201{item}</span>
                                            </Link>
                                        </td>
                                        <td>
                                            <div>
                                                <img src="assets/images/users/tom.jpg" alt="user-icon" />
                                                <span id='store-name'>Store {item} Name</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>+977-082-540151</span>
                                        </td>
                                        <td>
                                            <span>store{item}@email.com</span>
                                        </td>
                                        <td>
                                            <div>
                                                <i className="ri-map-pin-user-fill"></i>
                                                <span>Koilabas Road, Lamahi, Dang</span>
                                            </div>
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
                </StoresTable>
            </StoresTableCard>
        </StoresContainer>
    )
}

export default StoresPage