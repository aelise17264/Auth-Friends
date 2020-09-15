import React from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from './FriendForm'

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

postFriend = (newFriend) => {
    axiosWithAuth()
    .post('/api/friends', newFriend)
    .then(res => {
        console.log(res.data)
        this.setState({
            ...this.state.friendsList,
            newFriend: res.data
        })
    })
    .catch(error => {
        console.log('error in post')
    })
}

render(){
   
    return(
        <>
        <div className='friendslist'>
            <h2>So No One Told You Life Was Gonna Be This Way</h2>
            {this.state.friendsList.map((friend) => (
                <div key ={friend.id}
                className='friendcard'>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    <FriendForm postFriend={this.postFriend}/>
</>
    )
}

}

export default FriendsList