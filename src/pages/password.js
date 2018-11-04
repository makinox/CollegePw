import React from 'react'
import {connect} from 'react-redux'

import PaswordLayout from '../dist/password/passwordLayout.js'
import API from '../utils/api/user'

class Password extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append("password", e.target.new.value)
    
    if (e.target.previus.value === this.props.user.password){
      const res = await API.actualizeUser(this.props.user.id, form)
      if (res.status === 200) window.alert('Contraseña actualizada'); window.location.href = "/you"
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