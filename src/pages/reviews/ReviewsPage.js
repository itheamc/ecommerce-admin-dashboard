import React, { useState } from 'react'
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
        <div>
          <h2>Nike Running Shoe</h2>
          <span>4.5</span>
        </div>
        <div className='reviews-container'>
          <div className='profile-pic'>
            <img src="./assets/images/users/john.jpg" alt="john" />
          </div>
          <div className='review-content'>
            <div className='reviews-header'>
              <div className='reviews-header-left'>
                <span>John Smith</span>
              </div>
              <div className='reviews-header-right'>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>                               
                <i class="ri-star-half-s-fill"></i>
              </div>
            </div>
            <div className='date'>
              <span>12/12/2021</span>
            </div>
            <div className='products-image'>
              <div className='left-product-image'>
                <img src="./assets/images/nike1.png" alt="nike" />
              </div>
              <div className='middle-product-image'>
                <img src="./assets/images/nike.png" alt="nike" />
              </div>
              <div className='right-product-image'> 
                <img src="./assets/images/nike2.png" alt="nike" />
              </div>
            </div>
            <div className='reviews-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget ex euismod, consectetur nisi eu, consectetur nisi eu,
              </p>
            </div>
          </div>
        </div>
        <div className='reviews-container'>
          <div className='profile-pic'>
            <img src="./assets/images/users/jenny.jpg" alt="john" />
          </div>
          <div className='review-content'>
            <div className='reviews-header'>
              <div className='reviews-header-left'>
                <span>Jenny Smith</span>
              </div>
              <div className='reviews-header-right'>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>                               
                <i class="ri-star-half-s-fill"></i>
              </div>
            </div>
            <div className='date'>
              <span>12/12/2021</span>
            </div>
            <div className='products-image'>
              <div className='left-product-image'>
                <img src="./assets/images/nike1.png" alt="nike" />
              </div>
              <div className='middle-product-image'>
                <img src="./assets/images/nike.png" alt="nike" />
              </div>
              <div className='right-product-image'> 
                <img src="./assets/images/nike2.png" alt="nike" />
              </div>
            </div>
            <div className='reviews-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget ex euismod, consectetur nisi eu, consectetur nisi eu,
              </p>
            </div>
          </div>
        </div>
        <div className='reviews-container'>
          <div className='profile-pic'>
            <img src="./assets/images/users/jenny.jpg" alt="john" />
          </div>
          <div className='review-content'>
            <div className='reviews-header'>
              <div className='reviews-header-left'>
                <span>Jenny Smith</span>
              </div>
              <div className='reviews-header-right'>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>                               
                <i class="ri-star-half-s-fill"></i>
              </div>
            </div>
            <div className='date'>
              <span>12/12/2021</span>
            </div>
            <div className='products-image'>
              <div className='left-product-image'>
                <img src="./assets/images/nike1.png" alt="nike" />
              </div>
              <div className='middle-product-image'>
                <img src="./assets/images/nike.png" alt="nike" />
              </div>
              <div className='right-product-image'> 
                <img src="./assets/images/nike2.png" alt="nike" />
              </div>
            </div>
            <div className='reviews-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget ex euismod, consectetur nisi eu, consectetur nisi eu,
              </p>
            </div>
          </div>
        </div>
      </ProductReviewsCard>
    </ReviewsPageContainer>
  )
}

export default ReviewsPage