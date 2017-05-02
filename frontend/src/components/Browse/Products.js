import React, { Component } from 'react';
const img1 = require('../../../images/browse/red-dress.jpg');

export default class Products extends Component {
    render() {
        return(
            <div className="product_page">
                    <div className='product'>
                        <div className='clothe'> Pastel Red Dress </div>
                        <div className='designer'> by Alexander Wang </div>
                        <div className='photo'>  <img src={img1} alt={"Product"} /> </div>

                    </div>
                    <div className='product'>
                        <div className='clothe'> Pastel Red Dress </div>
                        <div className='designer'> by Alexander Wang </div>
                        <div className='photo'>  <img src={img1} alt={"Product"} /> </div>

                    </div>
                    <div className='product'>
                        <div className='clothe'> Pastel Red Dress </div>
                        <div className='designer'> by Alexander Wang </div>
                        <div className='photo'>  <img src={img1} alt={"Product"} /> </div>

                    </div>
                    <div className='product'>
                        <div className='clothe'> Pastel Red Dress </div>
                        <div className='designer'> by Alexander Wang </div>
                        <div className='photo'>  <img src={img1} alt={"Product"} /> </div>

                    </div>
                    <div className='product'>
                        <div className='clothe'> Pastel Red Dress </div>
                        <div className='designer'> by Alexander Wang </div>
                        <div className='photo'>  <img src={img1} alt={"Product"} /> </div>

                    </div>
            </div>
        );
    }
}
