import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions'
import { updateNoteRequest, deleteNoteRequest, editNote, moveWithinLane } from './NoteActions';

const mapDispatchToProps = {
    onValueClick: editNote,
    onUpdate: updateNoteRequest,
    onDelete: deleteNoteRequest,
    moveWithinLane
};

export default connect(
    null,
    mapDispatchToProps
)(Notes);