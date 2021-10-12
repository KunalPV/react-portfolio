import SocialContact from '../common/social-contact/SocialContact';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br />
          <span className="info-name">Kunal P V</span>,
          <br /> I love web development
        </div>
        <div className="about-photo">
          <img
            src={require('../../../assets/coding.png').default}
            alt="coding-nerd"
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
