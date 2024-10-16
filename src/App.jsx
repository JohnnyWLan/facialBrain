import  { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import { MoveDirection } from '@tsparticles/engine';
window.global = window;


// Clarifai App Setup
const app = new Clarifai.App({
  apiKey: '004199e76ced4504a7bcec8585bf4747'  // Ensure the API key is valid
});

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [init, setInit] = useState(false);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);  // Display the image before prediction
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,  // Use a working model like FACE_DETECT_MODEL
      input  // Use the actual image URL from the input
    )
    .then(response => {
      if (response) {
        console.log(response);  // Handle the response data here
      }
    })
    .catch(err => {
      console.error("Error during prediction:", err);  // Log the error
    });
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    return new Promise((resolve) => resolve());
  };

  const options = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <>
      <div className="App">
        {init && <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm value={input} onChange={onInputChange} onSubmit={onButtonSubmit} />
        <FaceRecognition imageUrl={imageUrl} />  {/* Pass imageUrl to FaceRecognition */}
      </div>
    </>
  );
}

export default App;
