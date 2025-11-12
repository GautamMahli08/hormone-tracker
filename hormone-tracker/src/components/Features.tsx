import { motion } from 'framer-motion';
import { Calendar, Activity, Lightbulb, BarChart3, Heart, Moon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Smart Cycle Prediction',
      description: 'Advanced algorithms forecast period start dates, cycle length, and phase transitions with 98% accuracy.',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Symptom Tracking',
      description: 'Log over 70 symptoms including physical, emotional, and lifestyle factors. Identify patterns and correlations.',
      color: 'from-primary-400 to-purple-500'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Personalized Insights',
      description: 'Daily health tips tailored to your current cycle phase, from nutrition advice to exercise recommendations.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Visual Analytics',
      description: 'Interactive dashboards display hormone predictions, symptom heatmaps, and mood trends at a glance.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Wellness Recommendations',
      description: 'Get personalized self-care practices, workout routines, and dietary suggestions based on your hormonal phase.',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: <Moon className="w-12 h-12" />,
      title: 'Sleep & Energy Tracking',
      description: 'Monitor sleep quality and energy levels to understand how your cycle affects your daily performance.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="section-container bg-gradient-primary">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Track, Predict & Thrive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features designed to give you complete control over your menstrual health and wellness.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-white rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">AI-Powered Predictions You Can Trust</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our machine learning model analyzes thousands of data points from your tracking history 
              to deliver predictions that become more accurate with each cycle.
            </p>
            <ul className="space-y-3">
              {[
                'Predicts period start dates with 98% accuracy',
                'Identifies optimal fertility windows',
                'Alerts you to unusual patterns',
                'Adapts to lifestyle changes and stress'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-rose-100 p-8 lg:p-12 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
              <h4 className="text-lg font-bold mb-4">Hormone Level Prediction</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Estrogen</span>
                    <span className="text-sm font-semibold text-primary-600">Peak Phase</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Progesterone</span>
                    <span className="text-sm font-semibold text-rose-600">Rising</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Testosterone</span>
                    <span className="text-sm font-semibold text-amber-600">Moderate</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
