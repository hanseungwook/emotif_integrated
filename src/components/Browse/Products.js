import React, { Component } from 'react';
const img1 = require('../../../images/browse/red-dress.jpg');

export default class Products extends Component {
    render() {
        return(
            <div id='product-page'>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Pastel Red Dress </div>
                        <div className='product-designer'> by Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Pastel Red Dress </div>
                        <div className='product-designer'> by Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Pastel Red Dress </div>
                        <div className='product-designer'> by Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Pastel Red Dress </div>
                        <div className='product-designer'> by Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Pastel Red Dress </div>
                        <div className='product-designer'> by Alexander Wang </div>
                    </div>
            </div>
        );
    }
}
