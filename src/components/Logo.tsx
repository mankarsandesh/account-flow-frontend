import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link to="/" className="-m-1.5 p-1.5 flex   items-center">
        <span className="sr-only">Account Flow</span>
        <CurrencyRupeeIcon
          aria-hidden="true"
          className="size-8  text-green-500"
        />
        <h1 className="pl-1 font-bold text-2xl  text-green-500">Account Flow</h1>
      </Link>
    </div>
  );
}
