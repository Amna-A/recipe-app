
import { useState } from "react"
// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import RemoveIcon from "@material-ui/icons/Remove"
// import AddIcon from "@material-ui/icons/Add"


const AddRecipe = ({onAdd}) => {

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState([])
    
    //remove error msg when user type needed fields
    function removeWarning() {
        document.getElementById(this.id + "_error").innerHTML = "";
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!name){
            document.querySelector("#name_error").innerHTML = "Please enter a recipe name";
       
        } 
        if(!ingredients){
            document.querySelector("#ingredient_error").innerHTML = "Please enter ingredients";
        }
        //delete warning message when user starts entering fields again
        document.getElementById("name").onkeyup = removeWarning;
        document.getElementById("ingredient").onkeyup = removeWarning;

        if(name && ingredients){
            onAdd({name, ingredients})
            setName('')
            setIngredients('')
        }  
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Recipe Name</label>
                <span className="error"><p id="name_error"></p></span>
                <input type='text' id='name' placeholder='ex: cheese sandwich' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

           

            <div className='input-group'>
                <label>Ingredients</label>
                <span className="error"><p id="ingredient_error"></p></span>
                <input className='input-ingredient'  type='text' id='ingredient' placeholder='ex: bread' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                <button className='btn btn-add'>add more ingredient</button>
                {/* <div className='add-remove'>
                    <IconButton > <RemoveIcon/> </IconButton>
                    <IconButton> <AddIcon/> </IconButton>
                </div> */}
            </div>
          

            <input type='submit' value='Save Recipe' className='btn btn-block'/>
        </form>
    )
}



export default AddRecipe
