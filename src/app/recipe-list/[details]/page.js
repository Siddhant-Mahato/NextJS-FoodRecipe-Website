import RecipeDetailsItem from "@/components/recipe-details";


    async function fetchRecipeDetails(currentRecipeId) {
        
        try
        {
            const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
            const data = await response.json();

            return data;
        }
        catch (error)
        {
            throw new Error(error.message);
        }
    }



export default async function RecipeDetails({ params }) {
    
    const getRecipeDetails = await fetchRecipeDetails(params?.details);


    return (
        <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
    )
}