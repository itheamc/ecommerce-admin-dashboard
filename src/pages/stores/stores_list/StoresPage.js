import React from 'react'
import { Link } from 'react-router-dom'
import {
    StoresContainer,
    StoresTableCard,
    StoresTable,
    IconActionContainer
} from './StoresStyle.js'
import { useState } from 'react'

const StoresPage = () => {
    const [actionVisible, setActionVisible] = useState(false)

    const toggleAction = () => {
        setActionVisible(!actionVisible)
    }

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
                            <th className='serial-number'>S.N.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th className='phone'>Phone</th>
                            <th className='email'>Email</th>
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
                                        <td className='serial-number'>
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
                                        <td className='phone'>
                                            <span>+977-082-540151</span>
                                        </td>
                                        <td className='email'>
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
                                            <IconActionContainer show={actionVisible}>
                                                <i className="ri-more-2-fill" onClick={toggleAction}></i>
                                                <div className='icon-action'>
                                                    <button className='edit-button'>Edit</button>
                                                    <button className='delete-button'>Delete</button>
                                                </div>
                                            </IconActionContainer>
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