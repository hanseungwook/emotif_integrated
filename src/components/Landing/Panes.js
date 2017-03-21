import React, { Component, PropTypes } from 'react';
import Scroll from 'react-scroll';
import Hero from './Hero';
import Manifesto from './Manifesto';
import Waitlist from './Waitlist';

var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
var scroller   = Scroll.scroller;

export default class Panes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.documentElement.addEventListener('scroll', this.handleScroll);

    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', to, element);
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.handleScroll);
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
  handleSetActive(to) {
    console.log(to);
  }
  handleScroll() {
   this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
   console.log('scroll logged');
   }


  render()
  {
    let name = '';
    switch(this.props.paneId){
      case(1):
        name = 'hero';
        break;
      case(2):
        name = 'manifesto';
        break;
      case(3):
        name = 'waitlist';
        break;
    }
    scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
    }, console.log(name)
    );


    return (
      <div className='panes' onScroll={() => this.handleScroll()}>
        <Element name='hero' className='element'></Element>
        <Hero       ref='hero' onSwitchPane={this.props.onSwitchPane} />
        <Element name='manifesto' className='element'></Element>
        <Manifesto  ref='manifesto'/>
        <Element name='waitlist' className='element'></Element>
        <Waitlist   ref='waitlist' onWaitlistClick={this.props.onWaitlistClick} />
      </div>
    );


  }
}

Panes.propTypes =
{
  onWaitlistClick: PropTypes.func.isRequired,
  onSwitchPane:    PropTypes.func.isRequired,
  paneId          : PropTypes.number.isRequired,
};
