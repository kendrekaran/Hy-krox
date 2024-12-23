
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    content: 'Working with this team was an absolute pleasure. They transformed our vision into reality with incredible attention to detail.',
    image: 'https://i.pinimg.com/474x/7c/fd/36/7cfd36cccb749df9df6f247eabb8dcb2.jpg',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The level of creativity and technical expertise they brought to our project exceeded our expectations.',
    image: 'https://i.pinimg.com/736x/3d/79/50/3d7950898278053bfc8aee04bb1e722a.jpg',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Their innovative approach to design and problem-solving helped us achieve outstanding results.',
    image: 'https://i.pinimg.com/474x/87/3b/88/873b882f5743110850a701195a37bd3c.jpg',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-black py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">TESTIMONIALS</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            WHAT OUR <span className="text-purple-400">CLIENTS SAY</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/50 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-purple-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
