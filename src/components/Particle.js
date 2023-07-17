import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{

        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 1400
            }
          },
          color: {
            value: "#c770f0"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 7
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 250,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 10,
              duration: 4,
              opacity: 8,
              speed: 1
            },
            repulse: {
              distance: 100,
              duration: 5
            },
            push: {
              particles_nb: 1,
              speed: 10,
              duration: 5
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true

      }}
    />
  );
}

export default Particle;
