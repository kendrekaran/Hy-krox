
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@hykrox.com',
    link: 'mailto:hello@hykrox.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    link: 'https://maps.google.com'
  }
];

const Contact = () => {
  return (
    <div className="bg-black/95 py-20" id="contact-us">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">GET IN TOUCH</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            LET'S <span className="text-purple-400">CONNECT</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all"
            >
              <info.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
              <p className="text-gray-400">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/50 border border-purple-400/20 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/50 border border-purple-400/20 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full bg-black/50 border border-purple-400/20 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
              placeholder="Your message..."
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-400 text-black font-semibold py-3 rounded-lg hover:bg-blue-300 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;