import Recipe from "./Recipe"

const Recipes = ({recipes, onDelete}) => {
    
    return (
        <>
        {/* {console.log(recipes)} */}
          {recipes.map((recipe)=>(
          <Recipe key={recipe.id} recipe = {recipe} onDelete={onDelete}/> 
          ))}  
        </>
    )
}

export default Recipes
