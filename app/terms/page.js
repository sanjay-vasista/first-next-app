import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Terms(){
return (
    <div className="flex flex-col max-h-screen">
    <Header />
    <div className ="flex-col flex-grow ">
        <h1 className= "text-4xl mt-5 font-bold shadow-lg text-blue-600 ">Terms and condition:-</h1>
        
        <div className="conatiner m-10 shadow-xl shadow-blue-200 p-4">
            <h1 className="font-bold mt-5 text-blue-700">1. Acceptance of Terms</h1>
            <p className="ml-4 flex-grow left-10 text-sm text-black">
            By using Vasista’s website, products, or services, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.
            </p>
        </div>

        <div className="conatiner m-10 shadow-xl shadow-blue-200 p-4">
            <h1 className="font-bold mt-5 text-blue-700">2.User Responsibilities</h1>
            <p className="ml-4 flex-grow left-10 text-sm text-black">
            You must be 18 years or older to use our services.
            You agree not to engage in illegal activities while using Vasista’s services.
            You are responsible for maintaining the confidentiality of your account and password.
            </p>
        </div>


        <div className="conatiner m-10 shadow-xl shadow-blue-200 p-4">
            <h1 className="font-bold mt-5 text-blue-700">3.Intellectual Property</h1>
            <p className="ml-4 flex-grow left-10 text-sm text-black">
            All content, logos, and trademarks displayed on Vasista’s website are the property of Vasista.
            Unauthorized reproduction or distribution of Vasista’s intellectual property is strictly prohibited. 
            </p>
        </div>


        <div className="conatiner m-10 shadow-xl shadow-blue-200 p-4">
            <h1 className="font-bold mt-5 text-blue-700">4.Limitation of Liability</h1>
            <p className="ml-4 flex-grow left-10 text-sm text-black">
            Vasista is not responsible for any losses, damages, or service interruptions caused by third parties or unforeseen circumstances.
            Our liability, in any case, shall not exceed the amount paid by you for our services.
            </p>
        </div>


        <div className="conatiner m-10 shadow-xl shadow-blue-200 p-4">
            <h1 className="font-bold mt-5 text-blue-700">5.Privacy Policy</h1>
            <p className="ml-4 flex-grow left-10 text-sm text-black">
            We collect and store user data as outlined in our Privacy Policy.
            We do not sell or share personal information with third parties without user consent.
            </p>
        </div>

        </div>
    <Footer />
    </div>
)

}