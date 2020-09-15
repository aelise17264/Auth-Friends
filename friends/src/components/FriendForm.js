import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const FriendForm = ({postFriend}) => {
const [friend, setfriend] = useState({
    id: uuid(),
    name: '',
    age: '',
    email: ''
})
const handleChange = (event) => {
    setfriend({
        ...friend,
        [event.target.name]: event.target.value
    })
}
const onSubmit = (event) => {
    event.preventDefault();
    postFriend(friend)
    console.log(friend)
}

return(
    <div className='friendform'>
        <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input
        placeholder='name'
        name='name'
        value={friend.name}
        onChange={handleChange}
        />

        <label>Age:</label>
        <input
        placeholder='age'
        name='age'
        value={friend.age}
        onChange={handleChange}
        />
        
        <label>Email:</label>
        <input
        placeholder='email'
        name='email'
        value={friend.email}
        onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        </form>

    </div>
)


}
export default FriendForm