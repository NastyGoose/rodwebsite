import React, { Component } from 'react';
import { flatten, times } from 'lodash';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

//component

const Banner = () =>(
    <div>
        <div>
            <ParallaxProvider>
                <main>
                    <nav />
                    <HeroBanner
                        min={'-20%'}
                        max={'20%'}
                        image= {require('../images/landscape.jpg')}
                    >
                        <h1>
                            Hi, we are <strong>Bart</strong>.
                        </h1>
                    </HeroBanner>
                </main>
            </ParallaxProvider>
        </div>
    </div>
);

const HeroBanner = ({ image, min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
);

class Homepage extends Component {
    constructor(props) {
        super();
    }
    render()
    {
        return (
    <div>
        <Banner/>

            <div
                className='container-fluid'
                style={{ height: '700px' }}>
                <h1>About us:</h1>
                <div>
                <p className='firstLine'>Our <mark>shiny company</mark> specialize on making small projects.</p>
                <br/>
                    <p className='secondLine'>For now we already made one baggy RTS <mark>game</mark> and currently we are trying to make it better.</p>
                <br/>
                    <p className='thirdLine'>We really appreciate <mark>you</mark> being on this website and hope you're liking it!</p>
                </div>
            </div>
    </div>
        )
    }

}

export default Homepage;




