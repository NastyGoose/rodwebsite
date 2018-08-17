import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../../actions/mainAction';
import { Card, CardText, CardBody,
  CardTitle, Button, UncontrolledCarousel} from 'reactstrap';
import Modal from 'react-responsive-modal';

// <CardImg src={project.img} alt='Card image cap' />
// <Button outline color='warning' onClick={() => this.props.select(project)} key={project.id}>Learn more</Button>

class Products extends PureComponent {
    state = {
        open: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend lectus sit amet nisl pretium euismod. Sed aliquet, massa eu mollis varius, elit velit interdum mauris, et condimentum risus urna vel neque. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin diam urna, pulvinar sed turpis eget, rhoncus imperdiet purus. Phasellus eu urna placerat, ullamcorper enim at, maximus felis. Sed accumsan sed ipsum sit amet lacinia. Proin eu mi urna. Integer facilisis feugiat ultrices. Nulla aliquam urna vel neque consectetur, et faucibus nunc pulvinar. Proin fermentum, ante sed rutrum efficitur, tortor dolor dignissim ligula, sodales accumsan mauris nunc aliquam felis. Nullam elit urna, efficitur id tincidunt ut, porta in justo.\n' +
            '\n' +
            'Nulla facilisi. Vestibulum blandit commodo nunc sed egestas. Duis lorem urna, mollis vitae ante ac, consectetur pretium dui. In eu ligula turpis. Nam porttitor, orci ac fringilla convallis, eros lectus posuere odio, eu dignissim arcu neque vitae massa. Suspendisse efficitur odio ac ipsum euismod, ut pellentesque dolor consequat. Phasellus semper imperdiet tellus euismod laoreet. Suspendisse potenti. Donec ac maximus diam.\n' +
            '\n' +
            'Vivamus vel scelerisque leo. Ut sit amet interdum erat. Vestibulum et purus sed eros consequat suscipit vel ut mauris. Sed diam felis, lobortis a elit nec, consectetur porttitor tellus. Cras suscipit enim ac nisi elementum, feugiat congue nisl elementum. Donec eu euismod turpis. Nulla libero turpis, vestibulum eget turpis ac, commodo ultricies nibh. Vivamus interdum suscipit sollicitudin.\n' +
            '\n' +
            'Mauris sollicitudin ornare metus quis sollicitudin. Donec in mi eget risus egestas viverra eu et ligula. Curabitur faucibus felis id malesuada tincidunt. In eu sodales urna. Fusce iaculis feugiat nunc. Vivamus luctus arcu eu ipsum rhoncus sagittis. Sed egestas ex quam, non ornare quam mattis at. In convallis tempor metus, at tempor lacus bibendum in. Nunc rutrum vestibulum massa vel consequat.\n' +
            '\n' +
            'Donec sodales nisi sed nunc fermentum, id fermentum tortor iaculis. Praesent at consequat ante. Quisque eu accumsan nibh, non pretium erat. Sed consequat laoreet tellus eu consequat. Nulla sit amet quam hendrerit, tincidunt est vehicula, bibendum lectus. Nulla eu accumsan velit, id hendrerit elit. Vivamus est odio, tempor eget libero at, rutrum rhoncus eros. Morbi non fringilla massa. Sed malesuada elit non dui ullamcorper vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in ex arcu. Quisque efficitur augue tellus, in fringilla massa dignissim et.'
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
  showList () {
    // eslint-disable-next-line react/prop-types
    return this.props.projects.map((project) => {
      return (
        <li className='reduxListItem' >
          <Card>
            <UncontrolledCarousel items={project.items} />
            <CardBody>
              <CardTitle style={{ marginTop: '0' }}>{project.name}</CardTitle>
              <CardText>{project.desc}</CardText>
              <Button outline color='warning' onClick={this.onOpenModal}>Learn more</Button>
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
                  {this.showList()}
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

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Products);
