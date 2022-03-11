import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Slider.css';

export default class Slider extends Component {
  render() {
    return (
        <>
            <div className='banner_mn'>
                <div className='banner_slider'>
                    <OwlCarousel 
                        className='owl-theme'
                        items="1"
                        loop
                        autoplay
                    > 
                        <div className='item'>
                            <div className="bnnr_sld_sc">
                                <div className="container">
                                    <div className="banner_desc">
                                        <h2 className="title wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">Takeaway</h2>
                                        <p className="content wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">100% Recyclable</p>
                                    </div>
                                </div>
                                <div className="banner_img">
                                    <img src="https://ecopack.me/public/front/assets/images/banner/banner-2.png" alt="TAKEAWAY" />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="bnnr_sld_sc">
                                <div className="container">
                                    <div className="banner_desc">
                                        <h2 className="title wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">Bowls</h2>
                                        <p className="content wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">Biodegrable and Compostable</p>
                                    </div>
                                </div>
                                <div className="banner_img">
                                    <img src="https://ecopack.me/public/front/assets/images/banner/banner-1.png" alt="BOWLS" />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="bnnr_sld_sc">
                                <div className="container">
                                    <div className="banner_desc">
                                        <h2 className="title wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">Cutlery</h2>
                                        <p className="content wow fadeInUp" data-wow-duration="750ms" data-wow-delay="750ms">Eco-friendly Plant Based Material</p>
                                    </div>
                                </div>
                                <div className="banner_img">
                                    <img src="https://ecopack.me/public/front/assets/images/banner/banner-3.png" alt="CUTLERY" />
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>;
                </div>
            </div>
        </>
    )
  }
}
