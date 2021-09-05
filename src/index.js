import './style/index.scss'
const eleventShieldRecipe = {
    leatherStrip:2,
    ironIngot:1
}
const elevenGauntletsRecipe = { 
    ...eleventShieldRecipe,
    leather: 1,
    refindedMoonstone:4
}
console.log(elevenGauntletsRecipe)
console.log(eleventShieldRecipe)