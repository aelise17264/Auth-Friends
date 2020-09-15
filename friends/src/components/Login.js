import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class Login extends React.Component{
    state ={
        credentials: {
            username: '',
            password: ''
        }
    }

handleChange = event => {
    this.setState({
        credentials:{
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }
    })
}

login = event => {
    event.preventDefault();
console.log(event)
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then( res => {
        console.log(res.data.payload)
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends')
    })
    .catch(error => {
        console.log('error in post')
    })
}
render(){
return(
    <div>
        <form onSubmit={this.login}>
          <input
          type='text'
          name='username'
          value={this.state.credentials.username}  
          onChange={this.handleChange}
          />
          <input
          type='password'
          name='password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
          />
        <button>Grab a Milkshake</button>
        </form>
    </div>
)

}
}

export default Login;
