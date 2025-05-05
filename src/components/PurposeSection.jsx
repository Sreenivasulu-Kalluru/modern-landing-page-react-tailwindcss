import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const PurposeSection = () => {
  const features = [
    {
      icon: '🟣', // Replace with your actual icon component or image
      title: 'Built for impact',
      description:
        'We identify and nurture a truly diverse team of designers, developers and marketers',
    },
    {
      icon: '🔴', // Replace with your actual icon component or image
      title: 'In sync with you',
      description:
        'We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.',
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          {/* heading text */}
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              ACHIEVE MORE
            </motion.p>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900"
            >
              Purpose of a convoy is to keep your team
            </motion.h2>
          </motion.div>

          {/* bullet points */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <div className="mt-[2px] flex items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
