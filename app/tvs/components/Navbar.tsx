import Link from "next/link";
import Image from "next/image";
// import CustomButton from "./CustomButton";
import CustomButton from "./CustomButton";
import { CustomButtonProps } from "@/app/types";

const NavBar = () => (
  <header className="w-full py-4">
    <nav className="max-w-[1664px] mx-auto flex justify-between items-center sm:px-6 px-1 py-1 bg-transparent ">
      <Link href="/tvs" passHref legacyBehavior>
        <a className="flex justify-center items-center">
          <Image
            src="/tvs.png"
            alt="logo"
            width={218}
            height={18}
            className="object-contain"
          />
        </a>
      </Link>
      {/* New Link */}
      <div className="hidden lg:flex lg:flex-row lg:space-x-7">
        <Link href="/tvs/bikes" passHref legacyBehavior>
          <a className="text-gray-300 hover:text-gray-600">Our Bikes</a>
        </Link>
        {/* New Link */}
        <Link href="/tvs/parts" passHref legacyBehavior>
          <a className="text-gray-300 hover:text-gray-600">Genuine Parts</a>
        </Link>
        {/* New Link */}
        <Link href="/" passHref legacyBehavior>
          <a className="text-gray-300 hover:text-gray-600">Narayani</a>
        </Link>
      </div>
      <div className="flex items-center">
        {/* Modified Button with Smaller Size on Mobile */}
        <CustomButton
          title="Schedule a Call"
          btnType="button"
          containerStyles="text-white rounded-full bg-red-500  min-w-[130px] font-bold lg:ml-4 sm:text-sm md:text-base" // Adjust size based on screen sizes
        />
      </div>
    </nav>
  </header>
);

export default NavBar;
