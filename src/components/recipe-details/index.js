import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="">
      <Link href={"/recipe-list"}>
        <Button variant="destructive" className=" ml-5 mt-5">
          Check All Recipe List
        </Button>
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div className="leading-10 text-[20 px]">
            <div>
              <p>Name - {getRecipeDetails?.name}</p>
            </div>
            <div>
              <p>MealType - {getRecipeDetails?.mealType}</p>
            </div>
            <div>
              <p>Cuisine - {getRecipeDetails?.cuisine}</p>
            </div>
            <div>
              <p>CaloriesPerServing - {getRecipeDetails?.caloriesPerServing}</p>
            </div>
            <div>
              <p>Rating - {getRecipeDetails?.rating}</p>
            </div>
            <div className=" leading-6 font-normal text-[15px]">
              <h1 className=" text-2xl font-bold text-red-500 underline">
                Ingredients
              </h1>
              <ul className=" list-disc">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
