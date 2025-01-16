//har Each folder ka js extension ki file bnegi. usme import export hogaa har each cheez
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"; //, Experience

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;