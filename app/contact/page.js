import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact(){
return (
    <div className="flex flex-col">
    <Header />
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out to us using any of the following contact details:
        </p>

        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">📞 Phone:</span>
            <span className="text-gray-600">+1 234 567 890</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">📧 Email:</span>
            <span className="text-gray-600">contact@vasista.com</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">📍 Address:</span>
            <span className="text-gray-600">123 Tech Avenue, Silicon Valley, CA</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">🌐 Website:</span>
            <span className="text-blue-600 hover:underline">
              <a href="https://www.vasista.com" target="_blank" rel="noopener noreferrer">
                www.vasista.com
              </a>
            </span>
          </div>
        </div>
        </div>
        </section>
    
    <Footer />
    </div>
)

}