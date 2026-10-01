export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 shadow">
        <h1 className="text-2xl font-bold text-blue-700">SchoolPulse Academy</h1>
        <button className="px-4 py-2 bg-blue-700 text-white rounded">Enroll Now</button>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-5xl font-bold mb-4">Learn. Grow. Excel.</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Welcome to SchoolPulse Academy — Quality education for primary and secondary students. Smart classes, experienced teachers, bright future.
        </p>
        <button className="px-8 py-3 bg-blue-700 text-white rounded-full text-lg">
          View Our Courses
        </button>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-3xl mb-2">📚</h3>
          <h4 className="font-bold text-lg">Expert Teachers</h4>
          <p className="text-gray-600">Qualified and passionate educators</p>
        </div>
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-3xl mb-2">💻</h3>
          <h4 className="font-bold text-lg">Smart Learning</h4>
          <p className="text-gray-600">Online and offline classes</p>
        </div>
        <div className="p-6 border rounded-xl text-center">
          <h3 className="text-3xl mb-2">🏆</h3>
          <h4 className="font-bold text-lg">Proven Results</h4>
          <p className="text-gray-600">90% of students excel in exams</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center p-8 mt-10">
        <p>© 2026 SchoolPulse Academy — All Rights Reserved</p>
        <p className="text-sm text-gray-400 mt-2">Contact: info@schoolpulse-academy.com</p>
      </footer>
    </div>
  );
}