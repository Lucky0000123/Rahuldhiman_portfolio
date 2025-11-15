import React, { Component } from "react";
import "./SkillProgress.css";
import { Fade } from "react-reveal";

class SkillProgress extends Component {
  render() {
    const { skill, theme } = this.props;
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skill-progress-container">
          <div className="skill-progress-header">
            <span className="skill-name" style={{ color: theme.text }}>
              {skill.name}
            </span>
            <span
              className="skill-percentage"
              style={{ color: theme.imageHighlight }}
            >
              {skill.value}%
            </span>
          </div>
          <div
            className="skill-progress-bar-container"
            style={{ backgroundColor: theme.highlight }}
          >
            <div
              className="skill-progress-bar"
              style={{
                width: `${skill.value}%`,
                background: `linear-gradient(90deg, ${theme.imageHighlight}, ${theme.jacketColor})`,
              }}
            >
              <div className="skill-progress-shine"></div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default SkillProgress;
