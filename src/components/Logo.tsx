import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
interface LogoProps {
  reverse?: boolean;
}

export function Logo({ reverse = true }: LogoProps) {
  return (
    <div className="flex lg:flex-1">
      <Link to="/" className="-m-1.5 p-1.5 flex   items-center">
        <span className="sr-only">Account Flow</span>
        <CurrencyRupeeIcon
          aria-hidden="true"
          className={`size-8 ${reverse ? " text-green-500" : " text-white"} `}
        />
        <h1
          className={`pl-1 font-bold text-2xl ${
            reverse ? " text-green-500" : " text-white"
          } `}
        >
          Account Flow
        </h1>
      </Link>
    </div>
  );
}
