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
      password: "",
    };
  }

  handleSubmit = (e) => {
   
    axios
      .post(`https://b2b-backendd.herokuapp.com/signup`, this.state)
      .then((res) => {
        const { history, setCurrentUser } = this.props;

        if (res.data.success === 1) {
         
          setCurrentUser(res.data.user);
          this.setState({ name:"",email: "", password: "" });

          history.push({ pathname: "/" });
          toast("SIGNUP SUCCESSFUL", { type: "success" });
        } else {
         
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
     
        console.log(err);
        toast("An Error occured", { type: "error" });
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
  
});

export default connect(null, mapDispatchToProps)(withRouter(SignupForm));
