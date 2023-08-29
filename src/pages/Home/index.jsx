import AboutUs from '../../components/atoms/AboutUs';
import { Footer, NavBar } from '../../components/marginals';
import { Contact, FAQ, HeroSection, MentorCarousel, Newsletter, ResourceSection, TeamCard } from '../../components/molecules';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Container>
        <AboutUs />
        <MentorCarousel />
        <TeamCard />
        <ResourceSection />
        <Newsletter />
        <FAQ />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
