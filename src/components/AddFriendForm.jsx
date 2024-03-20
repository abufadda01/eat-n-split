import React, { useState } from 'react'
import Button from './Button'


const AddFriendForm = ({setFriends}) => {

    const [formData , setFormData] = useState({
        name : "" ,
        image : "https://i.pravatar.cc/48"
    })


    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }


    const handleSubmlt = (e) => {
        
        e.preventDefault()

        const id = crypto.randomUUID() 
        
        const newFriend = {
            id , 
            name : formData.name ,
            image : `${formData.image}?=${id}` ,
            balance : 0 
        }

        if(!formData.name || !formData.image) return

        setFriends(prev => [...prev , newFriend])

        setFormData({name : "" , image : "https://i.pravatar.cc/48"})

    }


  return (
    <form onSubmit={handleSubmlt} className='form-add-friend'>

        <label>🧑‍🤝‍🧑Friend Name</label>
        <input onChange={handleChange} name='name' value={formData.name}  type="text" />

        <label>🖼️Image Url</label>
        <input onChange={handleChange} name='image' value={formData.image} type="text" />
        
        <Button>Add</Button>

    </form>
  )
}

export default AddFriendForm