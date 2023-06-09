import mongoose from '../db/connection.js'

const cocktailSchema = new mongoose.Schema({
    strDrink: String,
    idDrink: Number,
    strAlcoholic: String,
    strGlass: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strIngredient11: String,
    strIngredient12: String,
    strIngredient13: String,
    strIngredient14: String,
    strIngredient15: String,
    strInstructions: String,
    strMeausure1: String,
    strMeausure2: String,
    strMeausure3: String,
    strMeausure4: String,
    strMeausure5: String,
    strMeausure6: String,
    strMeausure7: String,
    strMeausure8: String,
    strMeausure9: String,
    strMeausure10: String,
    strMeausure11: String,
    strMeausure12: String,
    strMeausure13: String,
    strMeausure14: String,
    strMeausure15: String
});

export default mongoose.model("Cocktail", cocktailSchema)