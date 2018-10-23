import React from 'react'
import { connect } from 'react-redux';

import UserLayout from './userLayout'
import API from '../utils/api/user'
import API2 from '../utils/api/subjecUsers'
import API3 from '../utils/api/subjects'
import API4 from '../utils/api/notes'
import API5 from '../utils/api/ratings'

class User extends React.Component {

    async componentDidMount(){
        const {data} = await API.getUser(this.props.id)
        this.props.dispatch({
            type: 'INSERT_USER',
            payload: {
                user: data
            }
        })

        const susers = await API2.getSusers(this.props.id)
        const subjects = await susers.data.map( async (e) => await API3.getSubjects(e.id))
        const subject = await Promise.all(subjects).then(async values => await values.map(e => e.data))

        this.props.dispatch({
            type: 'INSERT_SUBJECTS',
            payload: {
                subject
            }
        })

        const note = await API4.getNotesByUser(this.props.id)
        this.props.dispatch({
            type: 'INSERT_NOTES',
            payload: {
                note: note.data
            }
        })

        const rating = await API5.getRatingsByUser(this.props.id)
        // console.log(rating.data)
        this.props.dispatch({
            type: 'INSERT_RATINGS',
            payload: {
                rating: rating.data
            }
        })

    }

    render(){
        return <UserLayout data={this.props.user} sub={this.props.subject} note={this.props.note} rating={this.props.rating} />
    }
}

function mapStateToProps(state){
    return {
        id: state.e.id,
        user: state.user,
        subject: state.subject,
        note: state.note,
        rating: state.rating
    }
}

export default connect(mapStateToProps)(User)