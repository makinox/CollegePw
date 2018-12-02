import React from 'react'
import { connect } from 'react-redux'

import NoteLayout from '../dist/notes/noteLayout'

class Notes extends React.Component {

  state = {
    modal: false,
    title: null,
    update: null
  }

  handleNew = () => this.setState({ modal: !this.state.modal, title: 'Nueva nota', update: false})

  handleUpdate = (el) => this.setState({ modal: !this.state.modal, title: 'Editar nota', update: el})

  handleDelete = async (el) => {
    if (window.confirm(`Estás seguro de borrar ${el}`)) {
      // const res = await API.deleteSubjects(el)
      // console.log(res)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { asignature , grade } = e.target
    const form = new FormData()
		form.append('name', asignature.value)
		form.append('grade', grade.value)

    if (this.state.update) {
      // const res = await API.putSubjects(form, this.state.update)
      // console.log(res)
    } else {
      // const res = await API.postSubjects(form)
      // console.log(res)
    }
  }

  render() { return <NoteLayout 
    note={this.props.note} 
    update={this.handleUpdate} 
    neww={this.handleNew} 
    modal={this.state.modal}
    selected={this.state.selected}
    title={this.state.title}
    delete={this.handleDelete}
    submit={this.handleSubmit}/>}
}

function mapStateToProps(state) { return { note: state.note } }

export default connect(mapStateToProps)(Notes)