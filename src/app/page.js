import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
      <>
          <Nav/>
          <Hero/>
          <About/>
          <Contact/>
      </>
  );
}
