import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Products from './Products';

import '../../styles/browse.scss';

export default class BrowsePage extends Component {
    render() {
        return(
            <div>
                <Header />
                <div id='content-container'>
                    <SideBar />
                    <Products />
                </div>
            </div>
        );
    }
}
