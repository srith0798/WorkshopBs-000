import HeaderNav from "../navBar";
import { Component } from "react";
import "./index.css";

class LoginForm extends Component {
  state = {
    userInValue: "",
    pswdInValue: "",
    showErrUserMsg: true,
    showErrPswdMsg: true,
    showSuccessModal: false,
    showload:false,
  };

  renderLoaderView = () => (
    <div className="custom-loader">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  displayUserMsgName = (event) => {
    const userValue = event.target.value === "";
    if (userValue) {
      this.setState({
        showErrUserMsg: false,
      });
    } else {
      this.setState({
        showErrUserMsg: true,
      });
    }
  };

  displayPswdMsgName = (event) => {
    const pswdValue = event.target.value === "";
    if (pswdValue) {
      this.setState({
        showErrPswdMsg: false,
      });
    } else {
      this.setState({
        showErrPswdMsg: true,
      });
    }
  };

  successLog =(event) => {
    event.preventDefault();
    const { userInValue, pswdInValue } = this.state;
    if (userInValue !== "" && pswdInValue !== "") {
      this.setState({
        showSuccessModal: false,
        showload:true
      });
      setTimeout(()=> {
        this.setState({
          showSuccessModal: true,
          showload:false
        });
      }, 2000)
      
    }
    if (userInValue === "") {
      this.setState({
        showErrUserMsg: false,
      });
    }
    if (pswdInValue === "") {
      this.setState({
        showErrPswdMsg: false,
      });
    }
  };

  changeStatusModal = () => {
    this.setState({
      showSuccessModal: false,
      userInValue: "",
      pswdInValue: "",
    });
  };

  renderSuccessViewMsg = () => {
    return (
      <div className="success-card bg-light">
        <i
          className=" me-3 bi bi-x-square icon-x"
          onClick={this.changeStatusModal}
        ></i>
        <p className="text-success msg-success">You're Login is Success</p>
      </div>
    );
  };

  changeUserInValue = (event) => {
    this.setState({
      userInValue: event.target.value,
    });
  };

  changePswdInValue = (event) => {
    this.setState({
      pswdInValue: event.target.value,
    });
  };



  renderFormView = () => {
    const { showErrPswdMsg, showErrUserMsg, userInValue, pswdInValue } =
      this.state;
    return (
      <form className="form-card bg-light container" onSubmit={this.successLog}>
        <label className="col-form-label" htmlFor="username">
          UserName
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          placeholder="Enter Name"
          onBlur={this.displayUserMsgName}
          onChange={this.changeUserInValue}
          value={userInValue}
        />
        {!showErrUserMsg ? (
          <p className="text-danger">
            <sup>*</sup>Required
          </p>
        ) : (
          ""
        )}
        <label className="col-form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          id="password"
          type="password"
          placeholder="Enter Password"
          onBlur={this.displayPswdMsgName}
          onChange={this.changePswdInValue}
          value={pswdInValue}
        />
        {!showErrPswdMsg ? (
          <p className="text-danger">
            <sup>*</sup>Required
          </p>
        ) : (
          ""
        )}

        <button className="btn btn-outline-dark mt-3 dark-btn" type="submit">
          Login
        </button>
      </form>
    );
  };

  render() {
    const { showSuccessModal,showload } = this.state;

    return (
      <div className="home-container fluid-container">
        <HeaderNav />
        <div className=" mt-5 ">
          {!showSuccessModal && this.renderFormView()}
          {showload && this.renderLoaderView()}
          {showSuccessModal && this.renderSuccessViewMsg()}
        </div>
      </div>
    );
  }
}
export default LoginForm;
