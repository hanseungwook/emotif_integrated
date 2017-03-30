import React, { Component } from 'react';
import dress from '../../../images/browse/red-dress.jpg';

export default class SideBar extends Component {
    render() {
    //    let category = ['tops', 'bottoms', 'dresses'];
        return (
                <div id='side-bar'>
                    <ul id='category-list'>
                        <li className='product-category'> tops </li>
                        <li className='product-category'> bottoms </li>
                        <li className='product-category'> dresses </li>
                    </ul>
                    <div id='designer-text'> designers </div>
                    <ul id='designer-list'>
                        <li className='designer-name'> Stella McCartney </li>
                        <li className='designer-name'> Ren Hang </li>
                        <li className='designer-name'> Tom Ford </li>
                        <li className='designer-name'> Issey Miyake </li>
                    </ul>
                </div>
        );
    }
}
