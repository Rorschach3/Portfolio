import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Certificates from "./components/Achievements/Certificates";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Certificates />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: hsla(156, 97%, 8%, 1);

  background: linear-gradient(15deg, hsla(126, 97%, 12%, 1) 0%, hsla(135, 33%, 2%, 1) 8%, hsla(270, 63%, 3%, 1) 80%);

  background: -moz-linear-gradient(15deg, hsla(126, 97%, 12%, 1) 0%, hsla(135, 33%, 2%, 1) 8%, hsla(270, 63%, 3%, 1) 80%);

  background: -webkit-linear-gradient(15deg, hsla(126, 97%, 12%, 1) 0%, hsla(135, 33%, 2%, 1) 8%, hsla(270, 63%, 3%, 1) 80%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013D25", endColorstr="#040805", GradientType=1 );

  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
