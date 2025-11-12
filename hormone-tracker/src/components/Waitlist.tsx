import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8000/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    
    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
      }, 3000);
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Network error. Please check your connection.');
  }
};


  return (
    <section id="waitlist" className="section-container bg-gradient-hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
                <span className="text-primary-700 font-semibold text-sm">
                  🎉 Limited Beta Access
                </span>
              </div>
              
              <h2 className="text-4xl font-extrabold mb-4">
                Join Our <span className="gradient-text">Beta Community</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Be among the first to experience AI-powered cycle tracking. Get early access, 
                exclusive perks, and help shape the future of women's health technology.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-400 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                      I agree to receive updates about the beta program and accept the privacy policy
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Mail className="mr-2" size={20} />
                    Join the Waitlist
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">You're on the list!</h3>
                  <p className="text-green-700">
                    Check your email for confirmation and next steps.
                  </p>
                </motion.div>
              )}

              <p className="text-sm text-gray-500 mt-6 text-center">
                Join <span className="font-bold text-primary-600">10,000+</span> women already on the waitlist
              </p>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-primary-400 to-rose-400 p-8 lg:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Beta Perks</h3>
              <ul className="space-y-4">
                {[
                  'Early access to all features',
                  'Lifetime discount (50% off)',
                  'Priority support',
                  'Shape product development',
                  'Exclusive community access'
                ].map((perk, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
