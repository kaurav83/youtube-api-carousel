import React, {Component, Fragment} from 'react';

class NewTestComponent extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default NewTestComponent;

