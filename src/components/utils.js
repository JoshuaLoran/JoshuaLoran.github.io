import React, {Component} from "react";
import {withRouter} from "react-router-dom";

// Registered component with react-router that will scroll to top if links are executed
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);

export const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
