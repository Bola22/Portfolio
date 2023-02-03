import React from "react";
import "./project.scss";
import { projectData } from "../projectData";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from "framer-motion";


function project() {

  return (
    <section className="project">
      <h2 className="titleSection">Projects</h2>
      <div className="project-tiles">
        <div className="project-tile">
          {projectData.map((item, index) => {
            return (
              <motion.div className="project-cont" 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "easeIn", duration: 0.7, bounce: 0.3 }}
              viewport={{ once: true }}>
                <div className="img-cont">
                  <a href={item.website}>
                  <img src={item.Image} alt="Project image" />
                  </a>
                </div>

                <div className="details-cont">
                  <div className="det">
                  <span>{item.type}</span>
                  <h2>{item.title}</h2>
                  <p className="project-description">{item.description}</p>
                  {/* <p>{item.tech}</p> */}
                  <ul>{item.tech.map(tech => <li key={tech}> {tech} </li>)}</ul>
                  <div className="project-links">
                  <a href={item.website}>
                  <OpenInNewIcon className='icon' />
                  </a>
                  <a href={item.github}>
                  <GitHubIcon className='icon' />
                  </a>
                  </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="ProjectBtn">
        <a href="" className="btn">
          View More
        </a>
      </div>
    </section>
  );
}

export default project;
