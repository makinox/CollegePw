import React from 'react'
import SubjectLayout from '../dist/subject/subjectLayout'
import { connect } from 'react-redux'

class Subject extends React.Component {
  render() {return <SubjectLayout subjects={this.props.subjects} />}
}

function mapStateToProps(state){
  return {
    subjects: state.subject
  }
}

export default connect(mapStateToProps)(Subject)