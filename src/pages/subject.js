import React from 'react'
import { connect } from 'react-redux'

import SubjectLayout from '../dist/subject/subjectLayout'
import API from '../utils/api/subjects'

class Subject extends React.Component {

  state = {
    modal: false,
    title: null,
    update: null
  }

  handleNew = () => this.setState({ modal: !this.state.modal, title: 'Nueva asignatura', update: false})

  handleUpdate = (el) => this.setState({ modal: !this.state.modal, title: 'Editar asignatura', update: el})

  handleDelete = async (el) => {
    if (window.confirm(`Estás seguro de borrar ${el}`)) {
      const res = await API.deleteSubjects(el)
      console.log(res)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { asignature , grade } = e.target
    const form = new FormData()
		form.append('name', asignature.value)
		form.append('grade', grade.value)

    if (this.state.update) {
      const res = await API.putSubjects(form, this.state.update)
      console.log(res)
    } else {
      const res = await API.postSubjects(form)
      console.log(res)
    }
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