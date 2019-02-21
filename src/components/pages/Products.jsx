import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody,
  CardTitle, Button, UncontrolledCarousel} from 'reactstrap';
import Modal from 'react-responsive-modal';
import PropTypes from "prop-types";
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { changeState } from '../../actions/modalStatelAction';
import Select from '../utilComponents/Select';

class Products extends PureComponent {

  state = {
    goodsValue: '',
    servicesValue: ''
  }

  onChange = (e) => {
    const {value, name} = e.target;

    this.setState({
      [name]: value 
    })
  }

  onOpenModal = (options, valueName) => {
    this.props.changeState(options, valueName);
  };

  onCloseModal = () => {
    this.props.changeState([], null);
  };

  addOrder = (valueName) => {
    const {options} = this.props;
    const info = options.filter((item) => {
      if (item.name === this.state[valueName]) {
        return item;
      }
    })[0];

    axios.post('http://localhost:8080/database/addOrder', {
      "Type": valueName === "servicesValue" ? "Услуга" : "Продукция",
      "Name": this.state[valueName],
      "Description": !isEmpty(info) ? info.description : options[0].description,
      "Price": !isEmpty(info) ? info.price : options[0].price
    })
    .then(res => {
      console.log(res);
      this.props.changeState([], null);
      alert('Заказ успешно добавлен!');
    })
    .catch(err => {
      console.log(err);
      this.props.changeState([], null);
      alert('При добавлении заказа произошла ошибка.');
    })
  }

  get list () {
    return this.props.projects.map((project) => {
      return (
        <li
            className='reduxListItem'
            key={project.id}
        >
          <Card>
            <UncontrolledCarousel items={project.items} />
            <CardBody style={{maxHeight: '600px'}}>
              <CardTitle
                  style={{ marginTop: '0' }}
              >
                  {project.name}
              </CardTitle>
              <CardText>
                  {project.desc}
              </CardText>
              <Button
                  outline color='warning'
                  onClick={() => this.onOpenModal(project.options, project.valueName)}
              >
                  Подробнее
              </Button>
            </CardBody>
          </Card>
        </li>
      );
    });
  }

  render () {
    const label = 'Выберите что вам требуется'

    return (
      <div>
          <Modal
              className="goods-modal"
              open={this.props.open}
              onClose={this.onCloseModal}
              center
              styles={{modal: {
                minWidth: '800px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'}
              }}
          >
            <Select
              value={this.state[this.props.valueName]}
              label={label}
              options={this.props.options}
              name={this.props.valueName}
              changeHandler={this.onChange}
            />
            <Button
              className="submit-btn"
              color="warning"
              onClick={() => this.addOrder(this.props.valueName)}
            >
              Заказать
            </Button>
          </Modal>
          <ul className='reduxList'>
                  {this.list}
          </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects,
    open: state.actions.isOpen,
    valueName: state.actions.valueName,
    options: state.actions.options
  };
}

Products.propTypes = {
    text: PropTypes.string.isRequired,
    changeState: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { changeState })(Products);
