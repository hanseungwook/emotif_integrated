import React, { Component } from 'react';
import BrowsePage from '../../components/Browse/BrowsePage';

export class BrowseContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Did mount");
    }

    componentWillUnmount() {
        console.log("Will unmount");
    }
    render() {
        return (
            <BrowsePage />
        );
    }
}

export default BrowseContainer;


