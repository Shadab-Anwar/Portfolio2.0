import TypeWriter from "react-typewriter";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  if (!data) {
    return null;
  }

  const { name, occupation, description, social } = data;

  const renderSocialLinks = () => {
    if (!social || social.length === 0) {
      return null;
    }
    return social.map((network) => (
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.className}></i>
        </a>
      </li>
    ));
  };

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>


        <div className="row banner">
          <div className="banner-text">
          
              <h1 className="responsive-headline">
                <TypeWriter typing={1}>
                  {name ? `I'm ${name}.` : null}
                </TypeWriter>
              </h1>
    
              <h3>
        
                Based in India. <span>{occupation}</span> {description}.
              </h3>

            <hr />
        
              <ul className="social">{renderSocialLinks()}</ul>
    
          </div>
        </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
