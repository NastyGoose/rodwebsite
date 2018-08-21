import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Redirect from 'react-router-dom/es/Redirect';

// component
class Header extends PureComponent {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed',
      goTo: '/products',
      active: true
    };
  }

  componentDidMount () {
    this.navList.style.marginTop = ((window.innerHeight / 2) - (this.navList.clientHeight)).toString() + 'px';
    this.marginLeft = this.navList.style.marginLeft;
  }

  handleClick (page) {
    switch (page) {
      case 'home': this.setState({goTo: '/'}); break;
      case 'products': this.setState({goTo: '/products'}); break;
    }
  }

  toggle () {
    let active = this.state.active;
    this.setState({ active: !active });
    if (active) setTimeout(() => this.navList.style.marginLeft = '-300px', 1000);
    else this.navList.style.marginLeft = this.marginLeft;
  }

  render () {
    return (
      <React.Fragment>
        <Redirect to={this.state.goTo} />
        <header>
          <div className='logo' >
            <a onClick={this.toggle}>LOGO</a>
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
                <a href='/Example'>Contacts</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className={this.state.active ? 'navList' : 'navList-active'} ref={(navList) => this.navList = navList} >
          <ul style={{fontSize: '40px'}}>
            <li><a href=''><FontAwesomeIcon onClick={() => this.handleClick('home')} icon={faHome} /></a></li>
            <li><a href=''><FontAwesomeIcon onClick={() => this.handleClick('products')} icon={faBriefcase} /></a></li>
            <li><a href='mailto:Staaalker@tut.by'> <FontAwesomeIcon icon={faEnvelope} /> </a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
};

export default Header;
