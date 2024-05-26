import RecipeDetailsItem from "@/components/recipe-details";

// Fetch function to get recipe details
async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

// Main component to fetch and render recipe details
export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
