import Content from "./conponents/Content";
import Hero from "./conponents/Hero";
import Navbar from "./conponents/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
    </main>
  );
}
