import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BrowsePage from '../../components/Browse/BrowsePage';
const Scroll = require('react-scroll');

const Link       = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

export class BrowseContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Did mount");

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", to, element);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", to, element);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        console.log("Will unmount");
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollTo() {
        scroll.scrollTo(100);
    }

    scrollMore() {
        scroll.scrollMore(100);
    }

    handleSetActive() {
        console.log(to);
    }

    render() {
        return (
            <BrowsePage />
        );
    }
}

export default BrowseContainer;


