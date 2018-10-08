import React from 'react'
import Navbar from './dist/sections/components/navbar'
import Core from './dist/core/routes'

export default class extends React.Component {
  render() {
    return (
      <Core>
        <Navbar />
      </Core>
    )
  }
}