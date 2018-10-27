import React from 'react'
import {connect} from 'react-redux'

import Navbar from './dist/navbar/navbar'
import Core from './dist/utils/routes/routes'

class Root extends React.Component {
  render() {
    return (
      <Core log={this.props.log}>
        <Navbar log={this.props.log} name={this.props.name}  />
      </Core>
    )
  }
}

function mapStateToProps(state) {
  return {
    log: state.log,
    name: state.user.name
  }
}

export default connect(mapStateToProps)(Root)