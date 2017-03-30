import React, { Component } from 'react';
import img1 from '../../../images/browse/red-dress.jpg';
import img2 from '../../../images/browse/red-dress.jpg';
import img3 from '../../../images/browse/red-dress.jpg';

export default class Products extends Component {
    render() {
        return(
            <div id='product-page'>
                    <div className='product'>
                        <div className='product-img'>  <img src={img1} alt={"Product"} /> </div>
                        <div className='product-title'> Red Dress </div>
                        <div className='product-designer'> Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img2} alt={"Product"} /> </div>
                        <div className='product-title'> Red Dress </div>
                        <div className='product-designer'> Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img3} alt={"Product"} /> </div>
                        <div className='product-title'> Red Dress </div>
                        <div className='product-designer'> Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img3} alt={"Product"} /> </div>
                        <div className='product-title'> Red Dress </div>
                        <div className='product-designer'> Alexander Wang </div>
                    </div>
                    <div className='product'>
                        <div className='product-img'>  <img src={img3} alt={"Product"} /> </div>
                        <div className='product-title'> Red Dress </div>
                        <div className='product-designer'> Alexander Wang </div>
                    </div>
            </div>
        );
    }
}
