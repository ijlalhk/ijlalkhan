import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Working on these</p>
        <h2 className={styles.sectionHeadText} style={{ marginBottom: "5%" }}>Tech Stack.</h2>
      </motion.div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {TECHNOLOGIES.map((categoryData) => (
            <div key={categoryData.category}>
              <h2 className="text-lg font-bold mb-4">{categoryData.category}</h2>
              <div className="flex flex-wrap justify-start gap-10">
                {categoryData.items.map((technology) => (
                  <div
                    className="w-28 h-28 flex flex-col items-center"
                    key={technology.name}
                  >
                    <div className="text-4xl">
                      <technology.icon />
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">
                      {technology.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
