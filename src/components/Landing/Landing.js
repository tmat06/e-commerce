import React, { Component } from 'react';
import Multi from './../Multi';

export default class Landing extends Component {
    render() {
        return (
            <div className='displayPage'>
                {/* Carousel */}
                <div style={{ backgroundColor: 'gold', height: '40px' }}>
                    <div className="carousel slide" data-ride="carousel" data-interval="3500">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src='coupon1.PNG' alt='coupon1' />
                            </div>
                            <div className="carousel-item">
                                <img src='coupon2.PNG' alt='coupon2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src='LandingOpener.jpg' alt='male pants and shoes' />
                </div>
                <div className='sectionTitle'>
                    SHOP TIES & SHIRTS
                </div>
                <div className='sectionSubTitle'>
                    Menswear Trends & Tie Bar Favorites
                </div>
                <Multi/>
            </div>
        )
    }
}