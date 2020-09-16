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
    // event.preventDefault();
    postFriend(friend)
    console.log(friend)
}



return(
    <div className='friendform'>
        <h3>Add A Friend</h3>
        <form onSubmit={onSubmit}>
        <label>Name:
        <input
        placeholder='name'
        name='name'
        value={friend.name}
        onChange={handleChange}
        />
</label>
        <label>Age:
        <input
        placeholder='age'
        name='age'
        value={friend.age}
        onChange={handleChange}
        />
        </label>
        <label>Email:
        <input
        placeholder='email'
        name='email'
        value={friend.email}
        onChange={handleChange}
        />
        </label>
        <button type='submit'>Submit</button>
        </form>

    </div>
)


}
export default FriendForm