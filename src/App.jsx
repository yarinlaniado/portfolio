import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import WebGL from "./utils/WebGL";
const App = () => {
  const webGLSupport = WebGL.isWebGL2Available();
  if (!webGLSupport)
    return (
      <p class="font-bold text-xl grid h-screen place-items-center">
        Sorry &#128549;, this browser is not supported, please use a browser
        that support or update your browser.
        <hr />
        Thanks, Yarin Laniado.
      </p>
    );
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
