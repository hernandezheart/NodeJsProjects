import React from "react";
import PropTypes from "prop-types";
 
function Milestones({ milestones }) {
  return (
    <div className="section section-gradient">
      <div className="section-head">
        <h3>Milestones</h3>
      </div>
      <div className="milestones-grid">
        {milestones.map((m, i) => (
          <div className="milestone-card" key={i}>
            <div className="milestone-icon">🏆</div>
            <div className="milestone-text">{m}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
Milestones.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.string).isRequired,
};
 
Milestones.defaultProps = {
  milestones: [],
};
 
export default Milestones;
 