import React from 'react'
import SubjectLayout from '../dist/subject/subjectLayout'
import { connect } from 'react-redux'

class Subject extends React.Component {

  state = {
    modal: false,
    title: null,
    update: false
  }

  handleNew = () => {
    this.setState({ modal: !this.state.modal, title: 'Nueva asignatura', update: false})
  }

  handleUpdate = (el) => {
    this.setState({ modal: !this.state.modal, title: 'Editar asignatura', update: true})
    console.log(el)
  }

  handleDelete = (el) => {
    window.confirm(`Estás seguro de borrar ${el}`)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {return <SubjectLayout 
    subjects={this.props.subjects} 
    update={this.handleUpdate} 
    neww={this.handleNew} 
    modal={this.state.modal}
    selected={this.state.selected}
    title={this.state.title}
    delete={this.handleDelete}
    submit={this.handleSubmit}/>}
}

const mapStateToProps = (state) => {return {subjects: state.subject}}

export default connect(mapStateToProps)(Subject)