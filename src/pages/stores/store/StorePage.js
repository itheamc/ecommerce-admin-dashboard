import React from 'react'
import { useSelector } from 'react-redux';
import { themeValueSelector } from '../../../states/theme/themeSlice';
import {
    StoreContainer,
    StoreInformationContainer,
    StoreCard,
    StoreSellingCard,
    StoreTopProductsCard,
    StoreTransactionContainer,
    StoreTransactionCard
} from './StoreStyle';

import { AChart, Table } from '../../../components/styles/Styles.js';

const option = {
    series: [{
      name: 'Sales',
      data: [1000, 1800, 1180, 300, 2900, 900]
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

const StorePage = () => {
    const _theme = useSelector(themeValueSelector);
    return (
        <StoreContainer>
            <StoreInformationContainer>
                <StoreCard>
                    <h3>Store Information</h3>
                    <div className='store-information-container'>
                        <div className='image-section'>
                            <img src='/assets/images/logo.png' alt='store-logo' />
                        </div>
                        <div className='information-section'>
                            <h2>Store Name</h2>
                            <p><span>Email: </span>store1@gmail.com</p>
                            <p><span>Phone: </span>+977-082-540151</p>
                            <p><span>Address: </span>Koilabas Road, Lamahi Dang</p>
                            <p><span>Country: </span>Nepal</p>
                        </div>
                    </div>
                </StoreCard>
                <StoreSellingCard>
                    <h3>Store Selling (Last six month)</h3>
                    <div> <AChart options={{ ...option, theme: { mode: _theme, palette: 'palette1' } }} series={option.series} type="area" width="100%" height="250px" /> </div>
                </StoreSellingCard>
                <StoreTopProductsCard>
                    <h3>Store Top Products</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Total Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>324</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>324</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>324</td>
                            </tr>
                        </tbody>
                    </Table>
                </StoreTopProductsCard>
            </StoreInformationContainer>
            <StoreTransactionContainer>
                <StoreTransactionCard>
                    <h3>Store Transactions</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>12/12/2020</td>
                                <td>Received</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>12/12/2020</td>
                                <td>Received</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>
                                <td>#12345</td>
                                <td>
                                    <div>
                                        <img src='/assets/images/nike1.png' alt='nike' />
                                        <span>Nike Running shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>12/12/2020</td>
                                <td>Received</td>
                                <td>Delivered</td>
                            </tr>
                        </tbody>
                    </Table>
                </StoreTransactionCard>
            </StoreTransactionContainer>
        </StoreContainer>        
     )
}

export default StorePage