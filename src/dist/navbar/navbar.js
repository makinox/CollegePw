import React from 'react'
import {connect} from 'react-redux'

import NavbarLayout from './navbarLayout'

class Navbar extends React.Component {

    logOut = () => {
        if(window.confirm('Seguro que desea cerrar sesión')){
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

    render() {
        return <NavbarLayout out={this.logOut} log={this.props.log} />
    }
}

function mapStateToProps(state){
    return {
        log: state.log
    }
}

export default connect(mapStateToProps)(Navbar)