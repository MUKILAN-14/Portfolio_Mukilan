import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import HomePage from "./components/HomePage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App m-5 ">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
