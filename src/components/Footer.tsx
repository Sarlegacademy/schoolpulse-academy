export default function Footer() {
  return (
    <footer className="bg-[#0f2c5c] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-[#d4a017]">SARVERUN LEGACY ACADEMY, CHITO</h3>
          <p className="mt-2 text-white/70">Opposite Market, Chito, Benue State</p>
        </div>
        <div><h4 className="font-bold">Quick Links</h4><p className="mt-2 text-white/70">About<br/>Academics<br/>Admissions<br/>Gallery</p></div>
        <div><h4 className="font-bold">Academics</h4><p className="mt-2 text-white/70">Nursery<br/>Primary<br/>JSS<br/>SSS</p></div>
        <div><h4 className="font-bold">Contact</h4><p className="mt-2 text-white/70">+234 800 000 0000<br/>info@sarverunlegacy.edu.ng</p></div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs text-white/50">© 2026 SARVERUN LEGACY ACADEMY</div>
    </footer>
  )
}