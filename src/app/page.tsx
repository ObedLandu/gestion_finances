import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col py-10 w-full">
        <div>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Prenez le controle <br /> de vos finances
            </h1>
            <p className="py-6 text-gray-800 text-center">
              Suivez vos budgets et vos dépenses <br /> en toute simplicité avec
              notre application intuitive{" "}
            </p>
            <div className="flex justify-center mt-4 items-center">
              <Link href={""}>
                <Button variant={"default"} size={"lg"} > Se connecter</Button>
              </Link>
              <Link href={""}>
                <Button variant={"outline"} size={"lg"} className="ml-2" > S&apos;inscrire</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
