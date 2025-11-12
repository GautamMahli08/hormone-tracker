import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Data Science & ML Lead',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      bio: 'PhD in Machine Learning, specializing in healthcare AI and predictive modeling'
    },
    {
      name: 'Maya Patel',
      role: 'Backend Engineering',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      bio: 'Full-stack developer with expertise in Python, Django, and scalable API architecture'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Frontend Development',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      bio: 'React Native specialist creating intuitive, accessible mobile experiences'
    },
    {
      name: 'Zoe Williams',
      role: 'UI/UX Design',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
      bio: 'User-centered designer focused on empowering health and wellness platforms'
    }
  ];

  return (
    <section id="team" className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of experts passionate about empowering women through technology.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-gradient-primary rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto bg-white p-2"
                />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900">
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary-600 text-center font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-center text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
