import React from 'react'
import { connect } from 'react-redux'

import Login from './loginLayout'
import API from '../utils/api/login'

class LoginComponent extends React.Component {

	handleSubmit = async (e) => {
		e.preventDefault()

		const login = await API.getLogin(e.target.user.value, e.target.password.value)
		console.log(login)

		if (login) {
			debugger
			await this.props.dispatch({
				type: 'LOGIN',
				payload: {
					log: true,
					e: login
				}
			})

			window.location.href = "/"
		} else {
			window.alert('Contraseña incorrecta')
		}
	}

	render() {
		return <Login submit={this.handleSubmit} />
	}
}

export default connect()(LoginComponent)