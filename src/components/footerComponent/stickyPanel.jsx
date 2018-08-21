import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

// component
class StickyPanel extends Component {
  render () {
    return (
      <div className='stickyPanel'>
        <div className='Icons'>
          <a className='first_f'>
            <SocialIcon
              url='https://www.tumblr.com/dashboard'
              className='tumbler'
              network='tumblr'
              color='#faeed7'
              style={{ height: 55, width: 55 }}
            />
          </a>
          <a>
            <SocialIcon
              url='https://twitter.com/home?status=wow'
              id='twitter' network='twitter'
              color='#faeed7'
              style={{ height: 55, width: 55 }}
            />
          </a>
          <a className='last_f'>
            <SocialIcon
              url='https://vk.com/bloodforbloodgod'
              className='vk'
              network='vk'
              color='#faeed7'
              style={{ height: 55, width: 55 }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default StickyPanel;
