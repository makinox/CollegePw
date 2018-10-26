import React from 'react'
import { connect } from 'react-redux'

import NavbarLayout from './navbarLayout'

class Navbar extends React.Component {

	state = {
		click: false,
		display: 'none'
	}

	onClick = () => {
		
		if (this.state.click) {
			this.setState({display: 'none'})
		} else {
			this.setState({display: 'grid'})
		}

		this.setState({ click: !this.state.click})
	}

	logOut = () => {
		if (window.confirm('Seguro que desea cerrar sesión')) {
			this.props.dispatch({
				type: 'LOGIN',
				payload: {
					log: false
				}
			})
		}

		if (window.location.pathname !== '/') {
			window.location.href = '/'
		}
	}

	render() { return <NavbarLayout out={this.logOut} log={this.props.log} click={this.onClick} display={this.state.display}/> }
}

export default connect()(Navbar)