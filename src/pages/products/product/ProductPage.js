import React from 'react'
import {
    ProductsContainer,
    ProductContainer,
    ProductRatingAndReviewsContainer,
    RatingProgressBar
} from './ProductStyle'

const ProductPage = () => {
  return (
        <ProductsContainer>
            <ProductContainer>
                <div className="product">
                    <div className="image">
                        <img src="assets/images/nike1.png" alt="nike running shoe" />
                    </div>
                    <div className="product-details-section">
                        <h3>Nike running shoe</h3>
                        <div className="star-section">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-half-fill"></i>
                        </div>
                        <p className='product-price'>$7.00</p>
                        <p>Sport shoe</p>
                        <p>NIKE</p>
                        <div className="image-section">
                            <img src="assets/images/nike.png" alt="nike running shoe" />
                            <img src="assets/images/nike1.png" alt="nike running shoe" />
                            <img src="assets/images/nike2.png" alt="nike running shoe" />
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolor voluptatem voluptate numquam omnis debitis ab. Libero nulla magnam explicabo repellendus esse. Ullam dolore cumque error necessitatibus expedita, doloribus consequuntur a vel suscipit dolorem beatae maiores velit. Et voluptatibus cupiditate sapiente magnam dolore quisquam optio quo dolorum repudiandae! Ad tenetur iusto harum inventore adipisci! Cupiditate ullam id assumenda dolore quos excepturi non, blanditiis laudantium repudiandae voluptatem nostrum dolores, nobis natus. Illo ipsam maiores architecto exercitationem explicabo, sed assumenda adipisci quas cupiditate modi alias laborum eum eligendi facilis error porro. Quos alias laborum ullam sit nulla animi saepe maxime eveniet quo?</p>
                </div>
            </ProductContainer>
            <ProductRatingAndReviewsContainer>
                <div className="product-rating-container">
                    <div className="rating-container">
                        <div className="rating-points">
                            <h3>4.5</h3>
                            <p>Out of 5</p>
                        </div>
                        <div className="star-section">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-half-fill"></i>
                      </div>
                      <div className="total-reviews">
                          <i class="ri-user-2-fill"></i>
                          <p>4,344,123</p>
                      </div>
                    </div>
                    <div className="rating-progress">
                        <RatingProgressBar value={95}>
                                <div className="star-info">
                                    <p>5</p>
                                    <i class="ri-star-fill"></i>
                                </div>
                                <div className="progress-bar"><span></span></div>
                        </RatingProgressBar>
                        
                        <RatingProgressBar value={45}>
                            <div className="star-info">
                                <p>4</p>
                                <i class="ri-star-fill"></i>
                            </div>
                            <div className="progress-bar"><span></span></div>
                        </RatingProgressBar>
                        <RatingProgressBar value={30}>
                            <div className="star-info">
                                <p>3</p>
                                <i class="ri-star-fill"></i>
                            </div>
                            <div className="progress-bar"><span></span></div>
                        </RatingProgressBar>
                        <RatingProgressBar value={15}>
                            <div className="star-info">
                                <p>2</p>
                                <i class="ri-star-fill"></i>
                            </div>
                            <div className="progress-bar"><span></span></div>
                        </RatingProgressBar>
                        <RatingProgressBar value={20}>
                            <div className="star-info">
                                <p>1</p>
                                <i class="ri-star-fill"></i>
                            </div>
                            <div className="progress-bar"><span></span></div>
                        </RatingProgressBar>
                    </div>
                    <div className="user-review-container">
                        <h3>Reviews</h3>
                        <div className="user-reviews">
                            <div className="user-review">
                                <div className="image-section">
                                    <img src="assets/images/users/john.jpg" alt="john" />
                                </div>
                                <div className="review-section">
                                    <div className="header">
                                        <h3>John</h3>
                                        <div className="star-section">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </div>
                                    </div>
                                    <div className="reviews">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate optio impedit dolorem veritatis amet illum eos debitis nihil quae.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="user-review">
                                <div className="image-section">
                                    <img src="assets/images/users/jenny.jpg" alt="jenny" />
                                </div>
                                <div className="review-section">
                                    <div className="header">
                                        <h3>John</h3>
                                        <div className="star-section">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </div>
                                    </div>
                                    <div className="reviews">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate optio impedit dolorem veritatis amet illum eos debitis nihil quae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductRatingAndReviewsContainer>
            </ProductsContainer>
  )
}

export default ProductPage