import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type EducationCardProps = {
  education: (typeof EDUCATION)[number];
};

// Education Card
const EducationCard = ({ education }: EducationCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1e3a8a", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.institution_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {education.institution_name}
      </p>
    </div>

    {/* Education Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.points.map((point, i) => (
        <li
          key={`education-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Education
export const Education = () => {
  return (
    <SectionWrapper idName="education">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My academic background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        {/* Education Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EDUCATION.map((education, i) => (
              <EducationCard key={i} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
