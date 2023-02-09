import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Container } from "react-dom";

export const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine: any) => {

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | any) => {

  }, []);

  return (
    <Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "particles": {
          "color": {
            "value": "#0E2E14"
          },
            "number": {
                "value": 100,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }}
    />
  )
}



// "move": {
//   "enable": true,
//   "speed": 6,
//   "direction": "none",
//   "random": false,
//   "straight": false,
//   "out_mode": "out",
//   "bounce": false,
//   "attract": {
//     "enable": false,
//     "rotateX": 600,
//     "rotateY": 1200
//   }
// }