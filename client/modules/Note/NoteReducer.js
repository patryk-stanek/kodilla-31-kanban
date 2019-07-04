// Import Actions
import {
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE
} from './NoteActions';

// Initial State
const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.note];
    
    case UPDATE_NOTE:
      return state.map((note) => {
        if (note.id === action.id) {
          return Object.assign({}, note, action.note);
        };
        return note;
      });

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.noteId);

    case EDIT_NOTE: {
      const editedNote = { ...state[action.noteId], editing: true };
      return { ...state, [action.noteId]: editedNote };
    }

    default:
      return state;
  }
}

// export default NoteReducer;