import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home(){
  return (<>
  <Header />
  <section className="bg-blue-600 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Vasista</h1>
        <p className="text-xl text-bold m-8">
          We provide innovative technology solutions to help your business grow.
        </p>
        </div>
    </section>
        <p className="text-lg m-8 mt-12 text-blue-600 p-4">
          At Vasista, we specialize in software development, cloud solutions, and IT consulting. Our team of experts works closely with you to deliver scalable, secure, and efficient solutions tailored to your business needs. Whether you're looking to enhance your digital presence or optimize your operations, we are here to help you achieve your goals.
        </p>
      
    
    <Footer />
    </>
  )
}