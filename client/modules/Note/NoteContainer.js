import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions'
import { updateNoteRequest, deleteNoteRequest } from './NoteActions';

const mapDispatchToProps = {
    ...noteActions,
    noteUpdate: updateNoteRequest,
    noteDelete: deleteNoteRequest,
};

export default connect(
    null,
    mapDispatchToProps
)(Notes);