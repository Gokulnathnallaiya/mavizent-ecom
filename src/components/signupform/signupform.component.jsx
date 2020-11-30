import React from "react";
import FormInput from "../input/customInput.component";
import Button from "../button/Button";
import "./signupform.styles.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setCurrentUser } from "../../reduxx/user/user.actions";

toast.configure();

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      mobileerror: null,
      emailerror: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  validate = () => {
    const { email, mobile } = this.state;

    let mobileerror = "";
    let emailerror = "";
    var invalidcharecters = /^[a-zA-Z]+$/;
    if (mobile.length < 10 || isNaN(mobile)) {
      mobileerror = "invalid Mobile number";
    }
    if (!email.includes("@")) {
      emailerror = "invalid Email";
    }

    if (mobileerror || emailerror) {
      this.setState({ mobileerror, emailerror });
      return false;
    }

    this.setState({ mobileerror, emailerror });
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const { mobile } = this.state;
    const { history } = this.props;
    const isvalid = this.validate();
    if (!isvalid) {
      return;
    }
    axios
      .get(
        `https://b2b-backendd.herokuapp.com/mobileauth?mobile=91${mobile}&channel=sms`
      )
      .then(
        (response) => {
          console.log(response);
          history.push({ pathname: "/verify", state: this.state });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    const { mobileerror, emailerror } = this.state;
    return (
      <form>
        <div className="signup-form">
          <p>Name</p>
          <FormInput
            name="name"
            type="name"
            onChange={this.handleChange}
            value={this.state.name}
            label="name"
            required
          ></FormInput>
          <p>EMAIL</p>
          <div className="error">{emailerror}</div>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          ></FormInput>
          <p>MOBILE NUMBER</p>
          <FormInput
            name="mobile"
            type="tel"
            onChange={this.handleChange}
            value={this.state.mobile}
            label="mobile"
            required
          ></FormInput>
          <div className="error">{mobileerror}</div>
          <p>PASSWORD</p>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          ></FormInput>
          <div className="signup-button">
            <Button type="button" onClick={this.handleSubmit}>
              SIGN UP
            </Button>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(SignupForm));
