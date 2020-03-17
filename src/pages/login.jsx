import React from 'react';
// import Api from '../api';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }
  // handle change of input to set state
  handleChange = ({ name, value }) => {
    this.setState({
      [name]: value
    })
  }

  handleLogin = () => {
    const { phone, password } = this.state;
    /**
     * do some validation before submission
     */
    if (!phone || !password) {
      alert('Please provide Phone and password');
    } else if (password.length < 6) {
      alert("Password is short")
    } else if (phone.length < 10 || phone.length > 13) {
      alert("Invalid phone number")
    }

    axios.post("http://localhost:8000/personnel/login", {
      phone: phone,
      password: password
    }).then(res => {
      const { accessToken } = res.data;
      localStorage.setItem("token", accessToken);
      window.location.assign("/tasks");
    }).catch(err => {
      // alert error
      // need to check here
      alert(err);
    })
  }

  render() {
    const { phone, password } = this.state;

    return (
      <div className="Login">
        <div className="Login__form">
          <div className="inputs">
            <p>Login</p>
            <div className="form">
              <label
                className="label-inputs"
              >
                Phone:
                <input
                  type="text"
                  value={phone}
                  className="input"
                  name="phone"
                  onChange={e => this.handleChange(e.target)}
                />
              </label>
              <label
                className="label-inputs"
              >
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="input"
                  onChange={e => this.handleChange(e.target)}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="submit"
                onClick={() => this.handleLogin()}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
