import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Products from './Products';

import '../../styles/browse.scss';

export default class BrowsePage extends Component {
    render() {
        return(
            <div className='browse'>
                <Header />
                <div className="content_container">
                    <SideBar />
                    <Products />
                </div>
            </div>
        );
    }
}
