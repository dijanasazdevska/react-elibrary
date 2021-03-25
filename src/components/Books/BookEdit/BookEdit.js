import { useState } from "react";
import {useHistory } from 'react-router-dom'

 const BookEdit=({authors,categories,editBook,selectedBook})=>{
     var history=useHistory();
  const [book,setBook] = useState(
   {
       id:selectedBook.id,
       name: selectedBook.name,
       category : selectedBook.category,
       authorId: selectedBook.author.id,
       availableCopies: selectedBook.availableCopies
   });
   console.log(book);
    const editNewBook=(event)=>{
        event.preventDefault();
        editBook(book.id,book.name,book.category,book.authorId,book.availableCopies);
        history.push("/books");

    }
    const handleChange=(event)=>{

        setBook({
            ...book,
            [event.target.name]:event.target.value
        })        
    }
   
return (<div>
<form onSubmit={editNewBook}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name"className="form-control" type="text" value={book.name} required onChange={handleChange} />
    </div>
    <div className="form-group">
        <label htmlFor="category">Category</label>
        <select required onChange={handleChange}>
            {categories.map((c,index)=><option key={index} value={c}>{c}</option>)}
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="author">Author</label>
        <select id="author" name="author" required onChange={handleChange} >
{authors.map(a => <option key={a.id}  value={a.id}>{a.name+" "+a.surname}</option>)}
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="availableCopies">Available Copies</label>
        <input id="availableCopies" name="availableCopies"className="form-control" type="number" min="1" value={book.availableCopies} required onChange={handleChange}/>
    </div>
    <input  className="btn btn-success" type="submit" value={"Submit"}/>
</form>
</div>)
 }
 export default BookEdit;
 
