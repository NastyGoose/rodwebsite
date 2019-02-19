import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';

// component
class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <Button
          variant='outlined'
          className='contactBtn'
          href='mailto:home@vasilishki.by'
        >
              Связаться с нами!
        </Button>
      </footer>
    );
  }
}

export default Footer;
