import React from 'react'
import StateLayout from '../dist/stat/statLayout'
import { connect } from 'react-redux'

class State extends React.Component {

  state = {
    modal: false,
    title: null,
    update: null
  }

  handleNew = () => this.setState({ modal: !this.state.modal, title: 'Nueva evaluación', update: false})

  handleUpdate = (el) => this.setState({ modal: !this.state.modal, title: 'Editar evaluación', update: el})

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

  render(){return <StateLayout 
    rating={this.props.rating}
    update={this.handleUpdate} 
    neww={this.handleNew} 
    modal={this.state.modal}
    selected={this.state.selected}
    title={this.state.title}
    delete={this.handleDelete}
    submit={this.handleSubmit}/>}
}

function mapStateToProps(state) {return {rating: state.rating}}

export default connect(mapStateToProps)(State)