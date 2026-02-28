import { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedBy from "./components/TrustedBy"
import Services from "./components/Services"
import OurWork from "./components/OurWork"
import Teams from "./components/Teams"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  /* -------------------- DARK MODE -------------------- */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  /* -------------------- CUSTOM CURSOR -------------------- */
  useEffect(() => {
    const handleMoveCursor = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener("mousemove", handleMoveCursor)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mousemove", handleMoveCursor)
    }
  }, [])

  return (
    <div className="relative dark:bg-[#060612] bg-[#f8f8fc] selection:bg-primary/20">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: theme === "dark" ? "#1a1a2e" : "#fff",
            color: theme === "dark" ? "#e2e8f0" : "#0f172a",
            border: "1px solid",
            borderColor: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            borderRadius: "12px",
            fontSize: "0.875rem",
            padding: "12px 16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          },
        }}
      />

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] mix-blend-difference"
        style={{ transition: "transform 0.12s cubic-bezier(0.23,1,0.32,1)" }}
      />

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ transition: "transform 0.04s linear" }}
      />
    </div>
  )
}

export default App