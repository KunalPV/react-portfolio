import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

import './home.css';

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
