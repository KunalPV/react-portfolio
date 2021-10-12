import { SocialData } from '../../../data/SocialData';
import './social-contact.css';

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} key={item.id}>
            <div className="social-icons">
              <img
                src={item.icon}
                alt={item.platform}
                className="social-icon"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
