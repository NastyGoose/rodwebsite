import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody,
  CardTitle, Button, UncontrolledCarousel} from 'reactstrap';
import Modal from 'react-responsive-modal';

// <Button outline color='warning' onClick={() => this.props.select(project)} key={project.id}>Learn more</Button>
class Products extends PureComponent {
    state = {
        open: false,
        text: ''
    };

    onOpenModal = (addInfo) => {
        this.setState({ open: true , text: addInfo});
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

  get list () {
    // eslint-disable-next-line react/prop-types
    return this.props.projects.map((project) => {
      return (
        <li className='reduxListItem' key={project.id}>
          <Card>
            <UncontrolledCarousel items={project.items} />
            <CardBody>
              <CardTitle style={{ marginTop: '0' }}>{project.name}</CardTitle>
              <CardText>{project.desc}</CardText>
              <Button outline color='warning' onClick={() => this.onOpenModal(project.addInfo)}>Learn more</Button>
            </CardBody>
          </Card>
        </li>
      );
    });
  }

  render () {
      const { open } = this.state;
    return (
      <div>
          <Modal open={open} onClose={this.onCloseModal} center>
              {this.state.text}
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
    projects: state.projects
  };
}

export default  connect(mapStateToProps)(Products);
