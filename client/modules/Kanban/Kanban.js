import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

//Drag and drop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';


import styles from './Kanban.css';

const Kanban = (props) => (
    <div>
        <button
            className={styles.AddLane}
            onClick={() => props.createLaneRequest({
                name: 'New lane',
        })}>
            Add lane
        </button>
        <Lanes lanes={props.lanes} />
    </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
    lanes: PropTypes.array,
    createLaneRequest: PropTypes.func,
};

const mapStateToProps = state => ({
    lanes: Object.values(state.lanes),
});

const mapDispatchToProps = {
    createLaneRequest,
    fetchLanes
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    DragDropContext(HTML5Backend)
)(Kanban);