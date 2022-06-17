import React from 'react'

import {
    AttributesContainer,
    AttributesTableCard,
    AttributesTable
} from './AttributesStyle.js';
import { ActionLink } from '../../components/styles/Styles'


const AttributesPage = () => {
    return (
        <AttributesContainer> 
            <AttributesTableCard>
                <div className='attributes-card-header'>
                    <h2>Attributes</h2>
                    <p>List of attributes</p>
                </div>
                <AttributesTable>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Id</th>
                            <th>Attribute Name</th>
                            <th>Total Products</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(attribute => {
                                return (
                                    <tr>
                                        <td>{attribute}</td>
                                        <td><span id='attribute-id'>#01040{attribute}</span></td>
                                        <td><span id='attribute-name'>Material</span></td>
                                        <td>{255 * attribute}</td>
                                        <td>Sport shoe</td>
                                        <td><span id="status">Active</span></td>
                                        <td>
                                            <div className='action-btn'>
                                                <ActionLink to={`/attribute/0102030${attribute}/edit`}><i className="ri-edit-2-line"></i></ActionLink> 
                                                <ActionLink to={`/attribute/0102030${attribute}/delete`}><i className="ri-delete-bin-line"></i></ActionLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </AttributesTable>
            </AttributesTableCard>
        </AttributesContainer>
      
    )
}

export default AttributesPage