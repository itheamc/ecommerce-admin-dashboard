import React from 'react'
import {
    VariationAttributesContainer,
    VariationAttributesTableCard,
    VariationAttributesTable
} from './VariationAttributesStyle.js';
import { ActionLink } from '../../components/styles/Styles'


const VariationAttributesPage = () => {
  return (
    <VariationAttributesContainer> 
            <VariationAttributesTableCard>
                <div className='variation-attributes-card-header'>
                    <h2>Variation Attributes</h2>
                    <p>List of variation attributes</p>
                </div>
                <VariationAttributesTable>
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
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(variationAttribute => {
                                return (
                                    <tr>
                                        <td>{variationAttribute}</td>
                                        <td><span id='variation-attribute-id'>#01040{variationAttribute}</span></td>
                                        <td><span id='variation-attribute-name'>Color</span></td>
                                        <td>{255 * variationAttribute}</td>
                                        <td>Sport shoe</td>
                                        <td><span id="status">Active</span></td>
                                        <td>
                                            <div className='action-btn'>
                                                <ActionLink to={`/variation-attribute/0102030${variationAttribute}/edit`}><i className="ri-edit-2-line"></i></ActionLink> 
                                                <ActionLink to={`/variation-attribute/0102030${variationAttribute}/delete`}><i className="ri-delete-bin-line"></i></ActionLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </VariationAttributesTable>
            </VariationAttributesTableCard>
        </VariationAttributesContainer>
  )
}

export default VariationAttributesPage