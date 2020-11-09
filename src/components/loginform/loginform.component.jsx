import React from "react";
import FormInput from "../input/customInput.component";
import Button from "../button/Button";
import "./loginform.styles.css";
import axios from "axios";
import { withRouter,Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setCurrentUser } from "../../reduxx/user/user.actions";
import { setLoading } from "../../reduxx/appUtils/app.actions";

toast.configure();

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    const { Loading } = this.props;
    Loading(true);
    axios
      .post(`https://b2b-backendd.herokuapp.com/login`, this.state)
      .then((res) => {
        const { history, setCurrentUser } = this.props;

        if (res.data.success === 1) {
          Loading(false);
          setCurrentUser(this.state.email);
          this.setState({ email: "", password: "" });
          history.push({ pathname: "/" });
          toast("LOGIN SUCCESFUL", { type: "success" });
        } else {
          Loading(false);
          toast("LOGIN FAILED", { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast("LOGIN FAILED", { type: "error" });
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
      <div className="login-form">
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
        <div className="login-button">
          <Button onClick={this.handleSubmit}>LOGIN</Button>
          <p>
            New Customer?{" "}
            <Link className="link"to="/signup">
            <span className="signup-link">
              Sign up <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  Loading: (value) => dispatch(setLoading(value)),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
