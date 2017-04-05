import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
                <div id='navigation'>
                    <div className='header-side' id='left'> Pre-season </div>
                    <div className='header-logo' id='center'> émotif </div>
                    <div className='header-side' id='right'> Closet </div>
                </div>
        );
    }
}

