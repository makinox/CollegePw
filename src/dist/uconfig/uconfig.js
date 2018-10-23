import React from 'react'
import ConfigLayout from './uconfigLayout'
import { connect } from 'react-redux';

class Config extends React.Component {
  render() {return <ConfigLayout user={this.props.user}/>}
}

function mapStateToProps(state) {return {user: state.user}}

export default connect(mapStateToProps)(Config)
