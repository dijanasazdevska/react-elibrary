import { useState } from "react";
import {useHistory } from 'react-router-dom'

 const BookAdd=({authors,categories,addBook})=>{
     var history=useHistory();
   const [formData,updateFormData]= useState({
       name:"",
       category:1,
       authorId:1,
       availableCopies:0

       

    });
    const addNewBook= async (event)=>{
        event.preventDefault();
       await addBook(formData.name,formData.category,formData.authorId,formData.availableCopies);
        history.push("/books");

    }
    const handleChange=(event)=>{

        updateFormData({
            ...formData,
            [event.target.name]:event.target.value
        })        
    }
   
return (<div>
<form onSubmit={addNewBook}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name"className="form-control" type="text" required onChange={handleChange} />
    </div>
    <div className="form-group">
        <label htmlFor="category">Category</label>
        <select required onChange={handleChange} >
            {categories.map((c,index)=><option key={index} value={c}>{c}</option>)}
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="author">Author</label>
        <select id="author" name="author" required onChange={handleChange} >
{authors.map(a => <option key={a.id} value={a.id}>{a.name+" "+a.surname}</option>)}
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="availableCopies">Available Copies</label>
        <input id="availableCopies" name="availableCopies"className="form-control" type="number" min="1" required onChange={handleChange}/>
    </div>
    <input  className="btn btn-success" type="submit" value={"Submit"}/>
</form>
</div>)
 }
 export default BookAdd;
 
