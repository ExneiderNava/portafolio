// src/ParticlesBackground.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // 1. Inicializa el motor de partículas una sola vez
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // 2. Configuración para lograr "Lluvia + Iluminación al pasar el cursor"
    const options = {
        background: {
            color: {
                value: "#000000", // Fondo negro absoluto para que resalte
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push", // Empuja más partículas al hacer click
                },
                onHover: {
                    enable: true,
                    mode: "grab", // ¡LA CLAVE! Crea líneas que "agarran" el cursor
                },
            },
            modes: {
                grab: {
                    distance: 140, // Qué tan cerca debe estar el cursor
                    links: {
                        opacity: 0.5, // Opacidad de las líneas que se iluminan
                    },
                },
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            color: {
                value: "#0000FF", // Tu AZUL ELÉCTRICO para las partículas
            },
            links: {
                color: "#0000FF", // Tu AZUL ELÉCTRICO para las líneas
                distance: 150,
                enable: true,
                opacity: 0.1, // Opacidad baja por defecto para que sea sutil
                width: 1,
            },
            move: {
                direction: "bottom", // ¡LA CLAVE! Caen como lluvia/código
                enable: true,
                outModes: {
                    default: "out", // Salen de la pantalla y reaparecen
                },
                random: false,
                speed: 1, // Velocidad de caída
                straight: true, // Caen recto, no en zigzag
            },
            number: {
                density: {
                    enable: true,
                },
                value: 120, // Cantidad de partículas
            },
            opacity: {
                value: 0.3, // Partículas sutiles
            },
            shape: {
                type: "circle", // Forma: Círculos (puedes cambiar a 'square' o 'triangle')
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                style={{
                    position: "absolute",
                    zIndex: -1, // Lo pone DEBAJO de tu contenido
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        );
    }

    return <></>;
};

export default ParticlesBackground;