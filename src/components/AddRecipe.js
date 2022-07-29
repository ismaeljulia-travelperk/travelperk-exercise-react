import React, { useState } from 'react';
import { RecipesService } from '../services/RecipesService';
import { strToListIngredients } from '../utils/RecipeUtils';
import { SForm, SInput, SLabel } from '../styles/Form'

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');

    const postData = event => {
        event.preventDefault();
        var ingredients_list = strToListIngredients(ingredients)
        var data = {
            name,
            description,
            ingredients: ingredients_list
        };
        RecipesService.create(data).catch(function (err) {
            console.log(err);
        })
        window.location.href = '/';
    }

    return (
        <div>
            <SForm className="create-form">
                <div class="form-group">
                    <SLabel>Recipe name</SLabel>
                    <input placeholder='Add the recipe name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <SLabel>Description</SLabel>
                    <SInput placeholder='Add the recipe steps' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div class="form-group">
                    <SLabel>Ingredients</SLabel>
                    <SInput placeholder='Add the ingredients using commas' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div class="form-group"></div>
                <button onClick={postData} type="submit" class="btn btn-primary">Submit</button>
            </SForm>
        </div>
    )
};

export default AddRecipe;