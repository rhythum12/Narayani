import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton"

const NavBar = () => (
  <header className="w-full">
    <nav className="max-w-[1664px] mx-auto flex justify-between items-center sm:px-6 px-1 py-1 bg-transparent">
      <Link href="/suzuki" passHref legacyBehavior>
        <a className="flex justify-center items-center">
          <Image
            src="/image1.png"
            alt="logo"
            width={218}
            height={18}
            className="object-contain"
          />
        </a>
      </Link>
      {/* New Link */}
      <div className="hidden lg:flex lg:flex-row lg:space-x-4">
        <Link href="/suzuki/cars" passHref legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900">Our Cars</a>
        </Link>
        {/* New Link */}
        <Link href="/suzuki/parts" passHref legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900">Genuine Parts</a>
        </Link>
        {/* New Link */}
        <Link href="/" passHref legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900">Narayani</a>
        </Link>
      </div>
      <div className="flex items-center">
        {/* Modified Button with Smaller Size on Mobile */}
        <CustomButton
          title="Schedule a Call"
          btnType="button"
          containerStyles="text-white rounded-full bg-red-500 min-w-[130px] font-bold lg:ml-4 sm:text-sm md:text-base" // Adjust size based on screen sizes
        />
      </div>
    </nav>
  </header>
);

export default NavBar;
