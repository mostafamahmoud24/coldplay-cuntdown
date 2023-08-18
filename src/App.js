import CountdownComponent from "./components/CountdownComponent";
import './index.css'
import image from "./assets/images/cp-1.png"


function App() {
  return (
    <>
      <section class="wrap">
        <div class="video-bg">
          <iframe src="https://www.youtube.com/embed/kWUV5-frRU4?autoplay=1&mute=1&playsinline=1&loop=1&controls=1&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
      <div className="countdown-container">
      {/* <img src={image} alt="coldplay-logo" width={100} style={{paddingBottom: "20px"}}/> */}

        <CountdownComponent />
      </div>
    </>
  );
}

export default App;
