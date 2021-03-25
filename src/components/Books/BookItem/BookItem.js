import {Link} from 'react-router-dom';
const BookItem=({book,onDelete,onMark,onEdit})=>{
    console.log(onDelete);
    return (<tr><td>{book.name}</td><td>{book.category}</td><td>{book.author.name+ " "+book.author.surname }</td>
    <td>{book.author.countryName}</td><td>{book.author.countryContinent}</td>
    <a  onClick={()=>onDelete(book.id)} className="btn btn-danger"> Delete</a>
    <Link  onClick={()=>onEdit(book)} className="btn btn-primary" to={`/books/edit/${book.id}`}>Edit</Link>
        <a  onClick={()=>onMark(book.id)} className="btn btn-success"> Mark as taken</a></tr>)
}
export default BookItem;