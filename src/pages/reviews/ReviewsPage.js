import React from 'react'
import {
  ReviewsPageContainer,
  ProductRatingCard,
  ProductReviewsTable,
  ProductReviewsCard
} from './ReviewsStyle'

const ReviewsPage = () => {
  return (
    <ReviewsPageContainer>
      <ProductRatingCard>
        <h3>Product Rating</h3>
        <ProductReviewsTable>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Products</th>
              <th>Rating</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(product => (
                <tr key={product}>
                  <td>{product}</td>
                  <td>
                    <div className='products'>
                      <img src="./assets/images/nike1.png" alt="nike" />
                      <span>Nike Running Shoe</span>
                    </div>
                  </td>
                  <td>
                    <div className='rating'>
                      <span>4.5</span>
                      <i className="ri-star-s-fill"></i>
                    </div>
                  </td>
                  <td>
                    <div className='reviews'>
                      <span>42235</span>
                      <i className="ri-user-line"></i>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </ProductReviewsTable>
      </ProductRatingCard>
      <ProductReviewsCard>
        <h3>Product Reviews</h3>
      </ProductReviewsCard>
    </ReviewsPageContainer>
  )
}

export default ReviewsPage