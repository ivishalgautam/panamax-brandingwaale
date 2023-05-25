import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import Test from "./pages/Test.jsx";
import App from "./App.js";
import AboutPage from "./pages/AboutPage.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import heroImage from "./assets/hero-image.png";
import { Provider } from "react-redux";
import { store } from "./store/store";
import IndustriesPage from "./pages/IndustriesPage";
import ProductsPage from "./pages/ProductsPage";
import blog1 from "./assets/blogs-images/Blog-1.jpg";
import blog2 from "./assets/blogs-images/Blog-2.jpg";
import blog3 from "./assets/blogs-images/Blog-3.jpg";
import avatar from "./assets/icon-logo.png";

const products = [
  {
    id: 1,
    title: "reflective tape",
    // path: "reflective-tape",
    path: "1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 2,
    title: "tapes for wiring harness",
    // path: "tapes-for-wiring-harness",
    path: "2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 3,
    title: "die-cuts (single/double side)",
    // path: "die-cuts",
    path: "3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 4,
    title: "double side tapes for structure fixing/framing",
    // path: "double-side-tapes-for-structure",
    path: "4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 5,
    title: "various double side tapes",
    // path: "various-double-side-tapes",
    path: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 6,
    title: "d/s acrylic foam tape",
    // path: "acrylic-foam-tape",
    path: "6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 7,
    title: "auto body protection tapes(novacel)",
    // path: "auto-body-protection-tapes",
    path: "7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 8,
    title: "paint masking tapes",
    // path: "paint-masking-tapes",
    path: "8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
  {
    id: 9,
    title: "mirror applications d/s tissue tapes",
    // path: "mirror-applications-tissue-tapes",
    path: "9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,",
  },
];

const blogs = [
  {
    id: 1,
    title:
      "Mastering the Art of Adhesive Tapes: Practical Tips and Techniques for Effective Usage",
    desc: "Adhesive tapes are versatile tools that offer convenience and reliability in various applications, from DIY projects to industrial settings. However, to ensure optimal performance and long-lasting results, it's essential to master the art of using adhesive tapes effectively. In this blog, we will delve into practical tips and techniques to help you harness the full potential of adhesive tapes.",
    brief: [
      {
        name: "Surface Preparation",
        value:
          "Before applying adhesive tape, ensure the surface is clean, dry, and free from dust, grease, or debris. Use alcohol-based cleaners or mild soapy water to remove any contaminants. Proper surface preparation ensures strong adhesion and minimizes the risk of tape failure.",
      },
      {
        name: "Temperature Considerations",
        value:
          "Take into account the temperature conditions during tape application and usage. Some adhesive tapes perform better in specific temperature ranges, while others are designed to withstand extreme heat or cold. Follow the manufacturer's guidelines and choose tapes suitable for your intended environment.",
      },
      {
        name: "Tape Selection",
        value:
          "Selecting the right adhesive tape for your specific application is crucial. Consider factors such as the surface type, the weight or load the tape will bear, the required level of adhesion, and the environmental conditions. Conduct research, consult experts, or seek guidance from suppliers to identify the most suitable tape for your needs.",
      },
      {
        name: "Proper Application Technique",
        value:
          "Apply adhesive tape evenly and firmly, ensuring full contact with the surface. Use consistent pressure along the entire length of the tape to eliminate air bubbles or gaps. If applicable, follow specific instructions regarding stretching, overlapping, or aligning the tape for optimal performance.",
      },
      {
        name: "Compatibility Testing",
        value:
          "When using adhesive tapes on sensitive surfaces or materials, perform compatibility tests in inconspicuous areas. This helps ensure that the tape does not cause damage, discoloration, or leave residue upon removal.",
      },
      {
        name: "Storage and Handling:",
        value:
          "Proper storage is crucial to maintain the adhesive properties of tapes. Store them in a cool, dry place away from direct sunlight or extreme temperature fluctuations. Avoid storing tapes near chemicals or solvents that could compromise their adhesion. Additionally, handle tapes with clean hands to prevent oils or dirt from interfering with the adhesive.",
      },
      {
        name: "Tape Removal",
        value:
          "When removing adhesive tapes, do it slowly and steadily at a 180-degree angle. If the tape resists removal, use a heat source (like a hairdryer) to gently warm the adhesive, making it easier to peel off. If any residue remains, use an adhesive remover recommended by the tape manufacturer.",
      },
      {
        name: "Conclusion",
        value:
          "By following these practical tips and techniques, you can maximize the effectiveness and performance of adhesive tapes. From proper surface preparation to careful tape selection, correct application techniques, and safe removal methods, mastering these fundamentals will ensure successful outcomes and enhance your overall tape experience. Embrace the versatility and convenience of adhesive tapes while achieving reliable and long-lasting results in your projects.",
      },
    ],
    image: blog1,
    postedOn: "21 march",
    approvedBy: [
      {
        name: "shubham solanki",
        userImg: avatar,
      },
    ],
  },
  {
    id: 2,
    title:
      "Unveiling the Science Behind Adhesive Tapes: Exploring the Bonding Phenomenon",
    desc: "Adhesive tapes are ubiquitous in our daily lives, serving as a reliable means of bonding materials together. However, beneath their seemingly simple appearance lies a fascinating world of scientific principles and complex mechanisms. In this blog, we will unravel the science behind adhesive tapes, shedding light on the bonding phenomenon that makes them so effective.",
    brief: [
      {
        name: "Adhesion vs. Cohesion",
        value:
          "The science of adhesive tapes revolves around two fundamental concepts: adhesion and cohesion. Adhesion refers to the bond between the tape and the surface it adheres to, while cohesion is the internal strength of the tape itself. Both factors play crucial roles in determining the overall performance of the tape.",
      },
      {
        name: "The Role of Adhesive:",
        value:
          "The adhesive layer of an adhesive tape is a carefully formulated composition designed to create a strong bond. It consists of a combination of polymers, tackifiers, and additives, each contributing to specific adhesive properties. Adhesives can be pressure-sensitive, heat-activated, or solvent-based, depending on the intended application.",
      },
      {
        name: "Surface Energy",
        value:
          "The success of an adhesive tape bond depends on the surface energy of the materials being bonded. Surface energy refers to the molecular forces present on a material's surface, determining its ability to attract or repel the adhesive. Adhesive tapes are engineered to match the surface energy of specific materials, ensuring optimal adhesion.",
      },
      {
        name: "Wetting and Spreading",
        value:
          "Wetting is a crucial phenomenon that occurs when the adhesive comes into contact with the surface. It describes the adhesive's ability to spread out and make intimate contact with the material, maximizing the surface area of contact and enhancing the adhesive strength. Proper wetting ensures a strong bond between the tape and the substrate.",
      },
      {
        name: "Adhesive Strength and Time",
        value:
          "Adhesive tapes exhibit various adhesive strengths, ranging from temporary to permanent bonds. The adhesive strength depends on factors such as the formulation, the nature of the surface, and the application technique. Over time, some adhesives can undergo chemical and physical changes, enhancing their bond strength as they cure or age.",
      },
      {
        name: "Environmental Factors",
        value:
          "The performance of adhesive tapes can be influenced by environmental conditions such as temperature, humidity, and exposure to UV radiation or chemicals. Extreme temperatures may alter the adhesive properties, while humidity can impact the tape's ability to maintain a strong bond. Understanding these factors helps in selecting tapes suitable for specific environments.",
      },
      {
        name: "Conclusion",
        value:
          "Adhesive tapes are not merely mundane tools; they are the result of meticulous scientific research and engineering. Understanding the science behind adhesive tapes unveils the intricate mechanisms of bonding and adhesion. From the formulation of adhesives to the interplay of surface energies, adhesive tapes showcase a harmonious fusion of materials science and physics. Next time you utilize adhesive tapes, appreciate the underlying science that enables them to securely bond materials and simplify countless applications in our daily lives.",
      },
    ],
    image: blog2,
    postedOn: "13 Jan",
    approvedBy: [
      {
        name: "Admin",
        userImg: avatar,
      },
    ],
  },
  {
    id: 3,
    title:
      "Unraveling the Tape: Exploring the Versatility and Innovation of Adhesive Tapes",
    desc: "Adhesive tapes may seem like ordinary everyday items, but they have revolutionized the way we approach various tasks and projects. From simple household repairs to high-tech industrial applications, adhesive tapes offer an incredible range of uses and possibilities. In this blog, we dive into the fascinating world of adhesive tapes, exploring their versatility, innovation, and unique applications.",
    brief: [
      {
        name: "The Evolution of Adhesive Tapes",
        value:
          "A Sticky History. Tracing the origins of adhesive tapes, from early natural adhesive discoveries to modern synthetic formulations. Exploring the key milestones and advancements in tape technology over the years. How adhesive tapes have become indispensable tools in different industries and everyday life.",
      },
      {
        name: "Unleashing Creativity",
        value:
          "Artistic Possibilities with Adhesive Tapes. Discovering the unconventional uses of adhesive tapes in art and design. Showcasing artists and designers who have embraced tape as a medium for unique creations. Exploring tape art, installations, and tape-based crafts that push the boundaries of creativity.",
      },
      {
        name: "Sticking It Together",
        value:
          "Adhesive Tapes in Industrial Applications. Highlighting the critical role of adhesive tapes in industrial sectors, such as manufacturing, construction, and automotive. Examining specialized tapes used for bonding, sealing, and insulation in challenging environments. Showcasing innovative industrial applications, including tape solutions for extreme temperatures, high-stress environments, and unique material bonding.",
      },
      {
        name: "Beyond Bonding",
        value:
          "Unconventional Uses of Adhesive Tapes. Shedding light on lesser-known applications of adhesive tapes. Exploring their use in medical and healthcare settings, from wound dressings to surgical tapes. Investigating the role of tapes in sports, fashion, and other unexpected fields. Tape Technology of Tomorrow: Advancements and Future Possibilities. Discussing emerging technologies and materials in adhesive tape manufacturing.Exploring the development of smart tapes, self-healing tapes, and other cutting-edge innovations.Speculating on the future of adhesive tapes and the potential impact on various industries.",
      },
      {
        name: "Conclusion",
        value:
          "Adhesive tapes may seem like simple tools, but their impact on our lives and industries is remarkable. From everyday repairs to complex industrial applications, adhesive tapes provide solutions that were once unimaginable. As technology and innovation continue to advance, we can only imagine the incredible possibilities that lie ahead for adhesive tapes. So, next time you grab a roll of tape, remember the remarkable versatility and ingenuity behind this seemingly mundane tool.",
      },
    ],
    image: blog3,
    postedOn: "3 feb",
    approvedBy: [
      {
        name: "shubham solanki",
        userImg: avatar,
        profession: "developer",
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar products={products} />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<App blogs={blogs} />} />
              <Route
                path="/search/:query"
                element={<SearchPage products={products} />}
              />
              <Route
                path="/product/:productId"
                element={<ProductPage products={products} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
