import React from 'react'
import SubjectLayout from '../dist/subject/subjectLayout'
import { connect } from 'react-redux'

class Subject extends React.Component {

  state = {
    modal: true
  }

  handleNew = () => {
    this.setState({ modal: !this.state.modal})
  }

  handleUpdate = (el) => {
    window.alert(`El elemento ${el}`)
  }

  render() {return <SubjectLayout subjects={this.props.subjects} update={this.handleUpdate} neww={this.handleNew} modal={this.state.modal}/>}
}

const mapStateToProps = (state) => {return {subjects: state.subject}}

export default connect(mapStateToProps)(Subject)