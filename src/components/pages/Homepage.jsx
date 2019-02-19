import React, { PureComponent } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Time from '../utilComponents/utilFunctions';
//component

const ipsum = `Агрогородок "Василишки" - одна из крупнейших деревень района, насчитывает 12 улиц, протяженностью свыше 10 км., население более почти две тысячи человек. В Василишковском центре культуры и досуга к услугам посетителей - 8 кружков, любительское объединение "Спадчына", музыкальная школа, уютная библиотека с читальным залом, компьютерный кабинет. Работают участковая больница, амбулатория и аптека.`;

const Banner = (props) =>(
    <div>
        <div>
            <ParallaxProvider>
                <main>
                    <nav />
                    <HeroBanner
                        min={'-20%'}
                        max={'20%'}
                        image= {props.picture}
                    >
                        {props.text}
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

class Homepage extends PureComponent {

    constructor() {
        super();
        this.state = {
            text: 'Хорошего',
            magicWord: '',
            today: Time.whatDayIsItToday(),
            greetingsTime: Time.whatTimeIsItNow(),
            previousWord: ''
        };
        this.writeText();
    }

    changeState = () => {
        const magicWords = ['Хорошего', 'Прекрасного', 'Удачного', 'Веселого', 'Доброго', 'Захватывающего', 'Продуктивного'];
        let statement;
        do {
            let index = Math.floor(Math.random() * (magicWords.length));
            statement = magicWords[index];
        } while (this.state.previousWord === statement);
        this.setState({
            text: statement,
            previousWord: statement
        });
        this.writeText();
     };

    deleteText = () => {
        this.interval = setInterval(() => {
            let word = this.state.magicWord;
            let letters = word.split('');
            letters.pop();
            this.setState({magicWord: letters.join('')});
            if(!this.state.magicWord) {
                clearInterval(this.interval);
                this.changeState();
            }
            }, 135);

    };

    writeText = () => {
    this.interval = setInterval(() => {
        if(this.state.text) {
        let word = this.state.text;
        let letters = word.split('');
        this.setState({magicWord: this.state.magicWord + letters.shift()});
        this.setState({text: letters.join('')});
            if(!this.state.text) {
                clearInterval(this.interval);
                setTimeout(this.deleteText, 5000);
            }} }, 135);

    };

    render() {
      const telling =
        <h1>
          На этом сайте <strong>вы</strong> можете <strong>заказать</strong> продукцию производимую ОАО <strong>"Василишки"</strong>.
        </h1>;

      const greetings =
        <h1>
          {this.state.greetingsTime} сайт предоставлен <strong>
            <mark className='BartMarker'>ОАО "Василишки"</mark>
        </strong>
        </h1>;
    return (
    <div>
        <Banner
            text={greetings}
            picture= {require('../../assets/images/field.jpg')}
        />
            <div
                className='container-fluid'
                style={{ height: '700px' }}>
                <h1>
                    О нас:
                </h1>
                <div className='firstSpeech'>
                    <p className='firstLine'>
                        Этот <mark>сайт</mark> создан для заказа продукции у ОАО "Василишки".
                    </p>
                <br/>
                    <p className='secondLine'>
                        Он создан в ходе произвостенной <mark>практики</mark>.
                    </p>
                <br/>
                    <p className='thirdLine'>
                        Сайт создан при помощи <mark>ReactJS</mark>.
                    </p>
                </div>
            </div>

        <Banner
            text={telling}
            picture = {require('../../assets/images/landscape.jpg')}
        />

        <div
            className='container-fluid'
            style={{ height: '700px' }}>
            <div className='secondSpeech'>
                <p className='secondLine'>{ipsum}</p>
            </div>
            <div className='magicText'>
                <h1>
                    Сегодня <strong style = {{color: 'chocolate'}}>{this.state.today}</strong>.
                </h1>
                <h1 style = {{marginTop: '10px !important'}}>
                    <strong style = {{color: 'chocolate'}}>{this.state.magicWord}</strong> дня!
                </h1>
            </div>
        </div>
    </div>
        )
    }

}

export default Homepage;




