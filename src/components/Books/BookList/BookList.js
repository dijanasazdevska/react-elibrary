import BookItem from "../BookItem/BookItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import ReactPaginate from "react-paginate";
import {Component} from 'react';

class BookList extends Component{
    constructor(props){
        super(props)
        this.state = {
            page: 0,
            size: 5
        }


    }

render(){
    const offset = this.state.size * this.state.page;
    const nextPageOffset = offset + this.state.size;
    const pageCount = Math.ceil(this.props.books.length / this.state.size);
    const bookList = this.getBooksPage(offset, nextPageOffset);


    return (<div><div className={"container"}>
        <table className={"table table-stripped table-hover"}>
            <thead > 
            <tr>
                <th scope={"col"}>Name</th>
                <th scope={"col"}>Category</th>
                <th scope={"col"}>Author</th>
                <th scope={"col"}>Country</th>
                <th scope={"col"}>Continent</th>
             





            </tr>
            </thead>
            <tbody>
                {bookList}
            </tbody>
        </table>
        <div>
        <Link className={"btn btn-info "} to={"/books/add"}>Add New Book</Link>
        </div>

        </div>
        <div>
        <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 "}
                               activeClassName={"active"}/>

</div></div>
        )

}
getBooksPage = (offset, nextPageOffset) => {
    return this.props.books.map((term, index) => {
        return (
            <BookItem book={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onMark={this.props.onMark}/>
        );
    }).filter((book, index) => {
        return index >= offset && index < nextPageOffset;
    })
}
handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({
        page: selected
    })
}



}

export default BookList;