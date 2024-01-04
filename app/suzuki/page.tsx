// import { CustomButton, Hero } from "@/components";
// import About from "@/components/About";
// import CarCard from "@/components/CarCard";
// import Faq from "@/components/Faq";
// import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
// import { CustomButton } from "./components";
import Hero from "./components/Hero";
import About from "./components/About";
import CustomButton from "./components/CustomButton";
import CarCard from "./components/CarCard";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="overflow-hidden mt-1 w-full mb-14 ">
        <CarCard />
      </div>
      <div className="overflow-hidden mt-2 w-full ">
        <About />
      </div>
      <div className="overflow-hidden mt-1 w-full mb-14 ">
        <Testimonials />
      </div>
      <div className="overflow-hidden mt-1 w-full ">
        <Faq />
      </div>
    </main>
  );
}
{/* <Link href="/navbar">Link to Home page</Link> */}
