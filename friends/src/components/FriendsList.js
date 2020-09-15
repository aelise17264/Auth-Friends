import React from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {

    state = {
        friendsList: []
    }

componentDidMount(){
    this.getData()
}
getData = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then (res => {
        console.log(res.data)
    this.setState({
        
        friendsList: res.data
        
    })
    })
    .catch(error => {
        console.log('error in getData')
    })
}

render(){
    console.log(this.state.friendsList)
    return(
        <div className='friendslist'>
            {this.state.friendsList.map((friend) => (
                <div className='friendcard'>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>


    )
}

}

export default FriendsList