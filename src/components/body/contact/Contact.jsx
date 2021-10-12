import Seperator from '../common/seperator/Seperator';
import SocialContact from '../common/social-contact/SocialContact';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={require("../../../assets/Kunal's Resume.pdf").default}
          >
            <i className="fi fi-rr-cloud-download download-icon"></i>Download
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
