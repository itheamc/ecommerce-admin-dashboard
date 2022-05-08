import React from 'react'
import {
    OrderDetailsContainer,
    OrderHeader,
    OrderDetailsContents, 
    OrderItemsCard,
    OrderSummaryCard,
    CustomerAndOrderDetailsContainer,
    CustomerDetailsCard,
    DeliveryAddressCard,
    CourierDetailsCard
} from './OrderStyle'
import { Table } from '../../../components/styles/Styles.js';

const OrderPage = () => {
  return (
        <OrderDetailsContainer>
            <OrderHeader>
                <h2>Order Number</h2>
                <h2 className='order-number'>#2434566</h2>
            </OrderHeader>
            <OrderDetailsContents>
                <OrderItemsCard>
                    <Table>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>Items</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3].map((item, index) => {
                                    return (
                                        <tr key={item}>
                                            <td>{item}</td>
                                            <td>
                                                <div>
                                                    <img src="assets/images/nike1.png" alt="Sneakers Skate Shoe" />
                                                    <p>Sneakers Skate Shoe</p>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>$10</td>
                                            <td>$30</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>      
                    </Table>
                </OrderItemsCard>
                <OrderSummaryCard>
                   <div className='order-summary-header'>
                      <h3>Order Summary</h3>
                      <p>On The Way</p>
                    </div>
                    <div className='order-summary-details'>
                        <div className='order-summary-events'>
                            <p>Order Created</p>
                            <p>Order Time</p>
                            <p>Subtotal</p>
                            <p>Delivery Fee</p>
                        </div>
                        <div className='order-summary-values'>
                            <p>May 7, 2022</p>
                            <p>12:00 PM</p>
                            <p>$50</p>
                            <p>$1</p>
                        </div>
                    </div>
                   <div className='order-summary-amount'>
                        <p>Total</p>
                        <p>$51</p>
                    </div>
                </OrderSummaryCard>
            </OrderDetailsContents>
            <CustomerAndOrderDetailsContainer>
                <CustomerDetailsCard>
                    <h3>Customer Details</h3>
                    <div className="customer-details">
                        <p><span className='customer-details-label'>Customer Name: </span><span className='customer-details-value'>John Doe</span> </p>
                        <p><span className='customer-details-label'>Email: </span><span className='customer-details-value'>john@email.com</span> </p>
                        <p><span className='customer-details-label'>Phone Number: </span><span className='customer-details-value'>+977 9876543210</span></p>
                    </div>
                </CustomerDetailsCard>
                <DeliveryAddressCard>
                  <h3>Deliver Address</h3>
                  <div className="customer-address-details">
                        <p><span className='address-labels'>Address Line: </span><span className='address-values'>South Road</span> </p>
                        <p><span className='address-labels'>Flat/Bulding Name: </span><span className='address-values'>Bulding 1</span> </p>
                        <p><span className='address-labels'>Street Name: </span><span className='address-values'>Gadhawa-7 Kanchhi Gaun</span></p>
                        <p><span className='address-labels'>City: </span><span className='address-values'>Ghorahi</span></p>
                        <p><span className='address-labels'>State: </span><span className='address-values'>Lumbini</span></p>
                  </div>
                </DeliveryAddressCard>
              <CourierDetailsCard>
                  <h3>Courier Details</h3>
                  <div className="courier-address">
                        <p><span> <img src="assets/images/logo.png" alt="logo" /> </span><span className='change'>Sagha Courier</span> </p>
                        <p><span>Email: </span><span className='change'>abc@gmail.com</span> </p>
                        <p><span>Phone Number: </span><span className='change'>+977 9834982356</span></p>
                  </div>
                </CourierDetailsCard>
            </CustomerAndOrderDetailsContainer>
        </OrderDetailsContainer>
    )
}

export default OrderPage