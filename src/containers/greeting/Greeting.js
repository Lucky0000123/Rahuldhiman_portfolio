import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import TypingEffect from "../../components/typingEffect/TypingEffect";
import "../../components/typingEffect/TypingEffect.css";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <div className="greeting-role-container">
                <h2
                  className="greeting-role"
                  style={{ color: theme.imageHighlight }}
                >
                  <TypingEffect
                    strings={[
                      "Full Stack Developer 💻",
                      "Problem Solver 🚀",
                      "UI/UX Enthusiast 🎨",
                      "Open Source Contributor 🌟",
                      "Tech Explorer 🔍",
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                  />
                </h2>
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* Statistics Section */}
              <div className="greeting-stats">
                <div
                  className="stat-item"
                  style={{ borderColor: theme.highlight }}
                >
                  <h3 style={{ color: theme.text }}>3+</h3>
                  <p style={{ color: theme.secondaryText }}>Years Experience</p>
                </div>
                <div
                  className="stat-item"
                  style={{ borderColor: theme.highlight }}
                >
                  <h3 style={{ color: theme.text }}>50+</h3>
                  <p style={{ color: theme.secondaryText }}>Projects Done</p>
                </div>
                <div
                  className="stat-item"
                  style={{ borderColor: theme.highlight }}
                >
                  <h3 style={{ color: theme.text }}>100+</h3>
                  <p style={{ color: theme.secondaryText }}>GitHub Repos</p>
                </div>
              </div>

              <SocialMedia theme={theme} />

              <div className="button-greeting-div">
                <Button
                  text="📥 Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="main-button"
                />
                <Button
                  text="📧 Contact Me"
                  href="/contact"
                  theme={theme}
                  className="main-button"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
