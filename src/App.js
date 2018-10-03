import React, { Component } from 'react'
import Navbar from './dist/sections/components/navbar'
import Core from './dist/core/routes'

class App extends Component {
  render() {
    return (
      <Core>
        <Navbar />
      </Core>
    )
  }
}

export default App
