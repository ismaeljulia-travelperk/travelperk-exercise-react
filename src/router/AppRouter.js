import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddRecipe from '../components/AddRecipe';
import RecipeList from '../components/RecipeList';
import EditRecipe from '../components/EditRecipe';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route element={<RecipeList />} path="/" />
                        <Route element={<AddRecipe />} path="/add" />
                        <Route element={<EditRecipe />} path="/update/:id" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;