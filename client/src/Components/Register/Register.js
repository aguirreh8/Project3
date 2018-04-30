import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = () => {
    api.Database.newUser(this.state.username, this.state.password)
    .then(data => {
      api.Database.logIn(data.data.username, data.data.password)
      .then(data => {
        console.log(data);
        localStorage.setItem("username", JSON.stringify(data.data.username));
        localStorage.setItem("user_id", JSON.stringify(data.data.user_id));
      })
    })
  };

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
          style={{
            marginLeft: '175px',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '25px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
          }}
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
          style={{
            marginLeft: '175px',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '25px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
        }}
        />
        <br />
        <RaisedButton 
          label="Create Account" 
          onClick={e => this.onSubmit(e)} 
          style={{
            marginLeft: '223px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
          }}
          backgroundColor={'#bbb'}
        />
      </form>
    );
  }
}