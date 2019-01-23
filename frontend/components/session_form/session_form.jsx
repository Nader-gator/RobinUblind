import React from 'react'

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.formAction(user)
  }

  renderErrors() {
    
    const mappedErros = this.props.errors.map((el,idx) => {
      return (
        <li key={`error-${idx}`}>
            {el}
        </li>)
    })
    return (
      <ul>
        {mappedErros}
      </ul>
      )
    
  }


  render() {
    return (
      <div className="login-form-submit-container">

        {this.props.navLink}

        <form onSubmit={this.handleSubmit} className="loginform">


          <br/>Ready to lose some money? Please {this.props.formType}<br/>



      <div className="login-fields">

          <label>Email 
            <input className="login-button" type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>

            <br/><br/>

          <label>Password
            <input className="login-button" type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>

      </div>

          <div className="login-error">
            {this.renderErrors()}
          </div>

          <br/><br/>




          <input className="login-form-submit" type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }

}

export default SessionForm