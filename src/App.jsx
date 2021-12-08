import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Login from ''
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedInUser: null,
      issues: [],
      comments: []
    }
  }

  componentDidMount() {
        
    const jwt = localStorage.getItem('token');
    try {
        const user = jwtDecode(jwt);
        this.setState({loggedInUser: user });

    } catch (error) {
        console.log(error);
    }

}

registerNewUser = async (user) => {
  console.log("User object from Register: ", user)
  try{
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
      console.log(response)
      this.loggedInUser = ({'userName': user.userName, 'password': user.password})
      // window.location = ('/Login')

  }
  catch(error) {
      console.log(error, 'Invalid input');
  }
}



loginUser = async (login) => {
  console.log("User object from login:", login)
  try {
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);
      this.setState({
          user: response.data.token
      });
      this.setState({
          jwt: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      
      // window.location = ('/Home')

  } catch (error) {
      alert('Invalid username or password')
  }

}

  render(){
    <div>

    </div>
  }







}


export default App;
