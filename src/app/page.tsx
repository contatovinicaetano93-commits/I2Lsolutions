import { Commitment } from "@/components/sections/commitment";
import { Hero } from "@/components/sections/hero";
import { Office } from "@/components/sections/office";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Commitment />
      <Projects />
      <Services />
      <Office />
    </>
  );
}
