import React,{ useState, useEffect }  from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import AddRecipe from "./components/AddRecipe";
 


const App = () => {

  //toggle add and search buttons
  // add button is not visibile as it is not required in the assessment.
  const [showAdd, setShowAdd] = useState(false)
  //search button
  const [showSearch, setShowSearch] = useState(false)
  

  // our state for recipes should be on the top level (App) bcuz we may want to use it within other components
  const [recipes, setRecipes] = useState([])

  //get recipes from server
  useEffect(() =>{
    const getRecipes = async () =>{
      const recipesFromServer = await fetchRecipes()
      //console.log("data from server: ",recipesFromServer)
      setRecipes(recipesFromServer)
    }
    getRecipes()
  }, [])


  //fetch recipes
  const fetchRecipes = async () =>{
    try {
      const res = await fetch('/api/recipe')
      const data = await res.json()
      //console.log("data:", data)
      return data
      
    } catch (error) {
      console.log(error)
    }
  }
 
 

  //Add Recipe
  const addRecipe = async (recipe)=>{
    //console.log(recipe)
    const res = await fetch(
      '/api/recipe', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
        body: JSON.stringify(recipe)
      })

      const data = await res.json()
      setRecipes([...recipes,data])
  }
  

  //Delete a Recipe
  const deleteRecipe = async (id) =>{
    //console.log(`recipe ${id} deleted`)
    await fetch(`/api/recipe/${id}`, {method: 'DELETE',})
    setRecipes(recipes.filter((recipe) => recipe.id !== id))

  }
  //
  
  return (
    <div className='container'>
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} onSearch ={() => setShowSearch(!showSearch)} showSearch={showSearch}/>
      {showAdd && <AddRecipe onAdd = {addRecipe}/>}
      {<Search  recipes={recipes} onDelete={deleteRecipe} showSearch={showSearch}/>}
      
      {recipes.length === 0 && "No Recipes To Show"}
      <footer>
         <p>copyright &copy; 2021 <a href="https://amna-a.github.io/">AMINA ELTAHIR </a></p> 
      </footer>
     </div>
    
  );
}
export default App;