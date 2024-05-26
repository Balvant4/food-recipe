import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href="/recipe-list">
        <Button variant="destructive" className="ml-5 mt-5">
          Check All Recipe List
        </Button>
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <Image
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="leading-10 text-[20px]">
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
            <div className="leading-6 font-normal text-[15px]">
              <h1 className="text-2xl font-bold text-red-500 underline">
                Ingredients
              </h1>
              <ul className="list-disc">
                {getRecipeDetails?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
