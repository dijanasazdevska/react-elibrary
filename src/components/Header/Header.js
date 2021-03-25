import {Link} from 'react-router-dom';
const Header=()=>{
    return (<div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/books">E-Library</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to={"/books"} >Books</Link>
        <Link className="nav-item nav-link active" to={"/categories"} >Categories</Link>
       
      </div>
    </div>
  </nav></div>)

}
export default Header;