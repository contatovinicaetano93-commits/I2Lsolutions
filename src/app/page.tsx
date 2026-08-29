import { About } from "@/components/sections/about";
import { Commitment } from "@/components/sections/commitment";
import { Hero } from "@/components/sections/hero";
import { Office } from "@/components/sections/office";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Commitment />
      <Projects />
      <Services />
      <Office />
    </>
  );
}
