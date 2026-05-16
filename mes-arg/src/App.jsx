import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/Hero/hero.jsx";
import Products from "./components/products.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Products />

      <section
        style={{
          minHeight: "100vh",
          background: "#f3f4f6",
          padding: "100px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            color: "#111827",
          }}
        >
          Main Content
        </h2>
      </section>
    </>
  );
}

export default App;