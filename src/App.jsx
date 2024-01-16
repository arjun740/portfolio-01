import NavBar from "./Components/NavBar/NavBar";
import "./index.css";
const App = () => {
  return (
    <div className="html-scroll-snap">
      <section className="h-screen">
        <NavBar />
      </section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen">Service</section>
      <section className="h-screen">parallax</section>
      <section className="h-screen">Portfolio1</section>
      <section className="h-screen">Portfolio2</section>
      <section className="h-screen">Portfolio3</section>
      <section className="h-screen">contact</section>
    </div>
  );
};
export default App;
