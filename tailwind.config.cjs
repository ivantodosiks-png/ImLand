/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#070A12",
          850: "#090D18",
          800: "#0B1020"
        }
      },
      boxShadow: {
        glowCyan: "0 0 0 1px rgba(34,211,238,.2), 0 10px 40px rgba(34,211,238,.16)",
        glowPurple:
          "0 0 0 1px rgba(168,85,247,.18), 0 12px 48px rgba(168,85,247,.18)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,.18), transparent 60%)",
        "aurora":
          "radial-gradient(1200px 600px at 10% 10%, rgba(34,211,238,.20), transparent 55%), radial-gradient(1000px 700px at 85% 15%, rgba(168,85,247,.22), transparent 55%), radial-gradient(900px 700px at 60% 80%, rgba(16,185,129,.18), transparent 55%)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

