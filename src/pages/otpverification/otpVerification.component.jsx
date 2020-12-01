import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "./otpVerification.styles.css";
import FormInput from "../../components/input/customInput.component";
import Button from "../../components/button/Button";
import { toast } from "react-toastify";

import axios from "axios";
import { setCurrentUser } from "../../reduxx/user/user.actions";
import { connect } from "react-redux";

toast.configure();

class OtpVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };
  }

  validateCode = async () => {
    let verified = null;
    await axios
      .get(
        `https://b2b-backendd.herokuapp.com/verify?mobile=91${this.props.history.location.state.mobile}&code=${this.state.code}`
      )
      .then(
        (res) => {
          console.log(res.data.status);
          if (res.data.status === "approved") {
            console.log("aproved");
            verified = true;
          } else {
            verified = false;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    if (verified) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const isvalid = await this.validateCode();
    let { name, email, mobile, password } = this.props.history.location.state;
    let user = { name, email, mobile, password };

    if (isvalid) {
      axios
        .post(`https://b2b-backendd.herokuapp.com/signup`, user)
        .then((res) => {
          const { history, setCurrentUser } = this.props;
          if (res.data.success === 1) {
            setCurrentUser(res.data.user);
            console.log(res.data.user);
            this.setState({ name: "", email: "", password: "" });
            toast(res.data.message, { type: "success" });
            history.push({ pathname: "/" });
          } else {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err);
          toast("An Error occured", { type: "error" });
        });
      console.log("signup success");
    } else {
      toast("Invalid OTP", { type: "error" });
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    if (true) {
      return (
        <form>
          <div className="otp-page">
            <h1>Enter OTP</h1>

            <div className="otp-form">
              <h5>
                {" "}
                <i className="fa fa-check" /> We've sent an OTP to your phone
                number +91 {this.props.history.location.state.mobile}.
              </h5>
              <p>ENTER CODE</p>
              <FormInput
                name="code"
                type="otp"
                onChange={this.handleChange}
                value={this.state.code}
                label="code"
                required
              ></FormInput>
              <div className="otp-button">
                <Button type="button" onClick={this.handleSubmit}>
                  VERIFY
                </Button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return <Redirect to="/signup" />;
    }
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(withRouter(OtpVerification));
