import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }

  handleLogin = () => {
    // redirect to tasks page
    window.location.assign("/tasks");
  }

  render() {
    return (
      <div className="Login">
        <div className="Login__form">
          <div className="inputs">
            <p>Login</p>
            <div className="form">
              <label className="label-inputs">
                Phone:
                <input type="text" name="phone" className="input" />
              </label>
              <label className="label-inputs">
                Password:
                <input type="password" name="password" className="input" />
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
