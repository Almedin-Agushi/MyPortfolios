// File: src/components/ParticlesBG.jsx
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#ffffff" // ose ndrysho në "#f9fafb" për ngjyrë më të lehtë
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#3b82f6" },
          links: {
            color: "#60a5fa",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      }}
    />
  );
}
