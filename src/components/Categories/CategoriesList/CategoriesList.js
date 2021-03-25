import CategoryItem from "../CategoryItem/CategoryItem";

const CategoriesList=({categories})=>{

    return (<div>
        <table className={"table table-stripped table-hover m-2"}> 
            <thead className={"thead-dark"}>
                <tr>
                    <th scope={"col"}>Name</th>
                </tr>
            </thead>
            <tbody>
            {categories.map((c,index) => <CategoryItem key={index} category={c}/>)}                    
            </tbody>
</table>
    </div>);

}
export default CategoriesList;