import "./styles/index.css";
import "./styles/features.css";
import NavbarMenu from "./components/NavbarMenu";
import BannerPrincipal from "./components/BannerPrincipal";
import Novedades from "./components/Novedades";

const App = () => {
  return (
    <>
     <NavbarMenu></NavbarMenu>
      <BannerPrincipal></BannerPrincipal>
      <Novedades></Novedades>
    </>
  );
};

export default App;
