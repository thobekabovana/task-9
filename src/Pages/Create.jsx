import React, { useState } from 'react';

export default function Create() {
  const [recipeName, setRecipeName] = useState('');
  const [recipePicture, setRecipePicture] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState({ dessert: '', breakfast: '', lunch: '', dinner: '' });
  const [preparationTime, setPreparationTime] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [savings, setSavings] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      recipeName,
      recipePicture,
      ingredients,
      instructions,
      category,
      preparationTime,
      cookingTime,
      savings
    });
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  return (
    <>
      <div>
        <h1>Add Your Favourite Recipe</h1>

        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Recipe Picture"
          value={recipePicture}
          onChange={(e) => setRecipePicture(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <input
          type="text"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <select value={category.dessert} name="dessert" onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="dessert">Dessert</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <input
          type="text"
          placeholder="Preparation Time"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cooking Time"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Savings"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}