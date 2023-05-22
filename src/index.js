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
import Try from "./pages/Try";
import IndustriesPage from "./pages/IndustriesPage";

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
    title: "National Sleep Week and Tape — Innovations we saw at CES 2023",
    desc: "Highlights from CES 2023 Consumer Electronics Show (CES) is probably the most significant trade show when it comes to consumer",
    image: heroImage,
    postedOn: "21 may",
    approvedBy: [
      {
        name: "shubham solanki",
        userImg:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        profession: "developer",
      },
    ],
  },
  {
    id: 2,
    title: "National Sleep Week and Tape — Innovations we saw at CES 2023",
    desc: "Highlights from CES 2023 Consumer Electronics Show (CES) is probably the most significant trade show when it comes to consumer",
    image: heroImage,
    postedOn: "21 may",
    approvedBy: [
      {
        name: "shubham solanki",
        userImg:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        profession: "developer",
      },
    ],
  },
  {
    id: 3,
    title: "National Sleep Week and Tape — Innovations we saw at CES 2023",
    desc: "Highlights from CES 2023 Consumer Electronics Show (CES) is probably the most significant trade show when it comes to consumer",
    image: heroImage,
    postedOn: "21 may",
    approvedBy: [
      {
        name: "shubham solanki",
        userImg:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
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
              <Route path="/Try" element={<Try />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
              <Route path="/industries" element={<IndustriesPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
