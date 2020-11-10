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
import { setLoading } from "../../reduxx/appUtils/app.actions";
toast.configure();

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    const {Loading}=this.props
    Loading(true);
    axios
      .post(`https://b2b-backendd.herokuapp.com/signup`, this.state)
      .then((res) => {
        const { history, setCurrentUser } = this.props;

        if (res.data.success === 1) {
          Loading(false);
          setCurrentUser(res.data.user);
          this.setState({ name:"",email: "", password: "" });

          history.push({ pathname: "/" });
          toast("SIGNUP SUCCESSFUL", { type: "success" });
        } else {
          Loading(false);
          toast("SIGNUP FAILED", { type: "error" });
        }
      })
      .catch((err) => {
        Loading(false);
        console.log(err);
        toast("SIGNUP FAILED", { type: "error" });
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
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
        <FormInput
          name="email"
          type="email"
          onChange={this.handleChange}
          value={this.state.email}
          label="email"
          required
        ></FormInput>
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
          <Button onClick={this.handleSubmit}>SIGN UP</Button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  Loading: (value) => dispatch(setLoading(value))
});

export default connect(null, mapDispatchToProps)(withRouter(SignupForm));
