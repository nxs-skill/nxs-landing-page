import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Analytics } from "@vercel/analytics/next"
import "./index.css"
import App from "./App.tsx"

const rootElement = document.getElementById("root")

if (!rootElement) {
  console.error("Elemento root não encontrado!")
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
        <Analytics />
      </StrictMode>,
    )
  } catch (error) {
    console.error("Erro ao renderizar o App:", error)
  }
}
