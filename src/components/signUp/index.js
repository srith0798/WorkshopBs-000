import HeaderNav from "../navBar";
import { Component } from "react";
import "./index.css";

class SignUp extends Component {
  state = {
    showErrNameMsg: false,
    nameInValue: "",
    emailInValue: "",
    pswdInValue: "",
    showErrPswdMsg: false,
    showErrEmailMsg: false,
    showSuccessModal: false,
  };

  blurName = (event) => {
    const nameValue = event.target.value === "";
    if (nameValue) {
      this.setState({
        showErrNameMsg: true,
      });
    } else {
      this.setState({
        showErrNameMsg: false,
      });
    }
  };

  blurEmail = (event) => {
    const emailValue = event.target.value === "";
    if (emailValue) {
      this.setState({
        showErrEmailMsg: true,
      });
    } else {
      this.setState({
        showErrEmailMsg: false,
      });
    }
  };

  blurPswd = (event) => {
    const pswdValue = event.target.value === "";
    if (pswdValue) {
      this.setState({
        showErrPswdMsg: true,
      });
    } else {
      this.setState({
        showErrPswdMsg: false,
      });
    }
  };

  alterEmail = (event) => {
    this.setState({
      emailInValue: event.target.value,
    });
  };

  changeStatusModal = () => {
    this.setState({
      showSuccessModal: false,
      nameInValue: "",
      pswdInValue: "",
      emailInValue: "",
    });
  };

  alterName = (event) => {
    this.setState({
      nameInValue: event.target.value,
    });
  };

  alterPassword = (event) => {
    this.setState({
      pswdInValue: event.target.value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { nameInValue, pswdInValue, emailInValue, showSuccessModal } =
      this.state;
    if (nameInValue !== "" && pswdInValue !== "" && emailInValue !== "") {
      this.setState({
        showSuccessModal: !showSuccessModal,
        showLoader: true,
      });
    }
    if (nameInValue === "") {
      this.setState({
        showErrNameMsg: true,
      });
    }
    if (pswdInValue === "") {
      this.setState({
        showErrPswdMsg: true,
      });
    }
    if (emailInValue === "") {
      this.setState({
        showErrEmailMsg: true,
      });
    }
  };

  renderFormView = () => {
    const { showErrEmailMsg, showErrNameMsg, showErrPswdMsg } = this.state;

    return (
      <form
        className="signup-form bg-light container"
        onSubmit={this.submitForm}
      >
        <label className="col-form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Name"
          onBlur={this.blurName}
          onChange={this.alterName}
        />
        {showErrNameMsg ? (
          <p className="text-danger">
            <sup>*</sup>Required
          </p>
        ) : (
          ""
        )}
        <label className="col-form-label">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          onBlur={this.blurEmail}
          onChange={this.alterEmail}
        />
        {showErrEmailMsg ? (
          <p className="text-danger">
            <sup>*</sup>Required
          </p>
        ) : (
          ""
        )}
        <label className="col-form-label">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Set Password"
          onBlur={this.blurPswd}
          onChange={this.alterPassword}
        />
        {showErrPswdMsg ? (
          <p className="text-danger">
            <sup>*</sup>Required
          </p>
        ) : (
          ""
        )}
        <button className="btn btn-outline-warning mt-3 ">SignUp</button>
      </form>
    );
  };

  renderSuccessViewMsg = () => {
    return (
      <div className="success-card bg-light">
        <i
          className=" me-3 bi bi-x-square icon-x"
          onClick={this.changeStatusModal}
        ></i>
        <p className="text-success msg-success">You're SignUp is Success</p>
      </div>
    );
  };

  renderBodyView = () => {};

  render() {
    const { showSuccessModal } = this.state;
    return (
      <div className="home-container fluid-container">
        <HeaderNav />
        <div className="mt-5">
          {showSuccessModal
            ? this.renderSuccessViewMsg()
            : this.renderFormView()}
        </div>
      </div>
    );
  }
}

export default SignUp;
