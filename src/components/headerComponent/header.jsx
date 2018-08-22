import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom/es/Redirect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeState } from '../../actions/sidebarStateAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// component
class Header extends PureComponent {
  get path () {
    return this.props.path;
  }

  toggle = () => {
    this.props.changeState(!this.props.showSidebar);
  };

  render () {
    return (
      <header>
        <Redirect to={this.path} />
        <div className='logo'>
            <FontAwesomeIcon
                style={{fontSize: '45px'}}
                onClick={this.toggle}
                icon={faHeart}
            />
        </div>
        <nav>
          <ul>
            <li className='first'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Products'>Products</Link>
            </li>
            <li className='last'>
              <Link to='/Example'>Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps (state) {
  return {
    path: state.actions.path,
    showSidebar: state.actions.showSidebar
  };
}

Header.propTypes = {
  changeState: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { changeState })(Header);
