import axios from '../custom-axios/axios'
const  ELibraryService={
    fetchCategories: async ()=>{
        return await axios.get("/categories");
    },
    fetchBooks: async()=>{
        return await axios.get("/books");
    },
    fetchAuthors: async ()=>{
        return  await axios.get("/authors");
    },
    addBook: async (name,category,authorId,availableCopies)=>{
         await axios.post("/books/add",{
             name,category,authorId,availableCopies
         });
         


    },
    editBook: async (id,name,category,authorId,availableCopies)=>{
        await axios.post(`/books/edit/${id}`,{
            id,name,category,authorId,availableCopies
        });

    },
    deleteBook: async (id)=>{
        await axios.delete(`/books/delete/${id}`)
    },
    markBook: async (id)=>{
        await axios.post(`/books/mark/${id}`)
    }
}
export default ELibraryService;