import { WorkData } from '../../data/WorkData';
import Seperator from '../common/seperator/Seperator';
import './work.css';
import WorkCard from './WorkCard';

function Work() {
  const data = WorkData;

  return (
    <div>
      <Seperator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Work;
