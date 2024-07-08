import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/knchndwl/kanchan-resume"
          h3='viberr'
          p='Streaming App'
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/knchndwl/kanchan-resume"
          h3='viberr'
          p='Streaming App'
        />
      </div>
    </section>
  );
};

export default Projects;
