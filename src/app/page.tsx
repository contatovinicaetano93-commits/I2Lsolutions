import { About } from "@/components/sections/about";
import { Commitment } from "@/components/sections/commitment";
import { Contact } from "@/components/sections/contact";
import { Differential } from "@/components/sections/differential";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Office } from "@/components/sections/office";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Differential />
      <Commitment />
      <Services />
      <Projects />
      <HowItWorks />
      <Founder />
      <Why />
      <Office />
      <Contact />
    </>
  );
}
