import React, {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component {
  render () {
    if (!this.props.project) {
      return (<p>Выберите автомобиль..</p>);
    } else {
      return (
        <div>
          <h2>{this.props.project.name}</h2>
          <img src={this.props.project.img} /> <br />
          <p>{this.props.project.desc}</p>
          <p>Скорость: {this.props.project.developers}</p>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    project: state.active
  };
}

export default connect(mapStateToProps)(Details);
