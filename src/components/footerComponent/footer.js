import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

// component
class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <Button variant='outlined' className='contactBtn' href='mailto:Staaalker@tut.by'>
              Contact us!
        </Button>
      </footer>
    );
  }
}

export default Footer;
