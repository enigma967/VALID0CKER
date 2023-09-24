import React from "react";

export const BgSwitch = React.createContext();

class SwitchContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      BgColor: {
        backgroundColor: "Grey",
        borderTop: "3px",
        borderColor: "green",
      },
      isDisplay: "none",
      selected: {
        type1: true,
        type2: false,
        type3: false,
      },
    };
    this.changeBgLogin = this.changeBgLogin.bind(this);
    this.changeBgSignup = this.changeBgSignup.bind(this);
    this.changeToType1 = this.changeToType1.bind(this);
    this.changeToType2 = this.changeToType2.bind(this);
    this.changeToType3 = this.changeToType3.bind(this);
  }

  changeBgLogin() {
    if (this.state.checked) {
      this.setState({ checked: !this.state.checked });
    }
  }
  changeBgSignup() {
    if (!this.state.checked) {
      this.setState({ checked: !this.state.checked });
    }
  }

  changeToType1() {
    this.setState({
      selected: {
        type1: true,
        type2: false,
        type3: false,
      },
    });
  }

  changeToType2() {
    this.setState({
      selected: {
        type1: false,
        type2: true,
        type3: false,
      },
    });
  }

  changeToType3() {
    this.setState({
      selected: {
        type1: false,
        type2: false,
        type3: true,
      },
    });
  }

  render() {
    return (
      <BgSwitch.Provider
        value={{
          ...this.state,
          actionLogin: this.changeBgLogin,
          actionSignup: this.changeBgSignup,
          actionType1: this.changeToType1,
          actionType2: this.changeToType2,
          actionType3: this.changeToType3,
        }}
      >
        {this.props.children}
      </BgSwitch.Provider>
    );
  }
}

export default SwitchContext;
