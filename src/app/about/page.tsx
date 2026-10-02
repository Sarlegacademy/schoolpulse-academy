import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SCHOOL_INFO } from "@/config"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar/>
      
      {/* Header */}
      <section className="bg-[#0f2c5c] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-2 text-[#d4a017]">{SCHOOL_INFO.motto}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* History */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0f2c5c]">Our History</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded in 2010 in Chito, Benue State, {SCHOOL_INFO.name} was established by Rev. Fr. Mathias Sarverun 
              with a vision to bring quality, affordable and moral education to the children of Chito and surrounding communities.
              <br/><br/>
              From humble beginnings with 23 pupils and 3 teachers, we have grown to over 500 students, becoming a beacon of 
              academic excellence and character formation in Benue State.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center text-gray-400 font-bold">
            School Building Photo - Add later to /public
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="border-2 border-[#0f2c5c]/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center font-bold text-[#d4a017]">M</div>
            <h3 className="font-bold text-lg mt-4 text-[#0f2c5c]">Our Mission</h3>
            <p className="text-sm mt-2 text-gray-600">To provide holistic education anchored on discipline, knowledge and integrity, nurturing every child to reach their full potential.</p>
          </div>
          <div className="border-2 border-[#0f2c5c]/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-[#0f2c5c]/10 rounded-full flex items-center justify-center font-bold text-[#0f2c5c]">V</div>
            <h3 className="font-bold text-lg mt-4 text-[#0f2c5c]">Our Vision</h3>
            <p className="text-sm mt-2 text-gray-600">To be the leading centre for raising leaders of character and excellence who will transform Nigeria and the world.</p>
          </div>
          <div className="border-2 border-[#d4a017]/20 p-8 rounded-2xl bg-[#d4a017]/5">
            <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center font-bold text-white">C</div>
            <h3 className="font-bold text-lg mt-4 text-[#0f2c5c]">Core Values</h3>
            <ul className="text-sm mt-2 text-gray-600 space-y-1">
              <li>• Discipline</li>
              <li>• Integrity & Godliness</li>
              <li>• Excellence & Hardwork</li>
              <li>• Respect & Service</li>
            </ul>
          </div>
        </div>

        {/* Staff */}
        <h2 className="text-2xl font-bold text-[#0f2c5c] mt-20">Key Staff</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {[
            {name:"Rev. Fr. Mathias Sarverun", role:"Proprietor"},
            {name:"Mr. John Terseer", role:"Principal"},
            {name:"Mrs. Mary Ngodoo", role:"Head Teacher, Primary"},
            {name:"Mr. Samuel Aondofa", role:"Bursar"},
          ].map(s=>(
            <div key={s.name} className="border p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto"></div>
              <p className="font-bold mt-3 text-sm">{s.name}</p>
              <p className="text-xs text-gray-500">{s.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  )
}