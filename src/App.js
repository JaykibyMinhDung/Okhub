import "./App.css";
import Footer from "./pages/generally/Footer";
import Header from "./pages/generally/Header";
import HomePages from "./pages/home/HomePages";
import imageContent from "./public/images/imageContent.jpg";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                  ${imageContent}
      )`,
          backgroundPosition: "center center",
          width: "100vw",
          height: "320vh",
          filter: "opacity(10%)",
          zIndex: -5,
        }}
      ></div>
      <div className="container-background">
        <Header />
        <HomePages />
        <Footer />
      </div>
    </div>
  );
}

export default App;
