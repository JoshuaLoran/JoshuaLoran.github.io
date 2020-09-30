import React from "react";
import Particles from "react-tsparticles";

const ParticleBG = () => {
  return (<Particles
    width="100%"
    height="100%"
    options={{
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 50,
          enable: true,
          opacity: 0.5,
          width: 0.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 2,
        },
      },
      detectRetina: true,
    }}
  />);
};

export {ParticleBG};
