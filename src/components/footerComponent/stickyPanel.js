import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Sticky, StickyContainer } from 'react-sticky';
import { SocialIcon } from 'react-social-icons';

// component
class StickyPanel extends Component {
  render () {
    return (
      <div className='stickyPanel'>
        <div className='Icons'>

          <a className='first_f'>
            <a><SocialIcon url='https://www.tumblr.com/dashboard' className='tumbler' network='tumblr' color='#faeed7' style={{ height: 55, width: 55 }} /></a>
          </a>
          <a>
            <a><SocialIcon url='https://twitter.com/home?status=wow' id='twitter' network='twitter' color='#faeed7' style={{ height: 55, width: 55 }} /></a>
          </a>
          <a className='last_f'>
            <a><SocialIcon url='https://vk.com/bloodforbloodgod' className='vk' network='vk' color='#faeed7' style={{ height: 55, width: 55 }} /></a>
          </a>

        </div>
      </div>
    );
  }
}

export default StickyPanel;
