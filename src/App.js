import React from 'react'
import Navbar from './dist/navbar/navbar'
import Core from './dist/utils/routes/routes'

export default class extends React.Component {
  render() {
    return (
      <Core>
        <Navbar />
      </Core>
    )
  }
}