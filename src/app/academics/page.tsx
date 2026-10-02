export default function AcademicsPage() {
  const programs = [
    { level: "Nursery", age: "2 - 5 Years", desc: "Play-based learning, phonics, numeracy, and character building in a safe, loving environment.", subjects: ["Phonics", "Numeracy", "Creative Art", "Bible & Morals", "Rhymes"], color: "bg-pink-50 border-pink-200" },
    { level: "Primary", age: "6 - 11 Years", desc: "Strong foundation in core subjects with critical thinking, ICT, and moral excellence.", subjects: ["English", "Mathematics", "Basic Science", "Civic Education", "ICT", "Creative Vocational"], color: "bg-blue-50 border-blue-200" },
    { level: "JSS", age: "12 - 14 Years", desc: "BECE-focused curriculum that builds confidence and prepares for senior secondary.", subjects: ["English", "Maths", "Basic Science & Tech", "Business Studies", "French", "CCA"], color: "bg-amber-50 border-amber-200" },
    { level: "SSS", age: "15 - 18 Years", desc: "WAEC, NECO & JAMB preparation with Science, Arts, and Commercial tracks.", subjects: ["Physics/Chemistry/Biology", "Economics/Government", "Further Maths", "Literature", "Commerce"], color: "bg-emerald-50 border-emerald-200" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white/90 backdrop-blur z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-black text-xl text-[#0f2c5c]">SchoolPulse Academy</a>
          <a href="/" className="text-sm font-medium text-gray-600 hover:text-[#0f2c5c]">← Back to Home</a>
        </div>
      </header>

      <section className="bg-[#0f2c5c] text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-black mb-4">Our Academics</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">From Nursery to SSS3 — a complete, God-centered and excellence-driven curriculum that prepares your child for WAEC, NECO, JAMB and life.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.level} className={`border-2 rounded-2xl p-6 ${p.color}`}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-[#0f2c5c]">{p.level}</h3>
                <span className="text-xs bg-white px-2 py-1 rounded-full border">{p.age}</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.subjects.map(s => <span key={s} className="text- bg-white border px-2 py-1 rounded-full">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0f2c5c] mb-6">Academic Approach</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div><h4 className="font-bold mb-1">✓ Small Class Size</h4><p className="text-gray-600">Max 25 students for personal attention.</p></div>
              <div><h4 className="font-bold mb-1">✓ Qualified Teachers</h4><p className="text-gray-600">TRCN certified, passionate educators.</p></div>
              <div><h4 className="font-bold mb-1">✓ ICT & Smart Boards</h4><p className="text-gray-600">Digital learning in every class.</p></div>
              <div><h4 className="font-bold mb-1">✓ Continuous Assessment</h4><p className="text-gray-600">Weekly tests, assignments, and feedback to parents via SchoolPulse app.</p></div>
            </div>
          </div>
          <div className="bg-[#0f2c5c] text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Admission Open 2026/2027</h3>
            <p className="text-sm opacity-90 mb-6">Nursery to SS3. Entrance exam every Saturday.</p>
            <a href="/" className="block text-center bg-white text-[#0f2c5c] font-bold py-3 rounded-xl">Apply Now</a>
            <p className="text-xs mt-4 opacity-70">Call: 0800-SCHOOLPULSE</p>
          </div>
        </div>
      </section>
    </div>
  );
}
