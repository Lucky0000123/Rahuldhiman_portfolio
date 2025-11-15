import React, { Component } from "react";

class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
    };
  }

  componentDidMount() {
    this.handleType();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleType = () => {
    const { strings, typeSpeed, backSpeed } = this.props;
    const { isDeleting, loopNum, text } = this.state;
    const i = loopNum % strings.length;
    const fullText = strings[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? backSpeed || 50 : typeSpeed || 100,
    });

    if (!isDeleting && text === fullText) {
      this.timeout = setTimeout(
        () => this.setState({ isDeleting: true }),
        1000
      );
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    } else {
      this.timeout = setTimeout(this.handleType, this.state.typingSpeed);
    }
  };

  render() {
    return (
      <span>
        {this.state.text}
        <span className="typing-cursor">|</span>
      </span>
    );
  }
}

export default TypingEffect;
