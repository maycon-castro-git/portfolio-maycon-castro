tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "#1b1b1b"
        }
    },

    fpsLimit: 60,

    particles: {
        number: {
            value: 85,
            density: {
                enable: true,
                area: 900
            }
        },

        color: {
            value: "#ffffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: {
                min: 0.22,
                max: 0.55
            }
        },

        size: {
            value: {
                min: 1,
                max: 3
            }
        },

        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 0.45,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
                default: "out"
            }
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            },

            onClick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {
            grab: {
                distance: 170,
                links: {
                    opacity: 0.55
                }
            },

            push: {
                quantity: 4
            }
        }
    },

    detectRetina: true
});
