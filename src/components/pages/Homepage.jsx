import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import {
    FormGroup,
    FormControl,
    ControlLabel
  } from "react-bootstrap";

class Homepage extends PureComponent {
    onSubmit = () => {
      
    };

    render() {
      return (
        <div>
          <div
            className='container-fluid'
            style={{ height: '700px' }}
          >
            <h1>
              Текущий баланс: 
            </h1>
            <br/>
            <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Доход</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              ref={this.income}
              style={{width: '300px', margin: 'auto'}}
            />
            <ControlLabel>Расход</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              ref={this.outgo}
              style={{width: '300px', margin: 'auto'}}
            />
          </FormGroup>
          <Button
            outline color='default'
            onClick={() => this.onSubmit()}
          >
            Подтвердить
          </Button>
          </div>
        </div>
      )
    }
}

export default Homepage;




