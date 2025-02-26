/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router'

function PopularPost() {
  return (
  <div className="page">
    <br />
    <section class="section novi-background section-sm">
        <div class="container">
          <div class="layout-bordered">
            <div class="layout-bordered-item wow-outer">
              <div class="layout-bordered-item-inner wow slideInUp">
                <div class="icon novi-icon icon-lg mdi mdi-star text-primary">
                  <h4>--- Popular ---</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='TopBlog'>
        <div class="card">
            <div class="thumbnail">
                <img class="left" src="Assets/Home_pub/house(2).png" alt='' />
            </div>
            <div class="right">
                <h1>We announce five new buildings by March, 2025</h1>
                <div class="author">
                    <img src="Assets/Profile/profile3.png" />
                    <h2>Yotcheb Jhon</h2>
                </div>
                <div class="separator"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eius rem aperiam eligendi, enim, laboriosam ullam odit vel quasi laudantium impedit? Iste ut expedita eos maxime sequi praesentium! Amet aliquam ducimus facere velit ullam animi aperiam cupiditate suscipit iusto est nihil sed minus officiis adipisci repudiandae dolorem, fuga iure iste?</p>
            </div>
            <h5>05</h5>
            <h6>JANUARY</h6>
            <ul>
                <li>
                    <i class="fa fa-eye fa-2x"></i>
                </li>
                <li>
                    <i class="fa fa-envelope-o fa-2x"></i>
                </li>
                <li>
                    <i class="fa fa-share-alt fa-2x"></i>
                </li>
            </ul>
            {/* <div class="fab">
            <i class="fa fa-heart-o fa-2x"></i>
            </div> */}
        </div>
    </div>
  </div>
  )
}

export default PopularPost