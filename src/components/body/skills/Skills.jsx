import { SkillData } from '../../data/SkillData';
import Seperator from '../common/seperator/Seperator';
import SkillCard from './SkillCard';
import './skills.css';

function Skills() {
  const data = SkillData;

  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section" key={Math.random(10)}>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} key={Math.random(10)} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
