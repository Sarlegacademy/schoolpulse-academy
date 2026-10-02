export default function AcademicsPage() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold text-center">SARVERUN LEGACY ACADEMY, CHITO</h1>
      <p className="text-center mt-2 text-gray-600">Nursery | Primary | JSS | SSS</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
        <div className="border p-6 rounded-xl">
          <h2 className="font-bold text-xl">Nursery Section</h2>
          <p className="mt-2 text-gray-600">Early years foundation.</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h2 className="font-bold text-xl">Primary Section</h2>
          <p className="mt-2 text-gray-600">Building strong literacy and numeracy.</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h2 className="font-bold text-xl">JSS</h2>
          <p className="mt-2 text-gray-600">Junior Secondary.</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h2 className="font-bold text-xl">SSS</h2>
          <p className="mt-2 text-gray-600">Senior Secondary - WAEC/NECO.</p>
        </div>
      </div>
    </main>
  );
}