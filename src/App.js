import "./App.css";
import SlideShow from "./components/SlideShow";
import Footer from "./pages/generally/Footer";
import Header from "./pages/generally/Header";
import HomePages from "./pages/home/HomePages";
import imageContent from "./public/images/imageContent.jpg";

function App() {
  return (
    <div className="App">
      <div
        className="w-[100vw] md:h-[320vh] h-[200vh]"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                  ${imageContent}
      )`,
          backgroundPosition: "center center",
          filter: "opacity(10%)",
          zIndex: -5,
        }}
      ></div>
      <div className="container-background">
        <Header />
        <HomePages />
        <Footer />
        {/* <SlideShow /> */}
      </div>
    </div>
  );
}

export default App;
