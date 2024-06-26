import { useState } from 'react';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



function App() {

  const [openAddFriendForm , setOpenAddFriendForm] = useState(false)
  const [friends , setFriends] = useState(initialFriends)

  const handleFormOpen = () => {
    setOpenAddFriendForm(prev => !prev)
  }



  return (
    <div className="app">

      <div className='sidebar'>
      
        <FriendList friends={friends} />
        {openAddFriendForm && <AddFriendForm setFriends={setFriends} />}

        {/* send a fun as a props then set it as an event fun in the children component */}
        <Button handleFormOpen={handleFormOpen}>{openAddFriendForm ? "Close" : "Add Friend"}</Button>
      
      </div>

      <SplitBillForm/>

    </div>
  );
}


export default App;
