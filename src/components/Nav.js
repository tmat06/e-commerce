import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Landing from './Landing/Landing';
import Shirts from './Shirts/Shirts';
import Pants from './Pants/Pants';
import BowTies from './BowTies/BowTies';
import NeckTies from './NeckTies/NeckTies';
import SkinnyTies from './SkinnyTies/SkinnyTies';
import Socks from './Socks/Socks';
import TieBars from './TieBars/TieBars';
import Accessories from './Accessories/Accessories';
import Wedding from './Wedding/Wedding';
import Gifts from './Gifts/Gifts';
import PocketSquares from './PocketSquares/PocketSquares';

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='nav'>
                <div className='upperNav'>
                    <div className='col-lg-4'>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search Bar" aria-describedby="Contains Search Feature" />
                    </div>
                    <h1 className='col-lg-4'>The Tie Bar</h1>
                    <div className='signWishCart col-lg-4'>
                        <button>Sign In</button>
                        <button>Wishlist</button>
                        <button>Cart</button>
                    </div>
                </div>
                <div className='lowerNav'>
                    <Link to='/' path={Landing} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Home
                        </div>
                    </Link>
                    <Link to='/shirts' path={Shirts} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Shirts
                    </div>
                    </Link>
                    <Link to='/pants' path={Pants} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Pants
                    </div>
                    </Link>
                    <Link to='/bowties' path={BowTies} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            BowTies
                    </div>
                    </Link>
                    <Link to='/neckties' path={NeckTies} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            NeckTies
                    </div>
                    </Link>
                    <Link to='/skinnyties' path={SkinnyTies} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            SkinnyTies
                    </div>
                    </Link>
                    <Link to='/tiebars' path={TieBars} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            TieBars
                    </div>
                    </Link>
                    <Link to='/socks' path={Socks} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Socks
                    </div>
                    </Link>
                    <Link to='/pocketsquares' path={PocketSquares} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            PocketSquares
                    </div>
                    </Link>
                    <Link to='/accessories' path={Accessories} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Accessories
                    </div>
                    </Link>
                    <Link to='/wedding' path={Wedding} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Wedding
                    </div>
                    </Link>
                    <Link to='/gifts' path={Gifts} style={{ textDecoration: 'none' }}>
                        <div className='navButtons'>
                            Gifts
                    </div>
                    </Link>
                </div>
            </div >
        )
    }
}