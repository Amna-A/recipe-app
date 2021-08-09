import { useState } from "react"

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
        if(ingredients.length === 0){
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
    //add more input fields
    const addInput = () =>{
        // e.preventDefault()
        setIngredients([...ingredients,''])
         
    }
    // handle input change
    const handleInputChange = (e, index) => {
        const list = [...ingredients]
        list[index] = e.target.value
        setIngredients(list);
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Recipe Name</label>
                <span className="error"><p id="name_error"></p></span>
                {/* <div>{console.log(typeof(ingredients))}</div> */}
                <input type='text' id='name' placeholder='ex: cheese sandwich' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            {
                [ingredients].map((ing , index) =>{
                    return( 
                        <div className='form-control' key={index} >
                            <label>Ingredients</label>
                            <span className="error"><p id="ingredient_error"></p></span>
                            <input type='text' id='ingredient' placeholder='ex: bread' value={ing} onChange={e => handleInputChange(e,index)}/>
                        </div>
                    )
                })
            }
            {/* <button type='button' className='btn btn-add' onClick={() => addInput()}>add more ingredient</button>                             */}


            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(ingredients)}</div> */}
            <input type='submit' value='Save Recipe'  className='btn btn-block'/>
        
        </form>
    )
}



export default AddRecipe
