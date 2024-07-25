import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipe() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();

        return data?.recipes;
    }
    catch (error)
    {
        throw new Error(error.message);
    }
}

async function Recipes() {
    const recipeList = await fetchListOfRecipe();

    return (
        <RecipeList recipeList={recipeList} />
    );
}

export default Recipes;
