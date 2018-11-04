import React from 'react'
import { connect } from 'react-redux'

import Login from '../dist/login/loginLayout'
import API from '../utils/api/login'
// import Conn from 'unete-browser'

class LoginComponent extends React.Component {

	// async componentDidMount() {
	// 	const App = await Conn('http://192.168.10.211:5010')

	// 	await App.add(4,4)
	// }

	handleSubmit = async (e) => {
		e.preventDefault()

		const login = await API.getLogin(e.target.user.value, e.target.password.value)

		if (true) {
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