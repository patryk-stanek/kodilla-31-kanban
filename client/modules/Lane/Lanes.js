import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer';

import styles from './Lane.css';

const Lanes = ({lanes}) => {
    return (
        <div className={styles.lanes}>
            {lanes.map(lane => <Lane className="lane" key={lane.id} lane={lane} />)}
        </div>
    );
};

Lanes.propTypes = {
    lanes: PropTypes.array,
};

export default Lanes;