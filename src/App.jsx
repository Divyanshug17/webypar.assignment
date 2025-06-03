import { useState } from 'react'
import './App.css'
import FAQAccordion from './faq.jsx'
import InfluencerCard from "./influencercard.jsx";
import { CheckCircle, Rocket, Zap } from "lucide-react";

const data = {
  Maharashtra: {
    Mumbai: [
      {
        name: "Aryav Singh",
        image: "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGYzMTNkM2QtZTA2MS00ZjcwLWEyMjgtNTU1OGFhODY4OTczLmpwZWc.webp",
        instagramFollowers: "1.5M",
        youtubeFollowers: "85K",
      },
      {
        name: "pihu Sharma",
        image: "https://i.pinimg.com/736x/d2/38/de/d238deeadabed399debaed1a2aa1a650.jpg",
        instagramFollowers: "2.0M",
        youtubeFollowers: "1M",
      },
    ],
    Pune: [
      {
        name: "Rohan Joshi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PcCGGbnWNN8MZPcbIUe37jyuBWZU8fQareUYtBqeVFkLJSInquZvDdrPFj9JHlCx2Xk&usqp=CAU",
        instagramFollowers: "150K",
        youtubeFollowers: "700K",
      },
    ],
  },
  Delhi: {
    "New Delhi": [
      {
        name: "priyanka Kapoor",
        image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67363257f3ab95001dd5daba.png",
        instagramFollowers: "1.2M",
        youtubeFollowers: "1M",
      },
    ],
  },
};

const features = [
  "Hotel Property Management",
  "Restaurant POS",
  "QR Scanner Food Ordering",
  "Billing Software",
  "Payment Gateway",
  "Influencer Marketing",
  "Marketing Platform",
];

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = Object.keys(data);
  const cities = selectedState ? Object.keys(data[selectedState]) : [];
  const influencers =
    selectedState && selectedCity ? data[selectedState][selectedCity] : [];

  const faqData = [
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },
    {
      question: "What is the pricing?",
      answer:
        "Experience hospitality growth without the risk. Say goodbye to expensive influencer deals and fragmented software chaos—let's transform your hospitality business together!",
    },

    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-black flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        {/* Add Boost Labels */}
        <div className="flex flex-row items-center justify-center gap-6 mb-4">
  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
    <Rocket className="w-4 h-4" />
    New Customers
  </div>
  <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm">
    <Zap className="w-4 h-4" />
    Repeat Rate Boost
  </div>
</div>
        <h1 className="text-white text-sm md:text-base lg:text-lg font-medium max-w-xl mb-6 leading-relaxed">
          Real Sales Growth for Restaurants and Hotels
          <br />
          with Commission-Based Influencer Marketing
        </h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition">
          Contact Us
        </button>
      </div>

      {/* Feature Section */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <ul className="flex flex-col gap-4 items-start">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="text-purple-600 w-5 h-5" />
                <span className="text-gray-800 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Influencer Section */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-6 whitespace-nowrap">
            Meet Your City's Top Influencers
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <select
              className="p-3 border rounded-md bg-white"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select
              className="p-3 border rounded-md bg-white"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {influencers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {influencers.map((influencer, index) => (
                <InfluencerCard key={index} influencer={influencer} />
              ))}
            </div>
          ) : selectedState && selectedCity ? (
            <p className="text-center text-gray-600">No influencers found.</p>
          ) : null}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Quick Answers to Common Queries
          </h2>
          <FAQAccordion faqs={faqData} />
        </div>
      </div>
    </div>
  );
}

export default App;



