import React from 'react'
import { useSelector } from 'react-redux'
import { themeValueSelector } from '../../states/theme/themeSlice.js'
import {
  ReportContainer,
  SummaryReportContainer,
  SummaryReport,
  MiddleReportContainer,
  RevenueCard,
  SellerCard,
  CustomerRatingAndReviewsContainer,
  CustomerCard,
  RatingCard,
  RatingBar,
  TotalReviewsCard
} from './ReportStyle.js';

import { AChart } from '../../components/styles/Styles.js';

const option = {
  series: [560, 129, 73],
  labels: ['Active', 'Inactive', 'Popular'],
  chart: {
    background: 'transparent',
  }
};

const l_option = {
  series: [{
      name: 'Revenue',
      data: [800, 300, 1180, 300, 2900, 900, 1100, 1700, 353, 678, 1900, 560]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  chart: {
    stacked: false,
    background: 'transparent',
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
      formatter: (val) => (val / 1000) + "k",
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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

const c_option = {
  series: [5000, 740, 1300],
  labels: ['Active', 'Inactive', 'New User'], 
  chart: {
    background: 'transparent',
  },
  pie: {
    expandOnClick: false,
  },
};

const r_option = {
  series: [90],
  labels: ['Reviews'],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
};

  


const ReportPage = () => {

  const _theme = useSelector(themeValueSelector);

  return (
    <ReportContainer>
      <SummaryReportContainer>
        <SummaryReport>
          <div className='summary-report-icon'>
            <i class="ri-group-fill"></i>
          </div>
          <div className='summary-report-content'>
            <p>Total Customers</p>
            <h2>1.200k</h2>
          </div>
        </SummaryReport>
        <SummaryReport>
          <div className='summary-report-icon'>
            <i class="ri-group-2-fill"></i>
          </div>
          <div className='summary-report-content'>
            <p>Total Sellers</p>
            <h2>3.0k</h2>
          </div>
        </SummaryReport>
        <SummaryReport>
          <div className='summary-report-icon'>
            <i class="ri-wallet-3-fill"></i>
          </div>
          <div className='summary-report-content'>
            <p>Total Earnings</p>
            <h2>12.9k</h2>
          </div>
        </SummaryReport>
      </SummaryReportContainer>
      <MiddleReportContainer>
        <RevenueCard>
          <h2>Revenue</h2>
          <AChart options={{...l_option, theme: {
      mode: _theme, 
      palette: 'palette1', 
  }}} series={l_option.series} type="area" width="100%" height="250px"/>
        </RevenueCard>
        <SellerCard>
          <h2>Sellers</h2>
          <div><AChart options={{ ...option, theme: { mode: _theme, palette: 'palette1' } }} series={option.series} type="donut" width="100%" height="250px"/></div>
        </SellerCard>
      </MiddleReportContainer>
      <CustomerRatingAndReviewsContainer>
        <CustomerCard>
          <h2>Customers</h2>
          <div><AChart options={{ ...c_option, theme: { mode: _theme, palette: 'palette1' } }} series={c_option.series} type="pie" width="100%" height="250px" /></div>
        </CustomerCard>
        <RatingCard>
          <h2>Total Ratings</h2>
          <div className='rating-container'>
            <div className='rating-section'>
              <div className='star-section'>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>                               
                <i class="ri-star-half-s-fill"></i>
                <p>2,345</p>
              </div>
              <div className='total-rating'>
                <p>4.5 out of 5 stars</p>
              </div>
            </div>
            <div className='rating-progress'>
              <RatingBar value={80}>
                <div className='star-info'>
                  <p>5</p>
                </div>
                <div className='progress-bar'><span></span></div>
                <p></p>
              </RatingBar>
              <RatingBar value={14}>
                <div className='star-info'>
                  <p>4</p>
                </div>
                <div className='progress-bar'><span></span></div>
                <p></p>
              </RatingBar>
              <RatingBar value={7}>
                <div className='star-info'>
                  <p>3</p>
                </div>
                <div className='progress-bar'><span></span></div>
                <p></p>
              </RatingBar>
              <RatingBar value={3}>
                <div className='star-info'>
                  <p>2</p>
                </div>
                <div className='progress-bar'><span></span></div>
                <p></p>
              </RatingBar>
              <RatingBar value={4}>
                <div className='star-info'>
                  <p>1</p>
                </div>
                <div className='progress-bar'><span></span></div>
                <p></p>
              </RatingBar>
            </div>
          </div>
        </RatingCard>
        <TotalReviewsCard>
          <h2>Total Reviews</h2>
          <div><AChart options={r_option} series={r_option.series} type="radialBar" width="100%" height="250px" /></div>
        </TotalReviewsCard>
      </CustomerRatingAndReviewsContainer>
    </ReportContainer>
  )
}

export default ReportPage
