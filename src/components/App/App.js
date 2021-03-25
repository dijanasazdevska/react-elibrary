import './App.css';
 // eslint-disable-next-line
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import CategoriesList from "../Categories/CategoriesList/CategoriesList";
import {Component} from "react";
import ELibraryService from "../../repository/elibraryRepository";
import BookList from "../Books/BookList/BookList";
import BookAdd from '../Books/BookAdd/BookAdd';
import BookEdit from '../Books/BookEdit/BookEdit';
import Header from '../Header/Header';

class App extends Component{
    onEdit=(book)=>{
        this.setState({
           selectedBook: book
        })
    } 
    
    constructor(props) {
        super(props);
        this.state={
        categories:[],
            books:[],
            authors:[],
            selectedBook:{}
        }
    }
    

    render() {
      console.log(this.onSelect);
        
        return (
            <Router>
                <Header/>
                <div className={"container"}>
                    <Route path={"/categories"} exact render={()=><CategoriesList categories={this.state.categories}/>}/>
                    <Redirect to={"/books"}/>
                    <Route path={"/books"} exact render={()=><BookList books={this.state.books} onEdit={this.onEdit} onDelete={this.onDelete} onMark={this.onMark}/>}/>
                    <Route path={"/"} exact render={()=><BookList books={this.state.books}  onEdit={this.onEdit} onDelete={this.onDelete} onMark={this.onMark} />}/>
                    <Route path={"/books/add"} exact render={()=><BookAdd addBook={this.addBook} categories={this.state.categories} authors={this.state.authors}/>}/>
                                   <Route path={"/books/edit/:id"} exact render={()=><BookEdit categories={this.state.categories} authors={this.state.authors} selectedBook={this.state.selectedBook} editBook={this.editBook}  />}/>
                                    </div>

            </Router>
        );
    }
    
     componentDidMount() {
      
         this.loadCategories();
         this.loadBooks();
         this.loadAuthors();

    }
    editBook=(id,name,category,authorId,availableCopies)=>{
        ELibraryService.editBook(id,name,category,authorId,availableCopies).then(()=>{
            this.loadBooks();
        })
    }
    addBook=(name,category,authorId,availableCopies)=>{
        ELibraryService.addBook(name,category,authorId,availableCopies).then(()=>{
            this.loadBooks();
        })

    }



   

     loadCategories=()=>{
        return  ELibraryService.fetchCategories().then(data=>this.setState({
            categories:data.data
        })); }


 

  

 
  loadAuthors=  ()=>{
      return ELibraryService.fetchAuthors().then(a=>
        {
            var data=a.data;
            this.setState({
                authors: data.map(a =>{
                return{
                    id: a.id,
                    name: a.name,
                    surname: a.surname

                }})});
            })}
 

    loadBooks=()=>{
 ELibraryService.fetchBooks().then(data => {
    var booksList=data.data;
    this.setState({
        books: booksList.map(book => {
           let a=[]
            a['id']=book.author.id;
            a['name']=book.author.name;
            a['surname']=book.author.surname;
            a['countryName']=book.author.country.name;
            a['countryContinent']=book.author.country.continent;
                return {id: book.id,name: book.name,category: book.category,author:a,availableCopies: book.availableCopies}})});
})};


onDelete=(id)=>{
    return ELibraryService.deleteBook(id).then(()=>{
        this.loadBooks();

    });

}

onMark= (id)=>{
     ELibraryService.markBook(id).then(()=> this.loadBooks());
}




}
export default App;
