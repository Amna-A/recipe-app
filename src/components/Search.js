import React , { useState} from "react"
import Recipe from "./Recipe"
import ReactDOMServer from 'react-dom/server';
// import { SearchRounded } from "@material-ui/icons";

const Search = ({recipes,onDelete, showSearch}) => {

    const [ingredientName, setIngredient] = useState('')
    const [recipeName, setSearchRecipe] = useState('')

    const searchForRecipies = (e) => {
        e.preventDefault()
        //remove error msg when user type needed fields
        function removeWarning() {
            document.getElementById("search_error").innerHTML = "";
        }
        if(!recipeName){
            document.querySelector("#search_error").innerHTML = "Please enter a recipe name to find";
        }
        document.getElementById("search").onkeyup = removeWarning;

        //check if user is entering a recipe by name
        if(recipeName) { 
            if(recipes.find(isFound)){
                document.getElementById("found").innerHTML =  ReactDOMServer.renderToString(<Recipe recipe = {recipes.find(isFound)} onDelete={onDelete}/>)  
            }
            else{
                document.getElementById("found").innerHTML = "<span style='color: red'>Sorry, could not find a recipe with that name</span>" 
            }
        }
     
    }
    //search for recipe by recipe name
    function isFound(recipes) {
        return recipes.name.includes(recipeName);
    }
   
    //clear recipe name search field
    const clear = () =>{
        setSearchRecipe('')
        document.getElementById("found").innerHTML =  ReactDOMServer.renderToString("")
    }
    
    return (
        <div>
            {showSearch &&
            <div className='search-container'>
                <h3 style={{fontSize: '20px', paddingBottom:'10px'}}>Filter recipies by ingredients</h3>
                <hr />
                <form className='search-form'>
                    <input value={ingredientName} type="text" placeholder='ex: peanut butter' onChange={e => {setIngredient(e.target.value)}}/>
                </form>

                <h3 style={{fontSize: '20px', paddingBottom:'10px'}}>Search for a recipe by name</h3>
                <hr />
                <form className='search-form' onSubmit={searchForRecipies}>
                    <input value={recipeName} type="text" id='search' placeholder='ex: hot chocolate' onChange={e => {setSearchRecipe(e.target.value)}}/>
                    <button type='submit' ><strong>search</strong></button>
                    <button type='button' onClick={clear}><strong>clear</strong></button>
                </form>

                <span className="error"><p id="search_error"></p></span>
                <br></br>
            </div>
            }

            {/* to display search results */}
            <div id="found"></div>
            <br />
            {/* {console.log("inside search length: ", Object.values(recipes).length)} */}

            {
                recipeName === ""  &&
                Object.values(recipes).filter((value) => {

                    if( ingredientName === ""){
                        return <Recipe key={value.id} recipe = {value} onDelete={onDelete}/> 
                    }
                    else if(value.ingredients.map(val => val.toLowerCase()).toString().includes(ingredientName.toLowerCase())){
                        return [<Recipe recipe = {value} onDelete={onDelete}/> ,console.log(value)]
                    }
                    }).map((val , index)=>{
                        return  <Recipe key={index} recipe = {val} onDelete={onDelete} />
                    })
                    
                }

        </div>
    )
}

export default Search
