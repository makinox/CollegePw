import React from 'react'

import Login from '../components/loginLayout'
import API from '../../api/login'

export default class extends React.Component {

    handleSubmit = async (e) => {
        e.preventDefault()

        const login = await API.getLogin(e.target.user.value, e.target.password.value)

        if (login) {
            console.log(login)
        } else {
            window.alert('Contraseña incorrecta')
        }
    }

    render() {
        return <Login submit={this.handleSubmit}/>
    }
}