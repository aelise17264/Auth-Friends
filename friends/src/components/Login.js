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

    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then( res => {
        console.log(res)
        // localStorage.setItem('token')
    })
}

}

export default Login;
