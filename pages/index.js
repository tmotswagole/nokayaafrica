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
  <div className='bg-primary-black overflow-hidden overflow-y-scroll h-screen scroll-snap-type-y scroll-snap-align-start'>
    <NokaYaAfricaSEO />
    <Navbar />
    <Hero className='h-screen scroll-snap-stop' />
    <div className='relative'>
      <About className='h-screen scroll-snap-stop' />
      <div className='gradient-03 z-0' />
      <Explore className='h-screen scroll-snap-stop' />
    </div>
    <div className='relative'>
      <WhyUs className='h-screen scroll-snap-stop' />
      <div className='gradient-04 z-0' />
      <Features className='h-screen scroll-snap-stop' />
    </div>
    {/* <World className='h-screen scroll-snap-stop' /> */}
    <MissionStatement className='h-screen scroll-snap-stop' />
    <div className='relative'>
      <Services className='h-screen scroll-snap-stop' />
      <div className='gradient-03 z-0' />
      <Feedback className='h-screen scroll-snap-stop' />
    </div>
    <Footer />
  </div>
);

export default Home;
