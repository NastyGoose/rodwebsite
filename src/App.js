import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//css
import './assets/css/default.min.css';

//components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";
import Products from "./components/pages/products";
import StickyPanel from "./components/footerComponent/stickyPanel";
import TweenLite from "gsap/TweenLite";
import {Power2} from "gsap";


const run = () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const  scrollAnimation = { scrollTop: window.innerHeight };
    const scrollTop = 0;

    const tween = TweenLite.to(scrollAnimation, 2, {
        scrollTop: scrollTop,
        ease: Power2.easeInOut,
        onUpdate: () => {
            window.scrollTo(0, scrollAnimation.scrollTop);
        }
    });

    window.addEventListener('mousewheel', function mouseHandler() {
        tween.kill();
        window.removeEventListener('mousewheel', mouseHandler, false);
    }, false);
};



class App extends Component {
  constructor(props)
  {
      super();
  }
    render() {
    return (

        <Router>

            <div className="App">

                <Header />

                    <Route exact path='/' component={Homepage}/>

                    <Route exact path='/Products' component={Products}/>

                    <StickyPanel/>

                <Footer/>

            </div>

        </Router>

    );
  }
}

export default App;

run();