import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import AccountDetails from "../../components/accountDetails/accountDetails.component";
import { setLoading } from "../../reduxx/appUtils/app.actions";
import { isLoading } from "../../reduxx/appUtils/app.selectors";
import { setCurrentUser } from "../../reduxx/user/user.actions";
import { selectCurrentUser } from "../../reduxx/user/user.selectors";
import "./accountDetailsPage.styles.css";
import axios from "axios";
class AccountDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders:[]
    };
    
    
  }

  componentDidMount(){

    axios.get(`https://b2b-backendd.herokuapp.com/users/${this.props.currentUser._id}`).then(res=>{
      this.setState({orders:res.data.orders},()=>{
        console.log(this.state)
      })
    })

    
  }

  logOut = ()=>{
    this.props.setCurrentUser(null);
    this.props.history.push({pathname:"/"})

  }

  render() {
    return (
      <div className="details-container">
        <h3 className="heading1">Account Details</h3>
        <h5 className="logout" onClick={this.logOut}>LOGOUT</h5>
        <div className="name-email">
          <AccountDetails currentUser={this.props.currentUser} orders={this.state.orders} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  Loading: isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  Loading: (value) => dispatch(setLoading(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountDetailsPage));
