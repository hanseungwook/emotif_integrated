import React, { Component } from 'react';
require('../../../images/browse/red-dress.jpg');

export default class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='category'>Tops</div>
                <div className='category'>Bottoms </div>
                <div className='category'>Dresses </div>
            </div>
        );
    }
}
