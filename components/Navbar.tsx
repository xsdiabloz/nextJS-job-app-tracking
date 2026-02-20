import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container flex mx-auto px-4 h-16 items-center justify-between">
        <Link
          href="/"
          className="flex font-semibold gap-2 text-xl items-center "
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="cursor-pointer">
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="cursor-pointer">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
