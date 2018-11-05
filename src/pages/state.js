import React from 'react'
import StateLayout from '../dist/stat/statLayout'
import { connect } from 'react-redux';

class State extends React.Component {
  render(){return <StateLayout rating={this.props.rating}/>}
}

function mapStateToProps(state) {return {rating: state.rating}}

export default connect(mapStateToProps)(State)