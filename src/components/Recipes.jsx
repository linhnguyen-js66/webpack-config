import { useState } from 'react'
const eleventShieldRecipe = {
    leatherStrip: 2,
    ironIngot: 1
}
const elevenGauntletsRecipe = {
    ...eleventShieldRecipe,
    leather: 1,
    refindedMoonstone: 4
}
console.log(elevenGauntletsRecipe)
console.log(eleventShieldRecipe)

const Recipes = () => {
    const [recipe,setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={()=>setRecipe(eleventShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={()=>setRecipe(elevenGauntletsRecipe)}>Elven Gauntlet Recipe</button>
            <ul>
                {
                    Object.keys(recipe).map((material)=>(
                        <li key={material}>
                             {material}:{recipe[material]}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Recipes