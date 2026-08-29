import {
  About,
  Commitment,
  Contact,
  Differential,
  Founder,
  Hero,
  HowItWorks,
  Office,
  Projects,
  Services,
  Why,
} from "@/components/site-bundle";

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
