import  { useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Smile, Users, Users2 } from 'lucide-react';
import { useCounter } from '../utils/useCounter';

const stats = [
  { icon: FolderKanban, label: 'PROJECT', value: 300, suffix: '+' },
  { icon: Smile, label: 'PLEASURE', value: 8.9, isDecimal: true },
  { icon: Users, label: 'CUSTOMER', value: 3000, suffix: '+' },
  { icon: Users2, label: 'TEAM MEMBERS', value: 23 }
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCounter(containerRef, stat.value);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <motion.p
                  className="text-4xl font-bold text-purple-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {stat.isDecimal ? count / 10 : count}
                  {stat.suffix || ''}
                </motion.p>
                <p className="text-white">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;