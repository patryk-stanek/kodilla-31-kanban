import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit';

// Import Style
import styles from './Lane.css';

class Lane extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {
    const {
      lane,
      laneNotes,
      updateLane,
      addNote,
      deleteLane,
      editLane
    } = props;

    const laneId = lane.id;

    return connectDropTarget(
      <div className={styles.Lane}>
        <div className={styles.LaneHeader}>
          <div className={styles.LaneAddNote}>
            <button onClick={() => addNote({task: 'New Note'}, laneId)}>Add Note</button>
          </div>
          <Edit 
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}
            onUpdate={name => updateLane({
              ...lane,
              name,
              editing: false
            })}
          />
          <div className={styles.LaneDelete}>
            <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
          </div>
          <NotesContainer
            notes={laneNotes}
            laneId={laneId}
          />
        </div>
      </div>
    )
  }
}

// const Lane = (props) => {
  

//   return (
//   )
// }

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func
};

export default Lane;
