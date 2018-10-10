import React from 'react'
import { connect } from 'react-redux';

import UserLayout from './userLayout'
import API from '../utils/api/user'

class User extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount(){
        const {data} = await API.getUser(this.props.id)
        this.setState({data})
    }

    render(){
        return <UserLayout data={this.state.data}/>
    }
}

function mapStateToProps(state){
    return {
        id: state.e.id
    }
}

export default connect(mapStateToProps)(User)