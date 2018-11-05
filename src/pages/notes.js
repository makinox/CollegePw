import React from 'react'
import { connect } from 'react-redux'

import NoteLayout from '../dist/notes/noteLayout'

class Notes extends React.Component {
  render() { return <NoteLayout note={this.props.note} /> }
}

function mapStateToProps(state) { return { note: state.note } }

export default connect(mapStateToProps)(Notes)