import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from '../../components/Edit';

import styles from './Note.css';
// import { updateNote, deleteNote, editNote } from './NoteActions';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane }) => {
    return (
        <ul className="notes">
            {notes.map((note) =>
                <Note 
                    id={note.id} 
                    key={note.id}
                    moveWithinLane={moveWithinLane}
                    laneId={laneId}
                >
                    <Edit 
                        editing={note.editing}
                        value={note.task}
                        onValueClick={() => editNote(note.id)}
                        onUpdate={(task) => updateNote({
                            ...note,
                            task,
                            editing: false,
                        })}
                        onDelete={() => deleteNote(note.id, laneId)}
                    />
                </Note>    
            )}
        </ul>
    );
};

Notes.propTypes = {
    notes: PropTypes.array,
    deleteNote: PropTypes.func,
    updateNote: PropTypes.func,
    laneId: PropTypes.string,
    editNote: PropTypes.func,
    editing: PropTypes.bool
};

export default Notes;