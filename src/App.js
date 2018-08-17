import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// css
import './assets/css/default.min.css';
import './assets/scss/default.scss';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import StickyPanel from './components/footerComponent/stickyPanel';
import Example from './components/pages/testPage';

// animations
import TweenLite from 'gsap/TweenLite';
import {Power2} from 'gsap';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/reducer';

const store = createStore(allReducers);

class App extends PureComponent {
  constructor (props) {
    super();
    this.scrollToTop();
  }

  componentDidMount () {
    document.title = 'Bart';
  }

  scrollToTop () {
    const scrollAnimation = { scrollTop: window.innerHeight };
    const scrollTop = 0;

    const tween = TweenLite.to(scrollAnimation, 2, {
      scrollTop: scrollTop,
      ease: Power2.easeInOut,
      onUpdate: () => {
        window.scrollTo(0, scrollAnimation.scrollTop);
      }
    });

    window.addEventListener('mousewheel', function mouseHandler () {
      tween.kill();
      window.removeEventListener('mousewheel', mouseHandler, false);
    }, false);
  };

  scrollToContacts () {
    this.contacts.scrollIntoView({ behavior: 'smooth' });
  }

  render () {
    return (

      <Router>

        <div className='App'>

          <Header />

          <Route exact path='/' component={Homepage} />

          <Provider store={store}>
            <Route exact path='/Products' component={Products} />
          </Provider>

          <Route exact path='/Example' component={Example} />

          <StickyPanel />

          <Footer ref={(ct) => { this.contacts = ct; }} />

        </div>

      </Router>

    );
  }
}

export default App;
