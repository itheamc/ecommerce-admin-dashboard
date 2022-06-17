import React from 'react'

import {
    CategoriesContainer,
    CategoriesTableCard,
    CategoriesTable
} from './CategoriesStyle.js';
import { ActionLink } from '../../components/styles/Styles'


const AttributesPage = () => {
    return (
        <CategoriesContainer> 
            <CategoriesTableCard>
                <div className='categories-card-header'>
                    <h2>Categories</h2>
                    <p>List of categories</p>
                </div>
                <CategoriesTable>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Total Products</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(category => {
                                return (
                                    <tr>
                                        <td>{category}</td>
                                        <td><span id='category-id'>#01040{category}</span></td>
                                        <td>
                                            <div>
                                                <img src="/assets/images/nike1.png" alt="nike shoe" />
                                                <span id='category-name'>Sport Shoes</span>
                                            </div>
                                        </td>
                                        <td>{255 * category}</td>
                                        <td><span id="status">Active</span></td>
                                        <td>
                                            <div className='action-btn'>
                                                <ActionLink to={`/category/0102030${category}/edit`}><i className="ri-edit-2-line"></i></ActionLink> 
                                                <ActionLink to={`/category/0102030${category}/delete`}><i className="ri-delete-bin-line"></i></ActionLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </CategoriesTable>
            </CategoriesTableCard>
        </CategoriesContainer>
      
    )
}

export default AttributesPage