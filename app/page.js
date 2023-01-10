import { Footer, Navbar, NokaYaAfricaSEO } from "../components";
import {
  About,
  Explore,
  Feedback,
  WhyUs,
  Hero,
  Services,
  Features,
  // World,
  MissionStatement,
} from "../sections";

const Home = () => (
  <div className='bg-primary-black overflow-hidden overflow-y-scroll h-screen'>
    <NokaYaAfricaSEO />
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </div>
    <div className='relative'>
      <WhyUs />
      <div className='gradient-04 z-0' />
      <Features />
    </div>
    {/* <World /> */}
    <MissionStatement />
    <div className='relative'>
      <Services />
      <div className='gradient-03 z-0' />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
