import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeState } from '../../actions/sidebarStateAction';

// component
class Header extends PureComponent {
   constructor() {
     super();
     this.state = {
         showOverlay: true
     }
    }

  get path () {
    return this.props.path;
  }

  toggle = () => {
    this.props.changeState(!this.props.showSidebar);
    if (this.state.showOverlay) this.setState({showOverlay: false});
  };

  render () {
    const isAuth = localStorage.getItem('jwtToken');
    console.log(isAuth);
    return (
      <header>
        <Redirect to={this.path} />
            <div className='logo' >
                <a ref={text => {
                    this.target = text;
                }} onClick={this.toggle}>LOGO</a>
            </div>
        <nav>
          <ul>
            <li className='first'>
              <Link to='/'>На главную</Link>
            </li>
            <li>
              |
            </li>
            <li>
              <Link to='/Products'>Регистрация</Link>
            </li>
            <li>
              |
            </li>
            <li>
              <Link to='/Example'>Вход</Link>
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
    showSidebar: state.actions.showSidebar,
    isSignedIn: state.actions.isSignedIn
  };
}

Header.propTypes = {
  changeState: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { changeState })(Header);
