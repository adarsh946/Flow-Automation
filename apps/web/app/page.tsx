import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
    </main>
  );
}
