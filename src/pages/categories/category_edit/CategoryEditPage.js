import React from 'react'

import {
  CategoryEditContainer,
  CategoryEditCard
} from './CategoryEditStyle.js'

const CategoryEditPage = () => {
  return (
    <CategoryEditContainer>
      <div className="buttons">
        <button>Back to Categories</button>
        <button>Save Category</button>
      </div>
      <form method='POST' action='#'>
        <CategoryEditCard>
          <h2>Product ID <span>#010401</span></h2>
          <label htmlFor="category-name">Product Name</label>
          <input type="text" id="category-name" name="category-name" />
          <label htmlFor="total-products">Total Products</label>
          <input type="number" id="total-products" name="total-products" />
          <label htmlFor="status">Status</label>
          <select id="status" name="status">
            <option value="">Select a status</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </select>
          <div className='buttons'>
            <button type="submit" className='active'>Add Category</button>
            <button type="submit">Save Category</button>
          </div>
        </CategoryEditCard>
      </form>
    </CategoryEditContainer>
  )
}

export default CategoryEditPage