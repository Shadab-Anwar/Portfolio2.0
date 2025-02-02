import { motion } from "framer-motion";

const Footer = ({ data }) => {
  const renderSocialLinks = () => {
    if (!data || !data.social || data.social.length === 0) {
      return null;
    }

    return data.social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    ));
  };

  return (
    <footer>
      <div className="row">
        <motion.div
          className="twelve columns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="social-links">{renderSocialLinks()}</ul>

          <ul className="copyright">
            <li>
              <span style={{ color: "#fff" }}>2025 || Made by &copy; </span>
              <a
                title="Shadab"
                href="https://www.linkedin.com/in/shadab-anwar/"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ color: "#3d3d" }}>Shadab</span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          id="go-top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

