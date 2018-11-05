import React from 'react'
import RegisterLayout from '../dist/register/registerLayout'
import API from '../utils/api/entity'

export default class extends React.Component {

    handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
		form.append('name', e.target.entity.value)
		form.append('identity', 'lñlkñlkñlckvñmcxorp')
		form.append('max', e.target.max.value)
		form.append('responsable', e.target.user.value)
		form.append('pass', e.target.pass.value)
    
    const res = await API.newEntity(form)
    console.log(res)
  }

  render() {return <RegisterLayout submit={this.handleSubmit}/>}
}