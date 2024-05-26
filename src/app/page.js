import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" ml-10 mt-5">
      <h1 className=" pb-5 text-2xl">Welcome to Recipe app</h1>
      <Link href={"/recipe-list"}>
        <Button variant="destructive">Explore Recipe</Button>
      </Link>
    </div>
  );
}
