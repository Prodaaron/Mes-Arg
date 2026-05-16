import React from "react";
import "./products.css";

const products = () => {
  const productList = [
    {
      id: 1,
      name: "Single Color PVC Boots",
      category: "Blue",
    //   price: "$24",
      image:
        "./mes-arg-pvc-boots-single color-blue.png",
    },
    {
      id: 2,
      name: "Two Color PVC Boots",
      category: "Pink-Green",
    //   price: "$32",
      image:
        "./mes-arg-pvc-boots-two-color-pink-green.png",
    },
    {
      id: 3,
      name: "Two Color PVC Boots",
      category: "Yellow-Black",
    //   price: "$28",
      image:
        "./mes-arg-pvc-boots-two-color-yellow-black.png",
    },
    {
      id: 4,
      name: "Colorless PVC Raw Material",
      category: "Colorless Granules",
    //   price: "$39",
      image:
        "./mes-arg-pvc-granules-colorless.png",
    },
    {
      id: 5,
      name: "Minimal Black Slides",
      category: "White Granules",
    //   price: "$42",
      image:
        "./mes-arg-pvc-granules-colorless.png",
    },
    {
      id: 6,
      name: "Summer EVA Sandals",
      category: "Color Granules",
    //   price: "$26",
      image:
        "mes-arg-pvc-granules-color.png",
    },
  ];

  return (
    <main className="products-page">
      {/* HERO */}
      {/* <section className="products-hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-tag">MES-ARG COLLECTION</span>

            <h1>
              Modern <span className="text-gradient">Footwear</span> Built For
              Everyday Comfort
            </h1>

            <p>
              Explore premium EVA & PVC footwear engineered for durability,
              flexibility, and modern lifestyle aesthetics.
            </p>

            <div className="hero-buttons">
              <button>Explore Products</button>

              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>

          <div className="hero-image glass shadow">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
              alt="Hero Product"
            />
          </div>
        </div>
      </section> */}

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR PRODUCTS</span>

            <h2>Featured Collection</h2>

            <p>
              High-quality footwear products crafted with precision and modern
              manufacturing standards.
            </p>
          </div>

          <div className="products-grid">
            {productList.map((product) => (
              <div key={product.id} className="product-card glass shadow">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <span className="product-price">
                      {product.price}
                    </span>

                    <button>Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default products;