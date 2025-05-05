import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* left */}
        <motion.div variants={fadeIn('right', 0.3)} className="md:w-1/2 w-full">
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-green-500 font-semibold"
          >
            MONITOR
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
          >
            Introducing best mobile carousels
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-600 mb-8">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round, all
            around the world.
          </motion.p>
          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <IoIosArrowRoundForward className="size-6" />
          </motion.a>
        </motion.div>

        {/* right */}
        <motion.div className="md:w-1/2 w-full" variants={fadeIn('up', 0.4)}>
          <img
            variants={fadeIn('up', 0.5)}
            src={monitorCardBg}
            alt="Monitor Image"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
