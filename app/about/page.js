import { Grandiflora_One } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About(){
return (
    <div className="flex flex-col max-h-screen">
    <Header />
        
      <div className="max-w-screen mx-auto ">
        
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Vasista
        </h1>

        
        <p className="text-center text-black m-10 p-6">
          Vasista is a cutting-edge technology company providing innovative
          solutions in software development, cloud computing, and digital
          transformation. Our mission is to empower businesses with scalable,
          secure, and efficient technology.
        </p>

        
        <div className="grid md:grid-cols-2 gap-10 m-20 ">
          
          <div className="conatiner shadow-xl shadow-blue-300 p-4">
            <h2 className="text-xl font-semibold text-blue-500">Who We Are</h2>
            <p className="text-gray-700 mt-2">
              Vasista combines expertise in AI, cybersecurity, and IT
              consulting to deliver tailor-made solutions for businesses of all
              sizes.
            </p>
          </div>

          
          <div className="container shadow-xl shadow-blue-300 p-4"> 
            <h2 className="text-xl font-semibold text-blue-500">Our Vision</h2>
            <p className="text-gray-700 mt-2">
              To be a global leader in technology solutions, driving digital
              transformation and innovation for businesses worldwide.
            </p>
          </div>

          
          <div className="container shadow-xl shadow-blue-300 p-4">
            <h2 className="text-xl font-semibold text-blue-500">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Expert team of developers & IT consultants.</li>
              <li>Customized solutions for businesses.</li>
              <li>Reliable 24/7 support & cutting-edge technology.</li>
            </ul>
           </div>

          
          <div className="container shadow-xl shadow-blue-300 p-4">
            <h2 className="text-xl font-semibold text-blue-500">Our Values</h2>
            <p className="text-gray-700 mt-2">
              🚀 Innovation | 💡 Integrity | 📈 Growth | 🤝 Customer-Centric
            </p>
          </div>
        </div>
      </div>
    
  
    <Footer />
    </div>
)

}
