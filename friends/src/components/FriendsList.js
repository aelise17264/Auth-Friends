import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
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
        console.log(res)
    this.setState({
        friendsList: res.data
    })
    })
    .catch(error => {
        console.log('error in getData')
    })
}
}