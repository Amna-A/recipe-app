import React from 'react';
import {FaTimes} from 'react-icons/fa'


const Recipe = ({recipe ,onDelete}) => {
  
    
    //let ing  = Array.from(recipe.ingredients)

    return (
        <div className='recipe' >
            {/* {console.log("inside recipe: ", recipe.ingredients)} */}
         
            <h3>{recipe.name} <FaTimes style={{color:'red', cursor:"pointer"}} onClick={() => onDelete(recipe.id)}/> </h3>
           {
                Array.from(recipe.ingredients)[0].length > 1 ? <ul> {Array.from(recipe.ingredients).map( (el, index) =>React.createElement('li', {key:index}, el)) } </ul> 
                :                   <ul> {[recipe.ingredients].map( (el, index) =>React.createElement('li', {key:index}, el)) } </ul>
           }
        </div>
    )
}

export default Recipe
