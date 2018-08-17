import React, { PureComponent } from 'react';

// component
class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <div className='infoStuff'>
          <h1>
              Adress:blahblahblah <br />
              Telefon number:+blahblahblah <br />
              Email:blahblahblah@blah.com
          </h1>
        </div>
      </footer>
    );
  }
}

export default Footer;
