import { motion } from 'framer-motion';
import { Code, Database, Lock, Smartphone, Cpu, Cloud } from 'lucide-react';

const Technology = () => {
  const techStack = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'TensorFlow AI',
      description: 'Neural networks trained on menstrual health data for accurate cycle predictions'
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Python Backend',
      description: 'Django/Flask framework with robust API management and data processing'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'React Native',
      description: 'Cross-platform mobile apps with seamless sync across iOS and Android'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Secure Database',
      description: 'HIPAA-compliant servers with encrypted storage for all health data'
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption ensures your data remains private and secure'
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable architecture with real-time sync and 99.9% uptime'
    }
  ];

  return (
    <section id="technology" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Built on <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed for accuracy, security, and reliability.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-rose-400 rounded-xl flex items-center justify-center text-white mb-4">
              {tech.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
            <p className="text-gray-600">{tech.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-3xl p-8 lg:p-12 border-2 border-primary-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Your Privacy is Our Priority</h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We understand that menstrual health data is deeply personal. That's why we've built 
            our platform with privacy and security at its core.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'HIPAA Compliant', description: 'Meets healthcare data protection standards' },
              { title: 'Zero Knowledge', description: 'We cannot access your unencrypted data' },
              { title: 'Data Control', description: 'Export or delete your data anytime' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow">
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Technology;
