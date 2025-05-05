import scheduleImage from '../assets/stats.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const ScheduleSection = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}
        <motion.div variants={fadeIn('right', 0.3)} className="md:w-1/2 w-full">
          <motion.img
            variants={fadeIn('up', 0.4)}
            src={scheduleImage}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </motion.div>

        {/* right */}
        <motion.div variants={fadeIn('left', 0.3)} className="md:w-1/2 w-full">
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold"
          >
            SCHEDULE
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
          >
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </motion.p>
          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
            <IoIosArrowRoundForward className="size-6" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
