import world from "../../src/assets/Fill213.png"
export default function Navbar() {
  return (
    <nav className="bg-red-400 flex justify-center items-center gap-4 h-16">
      <img className="h-4" src={world} alt="A world logo" />
      <h1>Leo's Adventures</h1>
    </nav>
  )
}