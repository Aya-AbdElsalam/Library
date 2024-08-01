import React from "react";
import ReviewsDataProvider from "./context/ReviewsDataApi.jsx";
import Reviews from "./components/Reviews.jsx";
import HeaderTop from "./components/HeaderTop.jsx";
import Banner from "./components/Banner.jsx";
import HeaderBottom from "./components/HeaderBottom.jsx";
import AuthorsDataProvider from "./context/AuthorDataApi.jsx";
import Authors from "./components/Authors.jsx";
import WhyUs from "./components/WhyUs.jsx";
import FooterTop from "./components/FooterTop.jsx";
import FooterBottom from "./components/FooterBottom.jsx";
import Books from "./components/Books.jsx";
import BooksDataProvider from "./context/BooksDataApi.jsx";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <Banner />
      <BooksDataProvider>
        <Books />
      </BooksDataProvider>
      <AuthorsDataProvider>
        <Authors />
      </AuthorsDataProvider>
      <ReviewsDataProvider>
        <Reviews />
      </ReviewsDataProvider>

      <WhyUs />
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default App;
