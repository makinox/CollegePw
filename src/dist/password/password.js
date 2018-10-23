import React from 'react'
import {connect} from 'react-redux'

import PaswordLayout from './passwordLayout.js'

class Password extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.previus.value)
    console.log(e.target.new.value)
    console.log(this.props.user.password)
    if (e.target.previus.value === this.props.user.password){
      window.alert('Contraseña actualizada')
    } else {
      window.alert('Contraseña actual incorrecta')
    }
  }

  render() {return <PaswordLayout user={this.props.user} submit={this.handleSubmit} />}
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Password)