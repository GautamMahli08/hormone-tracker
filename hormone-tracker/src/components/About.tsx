import { motion } from 'framer-motion';
import { Brain, TrendingUp, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Advanced AI algorithms that learn your unique patterns and adapt to your cycle over time.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Accurate forecasts for periods, ovulation, and hormonal fluctuations based on your data.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'Your health data is encrypted, secure, and never shared without your explicit consent.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Personalized Insights',
      description: 'Tailored recommendations for nutrition, exercise, and self-care based on your cycle phase.'
    }
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            How <span className="gradient-text">AI Powers</span> Your Health Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our machine learning algorithms analyze your menstrual health data to identify 
            patterns unique to you, providing increasingly accurate predictions with each cycle.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-primary rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 text-primary-600">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Track Daily', description: 'Log symptoms, moods, and lifestyle factors in seconds' },
            { step: '2', title: 'AI Learns', description: 'Our algorithms identify your unique patterns and cycles' },
            { step: '3', title: 'Get Insights', description: 'Receive personalized predictions and health recommendations' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-rose-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
