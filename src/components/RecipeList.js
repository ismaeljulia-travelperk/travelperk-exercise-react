import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RecipesService } from '../services/RecipesService';

function RecipeList() {
    var path = ''
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        RecipesService.get().then(x => setRecipes(x));
    }, []);

    console.log(recipes)

    function deleteRecipe(id) {
        setRecipes(recipes.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        RecipesService.remove(id).then(() => {
            setRecipes(recipes => recipes.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Recipes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Description</th>
                        <th style={{ width: '30%' }}>Ingredients</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>

                    {recipes && recipes.map(recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>{recipe.ingredients.map(({ name }) => `${name}`).join(', ')}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/update/${recipe.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteRecipe(recipe.id)} className="btn btn-sm btn-danger btn-delete-user">
                                    {recipe.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {recipes && !recipes.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No recipes to display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RecipeList;