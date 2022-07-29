export function strToListIngredients(ingredients) {
    var ingredients_list = []
    var splitted_ingredients = ingredients.split(', ')
    for (var i in splitted_ingredients) {
        ingredients_list.push({'name': splitted_ingredients[i]})
    }
    return ingredients_list
}