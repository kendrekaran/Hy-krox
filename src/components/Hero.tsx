import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import ShinyButton from './ui/shiny-button';
import { Sparkle } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home">
      <HeroHighlight className="h-full w-screen  bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
      
        <Spotlight
        
          className="-top-40 left-0 md:left-0 md:-top-20"
          fill="white"
        />
        {/* Content */}
        <div className="max-w-7xl mx-auto  pt-32 sm:pt-44 flex flex-col items-center justify-between z-10">

        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-gray-600/30   border  z-50 space-x-4">
                <Sparkle className='text-purple-500'/>
                <div>Transforming Ideas into Reality</div>
              </div>
            </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-3xl px-12 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center  py-10"
          >
            Empowering your online presence with creative, sleek, and professional {" "}
            <Highlight className="text-black dark:text-white">
            designs by Hykrox.
            </Highlight>
            <div className='pt-10 sm:py-10 flex items-center justify-center space-x-8'>
            <a href='#designs'><ShinyButton className='bg-purple-600 w-32 h-10'>Browse Work</ShinyButton></a>
            <a href="#contact-us"><ShinyButton className='border w-32 h-10'>Contact Us</ShinyButton> </a>
            </div>  
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-center md:text-left"
          >
              <img 
                src="https://pbs.twimg.com/media/Geh2EvqaIAA8LB1?format=jpg&name=medium" 
                alt="Hero Background" 
                className="w-[80vw] h-auto rounded-3xl opacity-80"
              />
            </motion.div>
          
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
