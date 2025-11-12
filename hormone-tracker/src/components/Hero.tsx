import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">
                🎉 Now in Beta - Join 10,000+ Women
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Understand Your Body Better with{' '}
              <span className="gradient-text">AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track your cycle, predict hormonal changes, and receive personalized 
              health insights powered by machine learning. Take control of your 
              wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#waitlist" className="btn-primary inline-flex items-center justify-center">
                Start Tracking
                <ArrowRight className="ml-2" size={20} />
              </a>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                HIPAA Compliant
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                End-to-End Encrypted
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Science-Backed
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative bg-white rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800">
                <div className="bg-gradient-primary rounded-[2.5rem] p-6 overflow-hidden">
                  <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Your Cycle</h3>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-gray-500 font-semibold">{day}</div>
                      ))}
                      {Array.from({ length: 28 }).map((_, i) => (
                        <div
                          key={i}
                          className={`
                            aspect-square rounded-full flex items-center justify-center font-medium
                            ${i < 5 ? 'bg-rose-400 text-white' : ''}
                            ${i >= 5 && i < 13 ? 'bg-lavender-200 text-gray-700' : ''}
                            ${i >= 13 && i < 16 ? 'bg-primary-400 text-white' : ''}
                            ${i >= 16 ? 'bg-blue-100 text-gray-700' : ''}
                          `}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 shadow">
                      <p className="text-xs text-gray-600 mb-1">Next Period</p>
                      <p className="text-lg font-bold text-primary-600">5 days</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow">
                      <p className="text-xs text-gray-600 mb-1">Cycle Length</p>
                      <p className="text-lg font-bold text-primary-600">28 days</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl p-4 w-40"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">Accuracy</span>
                  <span className="text-sm font-bold text-green-500">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-rose-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-32 bg-white rounded-2xl shadow-xl p-4 w-36"
              >
                <p className="text-xs text-gray-600 mb-1">Today's Insight</p>
                <p className="text-sm font-semibold text-gray-800">High energy phase 💪</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
