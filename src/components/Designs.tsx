
import { motion } from 'framer-motion';
import {  Monitor, Smartphone, Layout } from 'lucide-react';

const designs = [
  {
    category: 'Web Design',
    icon: Monitor,
    projects: [
      {
        title: 'Saas Product',
        image: 'https://pbs.twimg.com/media/GfeQZI0aEAAW3SH?format=jpg&name=medium',
        description: 'Modern Landing Page for your business'
      },
      {
        title: 'Cloud Clipper',
        image: 'https://pbs.twimg.com/media/GfeQViAbcAAUDbk?format=jpg&name=medium',
        description: 'Modern Hero Section Design for your business'
      }
    ]
  },
  {
    category: 'Mobile Design',
    icon: Smartphone,
    projects: [
      {
        title: 'Calander App',
        image: 'https://pbs.twimg.com/media/GfeJxApW8AArmV0?format=jpg&name=large',
        description: 'Modern Mobile Designs for Business'
      },
      {
        title: 'Banking App',
        image: 'https://pbs.twimg.com/media/GNuSAe-WIAQo59e?format=jpg&name=large',
        description: 'Modern Mobile Designs for Business'
      }
    ]
  },
  {
    category: 'UI Components',
    icon: Layout,
    projects: [
      {
        title: 'Aceternity UI',
        image: 'https://pbs.twimg.com/media/GfeTkWRacAA1gDS?format=jpg&name=medium',
        description: 'Modern UI components Library'
      },
      {
        title: 'Magic UI',
        image: 'https://pbs.twimg.com/media/GfeTqvMasAA6TWd?format=jpg&name=medium',
        description: 'Modern UI components Library'
      }
    ]
  }
];

const Designs = () => {
  return (
    <div className="bg-black py-20 pt-32" id="designs">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">OUR DESIGNS</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            CREATIVE <span className="text-purple-400">PORTFOLIO</span>
          </h3>
        </motion.div>

        <div className="space-y-20">
          {designs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="w-8 h-8 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">{category.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h5 className="text-xl font-bold text-white mb-2">{project.title}</h5>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;
