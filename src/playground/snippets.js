import { toast } from "react-toastify";
import axios from "axios";
import React, { Component } from "react";


const handleSubmit = (e) => {
  axios
    .post(`https://b2b-backendd.herokuapp.com/signup`, this.state)
    .then((res) => {
      const { history, setCurrentUser } = this.props;

      if (res.data.success === 1) {
        setCurrentUser(res.data.user);
        console.log(res.data.user);
        this.setState({ name: "", email: "", password: "" });

        history.push({ pathname: "/" });
        toast(res.data.message, { type: "success" });
      } else {
        toast(res.data.message, { type: "error" });
      }
    })
    .catch((err) => {
      console.log(err);
      toast("An Error occured", { type: "error" });
    });
};


//class component
class AppName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>content</div>);
  }
}
