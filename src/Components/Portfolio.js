import { motion } from "framer-motion";

const Portfolio = ({ data }) => {
  if (!data || !data.projects || data.projects.length === 0) {
    return null;
  }

  const renderProjects = data.projects.map((project) => {
    const projectImage = `images/portfolio/${project.image}`;

    return (
      <motion.div
        key={project.title}
        className="columns portfolio-item"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div
          className="item-wrap"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            title={project.title}
          >
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </motion.div>
    );
  });

  return (
    <section id="portfolio">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {renderProjects}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
