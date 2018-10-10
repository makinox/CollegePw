import React from 'react'
import { connect } from 'react-redux';

import UserLayout from './userLayout'
import API from '../utils/api/user'

class User extends React.Component {

    async componentDidMount(){
        const {data} = await API.getUser(this.props.id)
        this.props.dispatch({
            type: 'INSERT_USER',
            payload: {
                user: data
            }
        })
    }

    render(){
        return <UserLayout data={this.props.user}/>
    }
}

function mapStateToProps(state){
    return {
        id: state.e.id,
        user: state.user
    }
}

export default connect(mapStateToProps)(User)