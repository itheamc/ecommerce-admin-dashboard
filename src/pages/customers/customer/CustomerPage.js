import React from 'react'
import { useSelector } from 'react-redux';
import { themeValueSelector } from '../../../states/theme/themeSlice';
import {
    CustomerContainer,
    CustomerInformationContainer,
    CustomerInfoCard,
    CustomerExpensesCard,
    CustomerRatingAndReviewsCard,
    CustomerTransactionContainer,
    CustomerTransactionCard,
} from './CustomerStyle'

import { AChart, Table} from '../../../components/styles/Styles.js';

const option = {
    series: [{
      name: 'Money',
      data: [800, 300, 1180, 300, 2900, 900]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
    chart: {
      background: 'transparent',
    stacked: false,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      show: false
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000) + "k";
      }
    }
  },
  markers: {
    size: 0
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 90, 100]
    }
  },
  grid: {
    show: false, 
  },
  xaxis: {
    categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
  },
};

const CustomerPage = () => {
    const _theme = useSelector(themeValueSelector);
  return (
        <CustomerContainer>
            <CustomerInformationContainer>
                <CustomerInfoCard>
                    <h3>Information</h3>
                    <div className='customer-card'>
                        <div className='customer-image-section'>
                            <img src="/assets/images/users/ana.jpg" alt="user-icon" />
                        </div>
                        <div className='customer-details'>
                        <h3>Ana Smith</h3>
                        <p><span>Email: </span> ana@gmail.com</p>
                        <p><span>Phone: </span> +977 9822907315</p>
                        <p><span>Address: </span> Gadhawa-7 Kanchhi Gaun</p>
                        <p><span>Country: </span> Nepal</p>
                        </div>
                    </div>
                </CustomerInfoCard>
                <CustomerExpensesCard>
                <h3>Customer spending (last six month)</h3>
                  <AChart options={{ ...option, theme: { mode: _theme, palette: 'palette1' }}} series={option.series} type="area" width="100%" height="250px" />
                </CustomerExpensesCard>
                <CustomerRatingAndReviewsCard>
                    <h3>Rating and Reviews</h3>
                    <div className='customer-rating-reviews'>
                        <div className='image-section'>
                            <img src="/assets/images/nike1.png" alt="nike" />
                        </div>
                        <div className='reviews-section'>
                            <h3>Nike Running shoe</h3>
                            <p>This product was good.</p>
                            <p>12/11/2021</p>
                        </div>
                        <div className='star-section'>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                        </div>
                    </div>
                    <div className='customer-rating-reviews'>
                        <div className='image-section'>
                            <img src="/assets/images/nike1.png" alt="nike" />
                        </div>
                        <div className='reviews-section'>
                            <h3>Nike Running shoe</h3>
                            <p>This product was good.</p>
                            <p>12/11/2021</p>
                        </div>
                        <div className='star-section'>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                        </div>
                    </div>
                </CustomerRatingAndReviewsCard>
            </CustomerInformationContainer>
            <CustomerTransactionContainer>
                <CustomerTransactionCard>
                    <h3>Customer Transactions</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Products</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src="/assets/images/nike1.png" alt='nike'/> 
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td> 
                                <td>$100</td>
                                <td>12/12/2022</td>
                                <td>Cash on Delivery</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src="/assets/images/nike1.png" alt='nike'/> 
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td> 
                                <td>$100</td>
                                <td>12/12/2021</td>
                                <td>Cash on Delivery</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src="/assets/images/nike1.png" alt='nike'/> 
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td> 
                                <td>$100</td>
                                <td>12/12/2021</td>
                                <td>Cash on Delivery</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src="/assets/images/nike1.png" alt='nike'/> 
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td> 
                                <td>$100</td>
                                <td>12/12/2021</td>
                                <td>Cash on Delivery</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src="/assets/images/nike1.png" alt='nike'/> 
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td> 
                                <td>$100</td>
                                <td>12/12/2020</td>
                                <td>Cash on Delivery</td>
                                <td>Pending</td>
                            </tr>     
                        </tbody>
                    </Table>
                </CustomerTransactionCard>
            </CustomerTransactionContainer>          
        </CustomerContainer>  
  )
}

export default CustomerPage