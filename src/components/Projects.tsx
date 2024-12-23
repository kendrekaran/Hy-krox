
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Portfolio Website',
    description: 'Minimalist portfolio showcasing creative work and achievements',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    tags: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
    tags: ['React Native', 'TypeScript', 'Firebase']
  }
];

const Projects = () => {
  return (
    <div className="bg-black/95 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">OUR WORK</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            FEATURED <span className="text-purple-400">PROJECTS</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;